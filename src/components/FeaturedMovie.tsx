import { useNavigate } from 'react-router'
import { ICONS } from '../assets'

// TODO: url, title, description props로 받아오기
// TODO: 이미지 클릭 시 deatail page 이동, 커서 포인터
// TODO: 상세 정보 시 deatail page 이동
function FeaturedMovie() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/movies/toDetailPage')
  }
  return (
    <article className='relative h-[80vh] w-full overflow-hidden'>
      {/* background image */}
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1600333791066-f3c7e752b44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGFjdGlvbiUyMGhlcm98ZW58MXx8fHwxNzY4NDU0ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
          alt='영화 포스터'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent' />
      </div>

      <div className='relative w-full lg:w-1/2 h-full flex flex-col justify-end pb-28 md:pb-40 main-page_px'>
        <h1 className='text-4xl md:text-6xl mb-4 text-white drop-shadow-lg'>
          메인 영화
        </h1>
        <p className='text-base md:text-lg text-white/90 mb-8 line-clamp-3 drop-shadow-md'>
          메인 설명글.메인 설명글.메인 설명글.메인 설명글.메인 설명글.메인
          설명글.메인 설명글.메인 설명글.메인 설명글.메인 설명글. 메인
          설명글.메인 설명글.
        </p>

        <div className='flex gap-4 hover:*:opacity-80'>
          <button
            className='flex items-center gap-2 px-3 md:px-5 py-3 rounded-md font-bold bg-white hover:bg-white/90 whitespace-nowrap'
            onClick={e => {
              // e.stopPropagation()
              console.log('btn')
            }}
          >
            {ICONS.play} <span>재생</span>
          </button>
          {/* navigate or popup event */}
          <button
            className='flex gap-2 px-3 md:px-4 py-3 rounded bg-gray-400 text-white font-bold'
            onClick={e => {
              // e.stopPropagation()
              handleClick()
              console.log('btn')
            }}
          >
            {ICONS.info} <span>상세 정보</span>
          </button>
        </div>
      </div>

      {/* bottom fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent' />
    </article>
  )
}

export default FeaturedMovie
