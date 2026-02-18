import { useEffect, useState } from 'react'
import { MEDIA_QUERY } from '../constants/breakpoints'

export function useScrollBlock(
  isLocked: boolean,
  mediaQueryString: keyof typeof MEDIA_QUERY = 'md',
) {
  const [isMediaMatch, setIsMediaMatch] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(MEDIA_QUERY[mediaQueryString])

    function checkMediaMatch() {
      setIsMediaMatch(media.matches)
    }

    checkMediaMatch()

    media.addEventListener('change', checkMediaMatch)
    return () => media.removeEventListener('change', checkMediaMatch)
  }, [])

  useEffect(() => {
    if (isMediaMatch && isLocked) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMediaMatch, isLocked])
}
