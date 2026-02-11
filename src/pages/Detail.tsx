import { ICONS } from '../assets'
import MoviesList from '../components/MoviesList'

// detail
interface Genre {
  id: number
  name: string
}
interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}
interface Movie {
  adult: boolean
  backdrop_path: string
  genres: Genre[]
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  status: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  spoken_languages: SpokenLanguage[]
  tagline: string
}

// top rated movie data
const tempMovie: Movie = {
  adult: false,
  backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 80,
      name: 'Crime',
    },
  ],
  id: 278,
  imdb_id: 'tt0111161',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  overview:
    'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  popularity: 32.97,
  poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
  release_date: '1994-09-23',
  runtime: 142,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'Fear can hold you prisoner. Hope can set you free.',
  title: 'The Shawshank Redemption',
  video: false,
  vote_average: 8.71,
  vote_count: 28299,
}

const imageBaseURL = (size: string = 'original') =>
  `https://image.tmdb.org/t/p/${size}`
const backdropBaseURL = (size: string) => `https://image.tmdb.org/t/p/${size}/`

function FloatingButton() {
  return (
    <button
      className='fixed top-20 left-4 md:left-10 rounded-full bg-black/60 backdrop-blur-sm text-white pl-2 pr-4 py-2 flex items-center gap-2 fill-white z-20'
      onClick={() => console.log('뒤로 가기')}
    >
      {ICONS.leftArrow}
      <span>뒤로 가기</span>
    </button>
  )
}

// TODO: API 연동해서 데이터 화면에 출력
// TODO: 뒤로 가기 버튼 클릭 시 이전 페이지 이동

function Detail() {
  return (
    <>
      <div className='relative w-full flex flex-col justify-center gap-4'>
        <FloatingButton />
        <div
          className={`min-h-[80vh] md:min-h-[70vh] w-full text-white z-10
            flex flex-col justify-end pb-28 gap-6
            main-page_px`}
        >
          <h1 className='text-4xl font-semibold'>{tempMovie.original_title}</h1>
          {/* row */}
          <div className='flex gap-4'>
            <span>{tempMovie.release_date}</span>
            <span>
              {Math.floor(tempMovie.runtime / 60)}h {tempMovie.runtime % 60}m
            </span>
          </div>
          <p className='line-clamp-2'>{tempMovie.overview}</p>
          <div className='flex gap-3'>
            <button className='px-3 md:px-5 py-3 flex gap-2 items-center rounded-md bg-gray-200 text-black hover:bg-gray-200/95 text-sm'>
              {ICONS.play}
              <span>재생</span>
            </button>
            <button className='px-3 md:px-5 py-3 flex gap-2 items-center rounded-md hover:bg-white/30 bg-gray-300/25 text-white backdrop-blur-md text-sm'>
              {ICONS.plus}
              <span>찜하기</span>
            </button>
          </div>
          <div className='absolute -bottom-8 left-[50%] translate-x-[-50%] animate-tongtong'>
            {ICONS.chevronDown}
          </div>
        </div>
        <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzY4NDU0ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080")] bg-cover bg-center bg-no-repeat' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/0' />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent' />
      </div>
      <div
        className='flex flex-col md:grid md:grid-cols-3 gap-16 py-8
      text-white/80 main-page_px'
      >
        <div className='md:col-span-2 flex flex-col gap-4'>
          <h3 className='text-lg text-white/90'>줄거리</h3>
          <p className=''>{tempMovie.overview}</p>
        </div>
        <div className='md:col-span-1 flex flex-col gap-3 text-sm'>
          <div className='flex gap-2 items-center'>
            <h4 className='text-sm text-gray-400/80'>출연:</h4>
            <p className=''>가나다라</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h4 className='text-sm text-gray-400/80'>감독:</h4>
            <p className=''>가나다라</p>
          </div>
          <div className='flex gap-2 items-center'>
            <h4 className='text-sm text-gray-400/80'>장르:</h4>
            <p className=''>가나다라</p>
          </div>
        </div>
      </div>

      <MoviesList title='인기 있는' />
      <MoviesList title='액션' />
    </>
  )
}

export default Detail
