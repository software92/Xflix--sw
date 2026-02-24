import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { ICONS } from '../../assets'
import { routes } from '../../constants/routes'
import Modal from '../common/Modal'
import { useGetScroll, useScrollBlock } from '../../hooks/common'

interface INavItem {
  navClass: string
  liClass: string
  itemClass: string
  children: React.ReactNode
}

// constants/navigation.ts 또는 Header 내부 상단
const NAV_ITEMS = [
  { id: 1, label: '홈', path: routes.ROOT },
  { id: 3, label: '영화', path: routes.MOVIE.LIST },
]

function useCloseNav(cb: () => void) {
  const location = useLocation()

  useEffect(() => {
    cb()
  }, [location.key])
}

// [x] TODO: 스크롤 시 헤더 배경색상 black으로 변경
// [x] TODO: 반응형 네비게이션 바 고려(모바일 햄버거 메뉴)
// [x] TODO: 로고 이미지에 메인 페이지로 연결 링크 추가
function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLocked, setIsLocked] = useState(false)

  const scrollY = useGetScroll()
  const isScroll = scrollY > 20

  useCloseNav(modalClose)
  useScrollBlock(isLocked, 'sm')

  function modalOpen() {
    setIsOpen(true)
    setIsLocked(true)
  }
  function modalClose() {
    setIsOpen(false)
    setIsLocked(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full flex gap-16 p-4 z-20 transition-colors duration-500 ease-in-out
          ${!isScroll ? 'bg-gradient-to-b from-black/80 to-transparent' : 'bg-black'}`}
      >
        <Link to={routes.ROOT}>
          {/* <h1 className='font-black text-3xl text-red-600 px-2'>XFlix</h1> */}
          {ICONS.logo}
        </Link>
        {/* desktop nav */}
        {!isOpen && (
          <NavItem
            navClass='flex w-full text-white font-medium justify-end sm:justify-between'
            liClass='hidden gap-8 sm:flex text-xl'
            itemClass='hover:opacity-80 place-self-center'
          >
            <div className='flex gap-4'>
              {/* modal 연결(검색) */}
              <button>{ICONS.search}</button>
              {/* 모바일 메뉴 */}
              <button
                className='block sm:hidden'
                onClick={modalOpen}
              >
                {ICONS.hamburgerMenu}
              </button>
            </div>
          </NavItem>
        )}

        {/* mobile nav */}
        {isOpen && (
          <Modal>
            <MobileMenu modalClose={modalClose} />
          </Modal>
        )}
      </header>
    </>
  )
}

function NavItem({ navClass, liClass, itemClass, children }: INavItem) {
  return (
    <nav className={navClass}>
      <ol className={liClass}>
        {NAV_ITEMS.map(item => (
          <li
            key={item.id}
            className={itemClass}
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ol>
      {children}
    </nav>
  )
}

function MobileMenu({ modalClose }: { modalClose: () => void }) {
  return (
    <NavItem
      navClass='fixed inset-0 flex text-white font-medium justify-center items-center bg-black z-30'
      liClass='flex flex-col items-center gap-10 w-full main-page_px'
      itemClass='text-6xl hover:opacity-80 place-self-center'
    >
      <button
        className='absolute top-5 right-5'
        onClick={modalClose}
      >
        X
      </button>
    </NavItem>
  )
}

export default Header
