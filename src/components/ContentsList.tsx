import { ApiPath } from '../api/config'
import { ICONS } from '../assets'
import useGetMovies from '../hooks/domain/useGetMovies'
import { IContent } from '../types/content'
import { Spinner } from './LoadingScreen'
import ContentRow from './ContentRow'
import { MediaType } from '../types/common'
import { useRef, useState } from 'react'

interface IContentsList {
  title: string
  category: MediaType
  apiPath: ApiPath
}
type scrollDirection = 'LEFT' | 'RIGHT'

// [o] TODO: 슬라이더 형태로 변경, 버튼 클릭 시 좌우 이동(+애니메이션), 버튼을 screen상 좌우에 고정
// [o] TODO: h2>title text 크기 조정
// [o] TODO: API 연동으로 슬라이드 카드에 데이터 뿌리기
// [o] TODO: 슬라이드의 왼쪽 오른쪽 끝에서 버튼 비활성화
// [o] TODO: 버튼을 클릭해서 슬라이드를 이동
function ContentsList({ title, category, apiPath }: IContentsList) {
  const { isLoading, error, contents } = useGetMovies(apiPath)

  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const scrollRef = useRef<HTMLUListElement>(null)

  function moveScroll(direction: scrollDirection) {
    if (scrollRef?.current) {
      const moveAmount = scrollRef.current.clientWidth / 2
      const moving = direction === 'LEFT' ? -moveAmount : moveAmount

      scrollRef.current.scrollBy({
        left: moving,
        behavior: 'smooth',
      })
    }
  }

  function handleScroll() {
    if (scrollRef?.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

      setIsStart(scrollLeft === 0 ? true : false)
      setIsEnd(scrollLeft + clientWidth === scrollWidth ? true : false)
    }
  }

  if (isLoading) {
    return (
      <div className='flex flex-col gap-4 p-4 text-white overflow-hidden h-60 main-page_px'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <div className='relative flex justify-center items-center'>
          <Spinner />
        </div>
      </div>
    )
  }

  const isContents = contents && contents?.results?.length > 0

  if (error || !isContents) {
    throw new Error(error || '현재 컨텐츠 정보를 가져올 수 없습니다')
  }

  const contentsList: IContent[] = contents.results.slice(0, 6)

  return (
    <div
      className='flex flex-col gap-4 p-4 text-white overflow-hidden h-60 mb-10
      main-page_px'
    >
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='relative h-full group'>
        {!isStart && (
          <button
            className='absolute top-0 bottom-0 left-0 w-10 bg-black/50 justify-center items-center z-[11] hidden group-hover:flex'
            onClick={() => moveScroll('LEFT')}
          >
            <span>{ICONS.leftArrow}</span>
          </button>
        )}
        {!isEnd && (
          <button
            className='absolute top-0 bottom-0 right-0 w-10 bg-black/50 justify-center items-center z-[11] hidden group-hover:flex'
            onClick={() => moveScroll('RIGHT')}
          >
            <span>{ICONS.rightArrow}</span>
          </button>
        )}
        <ul
          className='flex overflow-x-scroll scrollbar-hide gap-2 h-full'
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {contentsList.map(content => (
            <ContentRow
              key={content.id}
              category={category}
              content={content}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContentsList
