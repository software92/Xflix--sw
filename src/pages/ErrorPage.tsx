import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

interface IErrorPageProps {
  message?: string
}

// [x] TODO: error 컴포넌트를 페이지 컴포넌트로 변경
// [x] TODO: props로 message로 전달 받아 처리
function ErrorPage({
  message = '알 수 없는 에러가 발생했습니다.',
}: IErrorPageProps) {
  const error = useRouteError()

  let errorMessage: string = message

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = '알 수 없는 페이지입니다. 주소를 확인 해주세요'
    } else {
      errorMessage = error.statusText || message
    }
  } else if (error instanceof Error) {
    // non Route error
    errorMessage = error.message
  }
  return (
    <main className='min-h-screen bg-black'>
      <section className='w-screen min-h-screen flex justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center px-8 py-10'>
          <p className='text-5xl text-white text-center leading-snug'>
            {errorMessage}
          </p>
          <Link
            to='/'
            className='text-2xl font-bold text-white bg-red-600 px-4 py-3 rounded-md'
            replace
          >
            홈으로
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ErrorPage
