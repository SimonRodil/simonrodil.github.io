import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useTypingEffect(words, typingSpeed = 80, pauseMs = 1800) {
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(words[0] ?? '')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced || words.length === 0) {
      setDisplay(words[0] ?? '')
      return
    }

    const current = words[wordIndex]
    let timeout

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setCharIndex((value) => value + 1)
          setDisplay(current.slice(0, charIndex + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else if (charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((value) => value - 1)
        setDisplay(current.slice(0, charIndex - 1))
      }, typingSpeed / 2)
    } else {
      setDeleting(false)
      setWordIndex((value) => (value + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [words, wordIndex, charIndex, deleting, typingSpeed, pauseMs, reduced])

  return display
}
