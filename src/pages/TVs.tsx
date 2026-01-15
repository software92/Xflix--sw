import MoviesList from '../components/MoviesList'

function TVs() {
  return (
    <>
      <div className='bg-black w-full h-[10vh] flex flex-col justify-center gap-4 px-8'>
        <h1 className='text-white text-5xl font-extrabold'>TV 프로그램 목록</h1>
      </div>
      {/* <section>
        <MoviesList title='인기 콘텐츠' />
        <MoviesList title='지금 뜨는 콘텐츠' />
        <MoviesList title='다시보기 추천' />
      </section> */}
    </>
  )
}

export default TVs
