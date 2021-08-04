import { useState, useEffect } from 'react'

export default function useCopied() {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [copied])
  return { copied, setCopied }
}
