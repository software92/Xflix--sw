import ContentsList from '../components/ContentsList'
import MainContent from '../components/MainContent'

function Home() {
  return (
    <>
      <section>
        <MainContent />
      </section>
      <section>
        <ContentsList title='인기 콘텐츠' />
        <ContentsList title='지금 뜨는 콘텐츠' />
        <ContentsList title='다시보기 추천' />
      </section>
    </>
  )
}

export default Home
