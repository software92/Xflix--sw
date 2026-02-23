import { ApiPath } from '../api/config'
import { ICONS } from '../assets'
import useGetContents from '../hooks/domain/useGetContents'
import { Spinner } from './LoadingScreen'
import ContentRow from './ContentRow'
import { useRef, useState } from 'react'
import { devLog } from '../utils'

interface IContentsList {
  title: string
  apiPath: ApiPath
}
type scrollDirection = 'LEFT' | 'RIGHT'

function ContentsList({ title, apiPath }: IContentsList) {
  const { isLoading, error, contents } = useGetContents(apiPath)

  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const scrollRef = useRef<HTMLUListElement>(null)

  const someOfContents = contents?.slice(0, 6)

  function moveScroll(direction: scrollDirection) {
    if (!scrollRef?.current) return
    const moveAmount = scrollRef.current.clientWidth / 2
    const moving = direction === 'LEFT' ? -moveAmount : moveAmount

    scrollRef.current.scrollBy({
      left: moving,
      behavior: 'smooth',
    })
  }

  function handleScroll() {
    if (scrollRef?.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

      setIsStart(scrollLeft <= 10)
      setIsEnd(scrollLeft + clientWidth >= scrollWidth - 10)
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

  if (!someOfContents || error) {
    if (error) devLog({ message: error, type: 'error' })
    return null
  }

  return (
    <div
      className='flex flex-col gap-4 p-4 text-white overflow-hidden h-60 my-10
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
          {someOfContents.map(content => (
            <ContentRow
              key={content.id}
              content={content}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContentsList
