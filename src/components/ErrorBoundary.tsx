import { Link, useRouteError } from 'react-router'

function ErrorBoundary() {
  const error = useRouteError()
  console.log('error', error)
  return (
    <>
      <div>잘못된 경로입니다.</div>
      <Link
        to='/'
        className='text-lg font-bold'
      >
        홈으로
      </Link>
    </>
  )
}

export default ErrorBoundary
