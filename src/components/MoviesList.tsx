import { ICONS } from '../assets'
import MoviesRow from './MoviesRow'

interface IMoviesList {
  title: string
}

// TODO: 슬라이더 형태로 변경, 버튼 클릭 시 좌우 이동(+애니메이션), 버튼을 screen상 좌우에 고정

// TODO: 슬라이드의 왼쪽 오른쪽 끝에서 버튼 비활성화
// TODO: 버튼을 클릭해서 슬라이드를 이동
// TODO: API 연동으로 슬라이드 카드에 데이터 뿌리기
function MoviesList({ title }: IMoviesList) {
  return (
    <div className='flex flex-col gap-4 p-4 text-white overflow-hidden h-60 group'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='relative h-full'>
        <button
          className='absolute top-0 bottom-0 left-0 w-10 flex justify-center items-center bg-white z-10 opacity-0 group-hover:opacity-15'
          onClick={() => console.log('left clicked')}
        >
          <span>{ICONS.leftArrow}</span>
        </button>
        <button
          className='absolute top-0 bottom-0 right-0 w-10 flex justify-center items-center bg-white z-10 opacity-0 group-hover:opacity-15'
          onClick={() => console.log('right clicked')}
        >
          <span>{ICONS.rightArrow}</span>
        </button>
        <ul className='flex overflow-x-scroll scrollbar-hide gap-2 h-full'>
          {Array.from({ length: 8 }).map((_, i) => (
            <MoviesRow key={i} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MoviesList
