import { ApiPath } from '../api/config'
import { ICONS } from '../assets'
import useGetMovies from '../hooks/domain/useGetMovies'
import { IContent } from '../types/content'
import { Spinner } from './LoadingScreen'
import ContentRow from './ContentRow'
import { MediaType } from '../types/common'

interface IContentsList {
  title: string
  category: MediaType
  apiPath: ApiPath
}

// [o] TODO: 슬라이더 형태로 변경, 버튼 클릭 시 좌우 이동(+애니메이션), 버튼을 screen상 좌우에 고정
// [o] TODO: h2>title text 크기 조정
// [o] TODO: API 연동으로 슬라이드 카드에 데이터 뿌리기

// TODO: 슬라이드의 왼쪽 오른쪽 끝에서 버튼 비활성화
// TODO: 버튼을 클릭해서 슬라이드를 이동
function ContentsList({ title, category, apiPath }: IContentsList) {
  const { isLoading, error, contents } = useGetMovies(apiPath)

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

  const contentsList: IContent[] = contents.results

  return (
    <div
      className='flex flex-col gap-4 p-4 text-white overflow-hidden h-60 mb-10
      main-page_px'
    >
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='relative h-full group'>
        <button className='absolute top-0 bottom-0 left-0 w-10 bg-gray-700/100 justify-center items-center z-[11] hidden group-hover:flex hover:scale-150'>
          <span>{ICONS.leftArrow}</span>
        </button>
        <button className='absolute top-0 bottom-0 right-0 w-10 bg-gray-700/100 justify-center items-center z-[11] hidden group-hover:flex hover:scale-150'>
          <span>{ICONS.rightArrow}</span>
        </button>
        <ul className='flex overflow-x-scroll scrollbar-hide gap-2 h-full'>
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
