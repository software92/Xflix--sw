import { useRouteLoaderData } from 'react-router'
import { IGenre } from '../types/common'
import { useCallback, useMemo, useState } from 'react'
import ContentsList from '../components/ContentsList'
import { API_ENDPOINT } from '../api/config'
import { Helmet } from 'react-helmet-async'

// [o] TODO: 장르를 선택할 수 있는 select>option 요소 추가(모바일)
// [o] TODO: 선택된 button에 따라 컨텐츠 필터링
// [o] TODO: button 그룹에 선택된 장르 스타일 추가(rol=tab, aria-selected)
// [o] TODO: API에서 장르 목록을 받아와서 button 연결
// [o] TODO: API에서 장르에 맞는 영화 목록 받아오기
function MoviesList() {
  const { genres } = useRouteLoaderData('root') as { genres: IGenre[] | [] }
  const [selected, setSelected] = useState(0) // id = select.value

  const displayGenres = useMemo(() => {
    const someOfGenres = genres?.slice(0, 6)
    return {
      tabs: [{ id: 0, name: '전체' }, ...someOfGenres],
      lists: someOfGenres,
    }
  }, [genres])

  const getSearchParams = useCallback(
    (genreId: number) => ({
      include_adult: 'false',
      include_video: 'false',
      sort_by: 'popularity.desc',
      with_genres: String(genreId),
    }),
    [],
  )

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(e.target.value))
  }
  return (
    <>
      <Helmet>
        <title>Movie List</title>
      </Helmet>
      <div className='w-full pt-24 text-white main-page_px'>
        <div className='flex flex-col'>
          <label
            className='text-3xl md:text-5xl font-semibold'
            htmlFor='genre-filter'
          >
            영화
          </label>
          <select
            id='genre-filter'
            className='pl-4 pr-8 py-2 mt-4 mb-10 border border-white/30 bg-black w-fit
            appearance-none rounded md:hidden'
            onChange={handleSelectChange}
            value={selected}
          >
            {displayGenres.tabs.map(genre => (
              <option
                key={genre.id}
                value={genre.id}
              >
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mt-4 mb-10 hidden md:flex md:flex-wrap md:gap-2'>
          {displayGenres.tabs.map(genre => (
            <button
              key={genre.id}
              className='px-3 py-1 border border-white/50 bg-gray-500/40 rounded-full
              aria-pressed:bg-white aria-pressed:text-gray-500'
              role='tab'
              aria-pressed={genre.id === selected}
              onClick={() => setSelected(genre.id)}
            >
              <span className='text-sm font-bold'>{genre.name}</span>
            </button>
          ))}
        </div>
      </div>

      {displayGenres.lists.map(genre => {
        if (selected !== 0 && selected !== genre.id) return null

        return (
          <ContentsList
            key={genre.id}
            title={genre.name}
            apiPath={API_ENDPOINT.MOVIE_FILTERD}
            params={getSearchParams(genre.id)}
          />
        )
      })}
    </>
  )
}

export default MoviesList
