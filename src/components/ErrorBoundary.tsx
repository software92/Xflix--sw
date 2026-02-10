import { Link, useRouteError } from 'react-router'

function ErrorBoundary() {
  const error = useRouteError()
  console.log('error', error)
  return (
    <section className='w-screen h-screen flex justify-center items-center bg-black'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl text-white'>잘못된 경로입니다.</h1>
        {/* <Link
        to='/'
        className='text-lg font-bold'
      >
        뒤로 가기
      </Link> */}
        <Link
          to='/'
          className='text-2xl font-bold text-white underline'
        >
          홈으로
        </Link>
      </div>
    </section>
  )
}

export default ErrorBoundary
