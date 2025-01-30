import { ICONS } from '../assets'

function ContentsRow() {
  return (
    <li>
      <p>영화 1</p>
      <div>
        <button>{ICONS.play}</button>
        <button>{ICONS.plus}</button>
      </div>
    </li>
  )
}

export default ContentsRow
