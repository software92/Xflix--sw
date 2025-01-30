import { ICONS } from '../assets'

function MainContent() {
  return (
    <div className='bg-gray-500 w-full h-[80vh] flex flex-col justify-center gap-4 px-8 mt-[-64px]'>
      <h1 className='text-white text-5xl font-extrabold'>메인 영화</h1>
      <p className='text-white text-lg [text-[gray-500]]'>메인 설명글</p>
      <div className='flex gap-4 hover:*:opacity-80'>
        <button className='flex gap-2 my-2 px-8 py-3 rounded bg-white'>
          {ICONS.play} <span>재생</span>
        </button>
        {/* navigate or popup event */}
        <button className='flex gap-2 my-2 px-8 py-3 rounded bg-gray-400 text-white font-bold'>
          {ICONS.info} <span>상세 정보</span>
        </button>
      </div>
    </div>
  )
}

export default MainContent
