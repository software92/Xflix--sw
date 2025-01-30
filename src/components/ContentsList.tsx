import ContentsRow from './ContentsRow'

interface IContentList {
  title: string
}

function ContentsList({ title }: IContentList) {
  return (
    <div>
      <h2>{title}</h2>
      {/* contents list */}
      <ul>
        {/* contents row */}
        <ContentsRow />
      </ul>
    </div>
  )
}

export default ContentsList
