import { useNavigate } from 'react-router'
import { ICONS } from '../assets'

// TODO: API 연결 후 props로 데이터를 받아 화면 출력
// TODO: image cover 추가 > 추가 후 li의 border 제거
// TODO: image 클릭 시 detail page 이동
function MoviesRow() {
  const navigate = useNavigate()

  // detail page 연결(movies / tvs)
  const handleClick = () => {
    navigate('/movies/123')
  }

  return (
    <li className='aspect-video min-w-[250px] md:min-w-[300px] border-2 border-red-100 hover:scale-[1.04] transition-transform ease-in delay-150 duration-150 group/button-hover'>
      {/* cover */}
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

export default MoviesRow
