import { API_ENDPOINT } from '../api/config'
import FeaturedMovie from '../components/FeaturedMovie'
import ContentsList from '../components/ContentsList'

// get api response types는 동일
// 상영중인 영화
// https://api.themoviedb.org/3/movie/now_playing
// 인기 영화
// https://api.themoviedb.org/3/movie/popular

// (time_window: day, week)
// 이주의 영화
// https://api.themoviedb.org/3/trending/movie/{time_window}

const categoryList = [
  {
    id: 1,
    title: '상영중인 영화',
    apiPath: API_ENDPOINT.NOW_PLAYING,
  },
  {
    id: 3,
    title: '인기 영화',
    apiPath: API_ENDPOINT.MOVIE_POPULAR,
  },
]

function Home() {
  return (
    <section>
      <FeaturedMovie />
      <article>
        {categoryList.map(contents => (
          <ContentsList
            key={contents.id}
            title={contents.title}
            apiPath={contents.apiPath}
          />
        ))}
      </article>
    </section>
  )
}

export default Home
