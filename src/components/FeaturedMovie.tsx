import { Link, useNavigate } from 'react-router'
import { ICONS } from '../assets'
import { Spinner } from './LoadingScreen'
import { routes } from '../constants/routes'
import useGetMovies from '../hooks/domain/useGetMovies'
import { API_ENDPOINT } from '../api/config'

// [x] TODO: url, title, description props로 받아오기
// [x] TODO: 이미지 클릭 시 deatail page 이동, 커서 포인터
// [x] TODO: 상세 정보 시 deatail page 이동
function FeaturedMovie() {
  const { TRENDING } = API_ENDPOINT
  const {
    isLoading,
    error,
    contents: trendingContents,
  } = useGetMovies(TRENDING)
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <article className='flex justify-center items-center h-[80vh] w-full overflow-hidden bg-black'>
        <Spinner />
      </article>
    )
  }

  const featuredMovie = trendingContents?.results?.[0]

  if (error || !featuredMovie) {
    throw new Error(error || '현재 영화 정보를 가져올 수 없습니다')
  }
  const detailPageNavigate = () => {
    navigate(routes.MOVIE.DETAIL(featuredMovie.id))
  }

  return (
    <article className='relative h-[80vh] w-full'>
      <Link
        to={routes.MOVIE.DETAIL(featuredMovie.id)}
        className='absolute inset-0 z-0'
        aria-label='상세 페이지로 이동'
      >
        <div className='absolute inset-0'>
          <img
            src={`https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path}`}
            alt={`${featuredMovie.title} 포스터` || '영화 포스터'}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent' />
        </div>

        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent' />
      </Link>

      <div className='pointer-events-none relative w-full lg:w-1/2 h-full flex flex-col justify-end pb-8 md:pb-16 main-page_px'>
        <h1 className='text-4xl md:text-6xl mb-4 text-white drop-shadow-lg'>
          {featuredMovie.title}
        </h1>
        <p className='text-base md:text-lg text-white/90 mb-8 line-clamp-3 drop-shadow-md'>
          {featuredMovie.overview}
        </p>

        <div className='flex gap-4 hover:*:opacity-80'>
          <button className='pointer-events-auto flex items-center gap-2 px-3 md:px-5 py-3 rounded-md font-bold bg-white hover:bg-white/90 whitespace-nowrap'>
            {ICONS.play} <span>재생</span>
          </button>
          <button
            className='pointer-events-auto flex gap-2 px-3 md:px-4 py-3 rounded bg-gray-400 text-white font-bold'
            onClick={detailPageNavigate}
          >
            {ICONS.info} <span>상세 정보</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default FeaturedMovie
