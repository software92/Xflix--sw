import MoviesList from '../components/MoviesList'

// [o] TODO: 장르를 선택할 수 있는 select>option 요소 추가(모바일)

// TODO: 선택된 button에 따라 컨텐츠 필터링
// TODO: button 그룹에 선택된 장르 스타일 추가(rol=tab, aria-selected)
// TODO: API에서 장르 목록을 받아와서 button 연결
// TODO: API에서 장르에 맞는 TV 프로그램 목록 받아오기
function TVs() {
  return (
    <>
      <div
        className='w-full pt-24 text-white 
              main-page_px'
      >
        <h1 className='text-3xl md:text-5xl font-semibold'>TV 프로그램</h1>
        <select
          className='pl-4 pr-8 py-2 mt-4 mb-10 border border-white/30 bg-black
            appearance-none rounded md:hidden'
        >
          {['전체', '액션', '드라마', '코미디', 'SF'].map((genre, idx) => (
            <option
              key={idx}
              value={genre}
            >
              {genre}
            </option>
          ))}
        </select>
        {/* 예시
          <button
            className='px-4 py-2 border border-white/50 bg-gray-500/40 rounded-full
             aria-pressed:bg-white aria-pressed:text-gray-500'
            aria-pressed={selected}
            onClick={() => setSelected(prev => !prev)}
          >
            <span className='text-sm'>test</span>
          </button> */}
        <div className='mt-4 mb-10 hidden md:flex md:gap-2'>
          {['전체', '액션', '드라마', '코미디', 'SF'].map((genre, idx) => (
            <button
              key={idx}
              className='px-4 py-2 border border-white/50 bg-gray-500/40 rounded-full'
            >
              <span className='text-sm'>{genre}</span>
            </button>
          ))}
        </div>
      </div>

      <MoviesList title='액션' />
      <MoviesList title='드라마' />
      {/* <MoviesList title='코미디' />
      <MoviesList title='SF' /> */}
    </>
  )
}

export default TVs
