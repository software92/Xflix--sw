import { ICONS } from '../assets'

function ContentsRow() {
  return (
    <li className='bg-blue-400 h-[200px] rounded p-2 hover:scale-[1.02] group '>
      {/* cover */}
      <div
        className='h-full flex flex-col justify-end gap-2 cursor-pointer rounded p-4 bg-black/60 opacity-0 group-hover:opacity-100 duration-200'
        onClick={() => console.log('clicked')}
      >
        <h2 className='text-lg font-semibold'>영화 1</h2>
        <div className='flex gap-2'>
          <button
            className='p-2 bg-red-400 rounded-full'
            onClick={e => {
              e.stopPropagation()
              console.log('btn')
            }}
          >
            {ICONS.play}
          </button>
          <button
            className='p-2 bg-red-400 rounded-full'
            onClick={e => {
              e.stopPropagation()
              console.log('btn')
            }}
          >
            {ICONS.plus}
          </button>
        </div>
      </div>
    </li>
  )
}

export default ContentsRow
