import { Link, useRouteLoaderData } from 'react-router'
import { ICONS } from '../assets'
import { IMovie } from '../types/content'
import { routes } from '../constants/routes'
import { getTmdbImgPath } from '../utils'
import { useMemo } from 'react'
import AdultUI from './AdultUI'
import { IGenre } from '../types/common'

// [o] TODO: image cover 추가 > 추가 후 li의 border 제거
// [o] TODO: image 클릭 시 detail page 이동
// [o] TODO: 아이콘 변경으로 재생 버튼의 색상 변경(fill: white)
// [o] TODO: API 연결 후 props로 데이터를 받아 화면 출력
// [o] TODO: API 연동 후 스타일 최종 수정
function ContentRow({ content }: { content: IMovie }) {
  const { genres } = useRouteLoaderData('root') as { genres: IGenre[] }
  const navPath = (id: string | number) => routes.MOVIE.DETAIL(id)

  const contentMoreInfo = useMemo(() => {
    const title = content.title
    const overview = content.overview
    const adult = content.adult
    const year = content.release_date.split('-')[0]
    const myGenres =
      content.genre_ids
        ?.map(id => genres.find(g => g.id === id))
        .filter((genre): genre is IGenre => !!genre) ?? []

    return {
      title,
      overview,
      adult,
      year,
      genres: myGenres,
    }
  }, [content])

  const lowImageUrl = getTmdbImgPath({
    size: 'w300',
    path: content.backdrop_path,
  })

  return (
    <li className='relative aspect-video min-w-[300px] md:min-w-[380px] hover:opacity-60 transition-colors ease-in delay-150 duration-150 z-10 group/button-hover'>
      <Link
        to={navPath(content.id)}
        className='absolute inset-0'
        aria-label={`${contentMoreInfo.title} 상세보기`}
      >
        {content.backdrop_path && (
          <img
            className='w-full h-full object-cover bg-gray-800'
            src={lowImageUrl}
            alt={contentMoreInfo.title}
          />
        )}
      </Link>

      <div className='absolute inset-0 p-4 flex flex-col justify-end gap-2 opacity-0 group-hover/button-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent'>
        <div className='flex gap-2'>
          {contentMoreInfo.adult && <AdultUI />}
          <h2 className='text-white text-lg font-bold truncate'>
            {contentMoreInfo.title}
          </h2>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            {contentMoreInfo.genres.length > 0 &&
              contentMoreInfo.genres?.map(genre => (
                <span
                  key={genre.id}
                  className='text-xs text-white'
                >
                  {genre.name}
                </span>
              ))}
          </div>
          <span className='text-xs line-clamp-2'>
            {contentMoreInfo.overview}
          </span>
        </div>
        <div className='flex gap-2'>
          {[
            { icon: ICONS.play, label: '재생' },
            { icon: ICONS.plus, label: '목록 추가' },
          ].map((item, idx) => (
            <button
              key={idx}
              type='button'
              aria-label={item.label}
              className='p-2 bg-white/20 hover:bg-red-600 rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center pointer-events-auto'
              onClick={e => {
                e.stopPropagation()
                console.log(item.label)
              }}
            >
              <span className='w-5 h-5 fill-white flex items-center justify-center'>
                {item.icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ContentRow
