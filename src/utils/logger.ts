type LogLevel = 'error' | 'log'

interface IDevLogProps {
  type?: LogLevel
  message: string
}

function devLog({ message, type = 'log' }: IDevLogProps) {
  if (import.meta.env.PROD) {
    return
  }

  switch (type) {
    case 'error':
      console.error(message)
      break
    case 'log':
      console.log(message)
      break
  }
}

export { devLog }
