import { API_ENDPOINT } from '../api/config'
import FeaturedMovie from '../components/FeaturedMovie'
import ContentsList from '../components/ContentsList'
import { Helmet } from 'react-helmet-async'
import { ICONS } from '../assets'

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
    id: 2,
    title: '개봉 예정인 영화',
    apiPath: API_ENDPOINT.MOVIE_UPCOMING,
  },
  {
    id: 3,
    title: '인기 영화',
    apiPath: API_ENDPOINT.MOVIE_POPULAR,
  },
  {
    id: 4,
    title: '평점이 높은 영화',
    apiPath: API_ENDPOINT.MOVIE_TOPRATED,
  },
]

function Home() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <FeaturedMovie />
      <article>
        {categoryList.map(contents => (
          <ContentsList
            key={contents.id}
            title={contents.title}
            apiPath={contents.apiPath}
            params={{ region: 'KR' }}
          />
        ))}
      </article>
    </section>
  )
}

export default Home
