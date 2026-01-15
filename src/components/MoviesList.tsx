import MoviesRow from './MoviesRow'

interface IMoviesList {
  title: string
}

function MoviesList({ title }: IMoviesList) {
  return (
    <div className='py-6 px-4 flex flex-col gap-4 bg-pink-50 m-4 text-white'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {/* contents list */}
      {/* grid-cols-[value]: value 부분에서 공백이 있으면 스타일 적용이 되지 않는다 */}
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(220px,auto))] gap-4'>
        {/* <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-6'> */}
        {/* contents row */}
        <MoviesRow />
        <MoviesRow />
        <MoviesRow />
        <MoviesRow />
        <MoviesRow />
      </ul>
    </div>
  )
}

export default MoviesList
