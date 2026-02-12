function LoadingScreen() {
  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50'>
      <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-white mb-8'></div>
      <p className='text-xl font-bold'>Loading...</p>
    </div>
  )
}

export default LoadingScreen
