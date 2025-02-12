import { Link } from 'react-router'
import { ICONS } from '../../assets'

function Header() {
  return (
    <header className='sticky top-0 w-full flex gap-16 p-4 bg-black z-10'>
      {/* link 추가 */}
      <h1 className='font-black text-2xl text-red-600 px-2 hover:cursor-pointer'>
        <Link to='/'>XFlix</Link>
      </h1>
      <nav className='flex w-full text-white font-medium justify-end sm:justify-between'>
        <ol className='hidden gap-8 sm:flex'>
          {/* link 추가 */}
          <li className='hover:opacity-80 self-center hover:cursor-pointer'>
            <Link to='/'>홈</Link>
          </li>
          <li className='hover:opacity-80 self-center hover:cursor-pointer '>
            <Link to='/tvs'>TV 프로그램</Link>
          </li>
          <li className='hover:opacity-80 self-center hover:cursor-pointer '>
            <Link to='/movies'>영화</Link>
          </li>
          {/* <li className='hover:opacity-80 self-center hover:cursor-pointer '>
            <Link to='/movies'>요즘 컨텐츠</Link>            
          </li> */}
        </ol>
        <div className='flex gap-4'>
          {/* link 추가 */}
          <div className='self-center hover:cursor-pointer'>
            <Link to='/search'>{ICONS.search}</Link>
          </div>
          <div className='self-center hover:cursor-pointer'>{ICONS.alarm}</div>
          <div className='self-center hover:cursor-pointer'>{ICONS.user}</div>
        </div>
      </nav>
    </header>
  )
}

export default Header
