import MoviesList from '../components/MoviesList'

function Movies() {
  return (
    <section className='bg-red-200 w-full gap-4 px-8'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-white text-5xl font-extrabold'>영화 목록</h1>
      </div>
      {/* <section>
        <MoviesList title='인기 콘텐츠' />
        <MoviesList title='지금 뜨는 콘텐츠' />
        <MoviesList title='다시보기 추천' />
      </section> */}
    </section>
  )
}

export default Movies
