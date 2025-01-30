import { ICONS } from './assets'

function App() {
  return (
    <>
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

      <section>
        <p>메인 영화</p>
        <p>메인 설명글</p>
        <div>
          <button>{ICONS.play} 재생</button>
          <button>{ICONS.info} 상세 정보</button>
        </div>
      </section>

      <section>
        <div>
          <h2>인기 컨텐츠</h2>
          <ul>
            <li>
              <p>영화 1</p>
              <div>
                <button>{ICONS.play}</button>
                <button>{ICONS.plus}</button>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2>지금 뜨는 컨텐츠</h2>
          <ul>
            <li>
              <p>영화 2</p>
              <div>
                <button>{ICONS.play}</button>
                <button>{ICONS.plus}</button>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2>다시보기 추천</h2>
          <ul>
            <li>
              <p>영화 3</p>
              <div>
                <button>{ICONS.play}</button>
                <button>{ICONS.plus}</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
