import { useNavigate } from 'react-router'
import { ICONS } from '../assets'
import { IContent } from '../types/content'
import { routes } from '../constants/routes'
import { MediaType } from '../types/common'
import { getTmdbImgPath } from '../utils'

// TODO: image cover 추가 > 추가 후 li의 border 제거
// TODO: image 클릭 시 detail page 이동
// TODO: 아이콘 변경으로 재생 버튼의 색상 변경(fill: white)
// TODO: API 연결 후 props로 데이터를 받아 화면 출력
// TODO: API 연동 후 스타일 최종 수정

interface IContentRow {
  content: IContent
  category: MediaType
}
function ContentRow({ content, category }: IContentRow) {
  const navigate = useNavigate()

  console.log('content', content)

  // detail page 연결(movies / tvs)
  const handleClick = () => {
    if (category === MediaType.MOVIE) {
      navigate(routes.MOVIE.DETAIL(content.id))
    } else {
      navigate(routes.TV.DETAIL(content.id))
    }
    return
  }

  return (
    <li className='relative aspect-video min-w-[250px] md:min-w-[300px] hover:opacity-60 transition-colors ease-in delay-150 duration-150 group/button-hover'>
      {/* cover */}
      <img
        className='absolute inset-0 aspect-video bg-white'
        src={getTmdbImgPath({ size: 'w300', path: content.backdrop_path })}
        alt={`${content.title} 이미지`}
      />
      <div
        className='h-full flex flex-col justify-end gap-2 cursor-pointer rounded p-4 bg-black/10 opacity-0 group-hover/button-hover:opacity-80 duration-200'
        onClick={handleClick}
      >
        <h2 className='text-lg font-semibold text-red-800'>영화 a</h2>
        <div className='flex gap-2'>
          {/* 재생, 목록 추가 버튼 동작은 미 구현 */}
          {[ICONS.play, ICONS.plus].map((icon, idx) => (
            <button
              key={idx}
              className='p-2 bg-red-400 rounded-full'
              onClick={e => {
                e.stopPropagation()
                console.log('btn')
              }}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </li>
  )
}

export default ContentRow
