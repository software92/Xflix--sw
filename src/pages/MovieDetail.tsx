import { useNavigate, useParams } from 'react-router'
import { ICONS } from '../assets'
import { useMemo } from 'react'
import { Spinner } from '../components/LoadingScreen'
import Modal from '../components/common/Modal'
import { IMovie } from '../types/content'
import ContentsList from '../components/ContentsList'
import { API_ENDPOINT } from '../api/config'
import useGetMovie from '../hooks/domain/useGetMovie'
import { getTmdbImgPath } from '../utils'
import ImageLazyLoadUI from '../components/common/ImageLazyLoadUI'

interface IMovieMovieDetailSection {
  movie: IMovie | null
  error: string | null
}

const queryParams = {
  append_to_response: 'credits',
}

// [x] TODO: API 연동해서 데이터 화면에 출력
// [x] TODO: 뒤로 가기 버튼 클릭 시 이전 페이지 이동
function MovieDetail() {
  const { id } = useParams()
  const { error, isLoading, movie } = useGetMovie(id!, queryParams)

  if (isLoading) {
    return (
      <div className='relative min-h-[85vh] w-full flex flex-col justify-center items-center main-page_px'>
        <Spinner />
        <p className='text-xl font-bold text-white'>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <article key={id}>
        <MovieMovieDetailSection
          movie={movie}
          error={error}
        />

        <ContentsList
          title='비슷한 장르 영화'
          apiPath={API_ENDPOINT.MOVIE_SIMILAR(id!)}
        />
        <ContentsList
          title='추천하는 영화'
          apiPath={API_ENDPOINT.MOVIE_RECOMEND(id!)}
        />
      </article>
      <Modal>
        <FloatingButton />
      </Modal>
    </>
  )
}

function MovieMovieDetailSection({ movie, error }: IMovieMovieDetailSection) {
  if (!movie && error) {
    throw new Error(error || '현재 영화 정보를 가져올 수 없습니다')
  }

  const movieMoreInfo = useMemo(() => {
    if (!movie) return

    const actors = movie.credits?.cast
      .slice(0, 5)
      .map(actor => actor.name)
      .join(', ')
    const genres = movie.genres?.map(genre => genre.name).join(', ')
    const director = movie?.credits?.crew.find(
      person => person.job === 'Director',
    )?.name
    const runtime = `${Math.floor(movie.runtime / 60)}시간 ${movie.runtime % 60}분`

    return { actors, genres, director, runtime }
  }, [movie])

  if (!movie || !movieMoreInfo) return null

  return (
    <div className='pb-10 *:main-page_px'>
      <div className='relative min-h-[85vh] w-full flex gap-4'>
        <div
          className={`text-white z-10
            flex flex-col gap-6 justify-end pb-8 md:pb-16`}
        >
          <h1 className='font-semibold text-4xl md:text-6xl text-balance'>
            {movie.title}
          </h1>
          <div className='flex gap-4 text-base md:text-lg'>
            {movie?.adult && <AdultUI />}
            <span>{movie.release_date}</span>
            <span>{movieMoreInfo.runtime}</span>
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
        <MovieBackdrop
          path={movie.backdrop_path}
          title={movie.title}
        />
      </div>
      <div className='flex flex-col gap-20 mt-10 md:flex-row md:gap-10 text-white'>
        {movie.overview && (
          <div className='flex flex-col gap-4 w-full md:w-3/4'>
            <h3>줄거리</h3>
            <span>{movie.overview}</span>
          </div>
        )}
        <div className='flex flex-col gap-3 w-full md:w-1/4'>
          {[
            { label: '출연', content: movieMoreInfo.actors },
            { label: '장르', content: movieMoreInfo.genres },
            { label: '감독', content: movieMoreInfo.director },
          ].map((item, idx) => (
            <div
              key={idx}
              className='flex items-center gap-2'
            >
              <h4 className='text-sm text-gray-400/80 text-nowrap place-self-start'>
                {`${item.label}: `}
              </h4>
              <span className='text-sm place-self-start'>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
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

function MovieBackdrop({ path, title }: { path?: string; title: string }) {
  if (!path) return null

  const lowImgUrl = getTmdbImgPath({ path, size: 'w300' })
  const highImgUrl = getTmdbImgPath({ path, size: 'original' })

  return (
    <div className='absolute inset-0'>
      <ImageLazyLoadUI
        lowUrl={lowImgUrl}
        highUrl={highImgUrl}
        style='absolute inset-0 w-full h-full object-fill'
        name={title}
      />

      <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/0' />
      <div className='absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent' />
    </div>
  )
}

function AdultUI() {
  return (
    <div className='border border-white px-2 rounded-md'>
      <span>19</span>
    </div>
  )
}
export default MovieDetail
