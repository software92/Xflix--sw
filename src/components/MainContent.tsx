import { ICONS } from '../assets'

function MainContent() {
  return (
    <section>
      <p>메인 영화</p>
      <p>메인 설명글</p>
      <div>
        <button>{ICONS.play} 재생</button>
        <button>{ICONS.info} 상세 정보</button>
      </div>
    </section>
  )
}

export default MainContent
