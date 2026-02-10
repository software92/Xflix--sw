import { Link } from 'react-router'
import { ICONS } from '../../assets'

// TODO: 스크롤 시 헤더 배경색상 black으로 변경
function Header() {
  return (
    <header
      className='fixed top-0 w-full flex gap-16 p-4 z-20 
      bg-gradient-to-b from-black/80 to-transparent'
    >
      <h1 className='font-black text-3xl text-red-600 px-2'>XFlix</h1>
      <nav className='flex w-full text-white font-medium justify-end sm:justify-between'>
        <ol className='hidden gap-8 sm:flex text-xl'>
          <li className='hover:opacity-80 place-self-center'>
            <Link to='/'>홈</Link>
          </li>
          <li className='hover:opacity-80 place-self-center'>
            <Link to='/tvs'>TV 프로그램</Link>
          </li>
          <li className='hover:opacity-80 place-self-center'>
            <Link to='/movies'>영화</Link>
          </li>
        </ol>
        <div className='flex gap-4'>
          {/* modal 연결(검색) */}
          <button>{ICONS.search}</button>
          {/* modal 연결(알람) */}
          <button>{ICONS.alarm}</button>
          {/* modal 연결(로그인/회원가입) */}
          <button>{ICONS.user}</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
