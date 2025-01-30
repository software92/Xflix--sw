import { ICONS } from '../../assets'

function Header() {
  return (
    <header className='flex'>
      <div>XFlix</div>
      <nav>
        <ol>
          <li>홈</li>
          <li>TV 프로그램</li>
          <li>영화</li>
          <li>요즘 컨텐츠</li>
        </ol>
        <div>
          {ICONS.search}
          {ICONS.alarm}
          {ICONS.user}
        </div>
      </nav>
    </header>
  )
}

export default Header
