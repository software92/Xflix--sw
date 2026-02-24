import { useEffect, useState } from 'react'
import { devLog } from '../../utils'

interface IImageLazyLoadUI {
  lowUrl?: string
  highUrl?: string
  style?: string
  name?: string
}

function ImageLazyLoadUI({ lowUrl, highUrl, style, name }: IImageLazyLoadUI) {
  const [isHighImgLoad, setIsHighImgLoad] = useState(false)

  useEffect(() => {
    setIsHighImgLoad(false)
  }, [highUrl])

  function handleImgLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (e.currentTarget.complete) {
      setIsHighImgLoad(true)
    }
  }

  if (!lowUrl && !highUrl) {
    devLog({ message: 'backdrop 이미지가 없습니다' })
    return null
  }

  return (
    <>
      <img
        className={style}
        src={lowUrl}
        alt={name}
      />
      <img
        key={highUrl}
        className={
          style +
          `transition-opacity duration-700 ease-in-out ${isHighImgLoad ? 'opacity-100' : 'opacity-0'}`
        }
        src={highUrl}
        alt={name}
        onLoad={handleImgLoad}
        ref={el => {
          if (el?.complete && !isHighImgLoad) {
            setIsHighImgLoad(true)
          }
        }}
      />
    </>
  )
}

export default ImageLazyLoadUI
