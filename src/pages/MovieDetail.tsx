import { useNavigate, useParams } from 'react-router'
import { ICONS } from '../assets'
import { useEffect, useState } from 'react'
import { getMovie } from '../api/tmDBService'
import { Spinner } from '../components/LoadingScreen'
import Modal from '../components/common/Modal'
import { IContent, IMovie } from '../types/content'
import { IApiReturn } from '../types/api'
import ContentsList from '../components/ContentsList'
import { MediaType } from '../types/common'

interface IMovieMovieDetailSection {
  movie: IMovie | null
  isLoading: boolean
  error: IApiReturn<IContent>['error']
}

function FloatingButton() {
  const navigate = useNavigate()

  return (
    <button
      className='fixed top-20 left-4 md:left-10 rounded-full bg-black/60 backdrop-blur-sm text-white pl-2 pr-4 py-2 flex items-center gap-2 fill-white z-20'
      onClick={() => navigate(-1)}
    >
      {ICONS.leftArrow}
      <span>뒤로 가기</span>
    </button>
  )
}

// [x] TODO: API 연동해서 데이터 화면에 출력
// [x] TODO: 뒤로 가기 버튼 클릭 시 이전 페이지 이동
function MovieDetail() {
  const [error, setError] = useState<IApiReturn<IContent>['error']>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<IApiReturn<IMovie>['data'] | IMovie>(null)

  const { id } = useParams()

  useEffect(() => {
    if (!id) {
      return
    }

    async function fetchMovie(id: string | number) {
      const params = {
        append_to_response: 'credits',
      }

      const result = await getMovie(id, params)

      setMovie(result.data)
      setIsLoading(false)
      setError(result.error)
    }

    fetchMovie(id)
  }, [id])

  return (
    <>
      <article>
        <MovieMovieDetailSection
          movie={movie}
          error={error}
          isLoading={isLoading}
        />

        {/* temp  */}
        {/* <ContentsList title='인기 있는' apiPath='' category={MediaType.MOVIE}/> */}
      </article>
      <Modal>
        <FloatingButton />
      </Modal>
    </>
  )
}

function MovieMovieDetailSection({
  movie,
  isLoading,
  error,
}: IMovieMovieDetailSection) {
  if (isLoading) {
    return (
      <div className='relative min-h-[85vh] w-full flex flex-col justify-center items-center main-page_px'>
        <Spinner />
        <p className='text-xl font-bold text-white'>Loading...</p>
      </div>
    )
  }
  if (!isLoading && !movie && error) {
    throw new Error(error || '현재 영화 정보를 가져올 수 없습니다')
  }

  const actors = movie?.credits?.cast.slice(0, 5).map(actor => actor.name)
  const genres = movie?.genres?.map(genre => genre.name)
  const director = movie?.credits?.crew[0].name

  return (
    movie && (
      <div className='main-page_px'>
        <div className='relative min-h-[85vh] w-full flex gap-4'>
          <div
            className={`text-white z-10
            flex flex-col gap-6 justify-end pb-8 md:pb-16`}
          >
            <h1 className='font-light text-4xl md:text-6xl'>{movie.title}</h1>
            <div className='flex gap-4 text-base md:text-lg'>
              <span>{movie.release_date}</span>
              <span>
                {Math.floor(movie.runtime / 60)}시간 {movie.runtime % 60}분
              </span>
            </div>

            <p className='line-clamp-2 text-base md:text-lg'>{movie.tagline}</p>
            <div className='flex gap-3'>
              <button className='px-3 md:px-4 py-4 flex gap-2 items-center rounded-md bg-gray-200 text-black hover:bg-gray-200/95 text-sm'>
                {ICONS.play}
                <span className='text-lg font-semibold'>재생</span>
              </button>
              <button className='px-3 md:px-5 py-4 flex gap-2 items-center rounded-md hover:bg-white/30 bg-gray-300/25 text-white backdrop-blur-md text-sm'>
                {ICONS.plus}
                <span className='text-lg font-semibold'>상세 정보 버튼</span>
              </button>
            </div>
            <div className='absolute -bottom-6 left-[50%] translate-x-[-50%] animate-tongtong'>
              {ICONS.chevronDown}
            </div>
          </div>
          <div className='absolute inset-0'>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={`${movie.title} 포스터` || '영화 포스터'}
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/0' />
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent' />
          </div>
        </div>
        <div className='flex flex-col gap-20 mt-10 md:flex-row md:gap-10 text-white'>
          <div className='flex flex-col gap-4'>
            <h3>줄거리</h3>
            <span>{movie.overview}</span>
          </div>
          <div className='flex flex-col gap-3'>
            {[
              { label: '출연', content: actors?.join(', ') },
              { label: '장르', content: genres?.join(', ') },
              { label: '감독', content: director },
            ].map((item, idx) => (
              <div
                key={idx}
                className='flex items-center gap-2'
              >
                <h4 className='text-sm text-gray-400/80 text-nowrap place-self-start'>
                  {item.label}:{' '}
                </h4>
                <span className='text-sm place-self-start'>{item.content}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default MovieDetail
