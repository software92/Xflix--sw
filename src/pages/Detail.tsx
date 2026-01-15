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

function Detail() {
  return (
    <>
      {/* <div className='bg-gray-500 w-full h-[80vh] flex flex-col justify-center gap-4 px-8 mt-[-64px]'> */}
      <div className='bg-gray-500 w-full h-[50vh] flex flex-col justify-center gap-4 px-8 '>
        <div
          className={`bg-[url("${
            imageBaseURL() + tempMovie.poster_path
          }")] bg-cover bg-center bg-no-repeat h-[200px]`}
        >
          <h1>영화 상세 페이지</h1>
        </div>
        <h1>{tempMovie.original_title}</h1>
        <p>
          {tempMovie.release_date} - {tempMovie.vote_average} -{' '}
          {tempMovie.popularity}
        </p>
        <p>{tempMovie.overview}</p>

        <div className='flex gap-2'>
          <button>재생 버튼</button>
          <button>상세 정보 버튼</button>
        </div>
      </div>
      {/* <div>
        <h2>유사 컨텐츠</h2>
        <div className='flex gap-4'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div> */}
    </>
  )
}

export default Detail
