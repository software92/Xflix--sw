import FeaturedMovie from '../components/FeaturedMovie'
import MoviesList from '../components/MoviesList'

function Home() {
  return (
    <section>
      <FeaturedMovie />
      <article>
        <MoviesList title='인기 콘텐츠' />
        <MoviesList title='인기 콘텐츠' />
        {/* <MoviesList title='지금 뜨는 콘텐츠' />
        <MoviesList title='다시보기 추천' /> */}
      </article>
    </section>
  )
}

export default Home
