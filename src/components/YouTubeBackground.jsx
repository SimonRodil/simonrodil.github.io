import { useEffect, useRef } from 'react'

const videoIds = {
  lotr: 'kWhmb6l4XTY',
  harry: 'IaBz8bBaC0M',
  starwars: 'DR-3Yhx18Y4',
}

/* global YT */

let apiLoaded = false
const pendingCallbacks = []

if (typeof window !== 'undefined') {
  window.onYouTubeIframeAPIReady = () => {
    apiLoaded = true
    pendingCallbacks.splice(0).forEach((fn) => fn())
  }
}

function loadAPI() {
  return new Promise((resolve) => {
    if (apiLoaded || (typeof YT !== 'undefined' && YT.loaded)) {
      resolve()
      return
    }
    if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      pendingCallbacks.push(resolve)
      return
    }
    pendingCallbacks.push(resolve)
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    document.head.appendChild(script)
  })
}

export function YouTubeBackground({ activeUniverse }) {
  const videoId = activeUniverse ? videoIds[activeUniverse] : null
  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!videoId) return

    let player = null
    let destroyed = false

    loadAPI().then(() => {
      if (destroyed || !containerRef.current) return

      player = new YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          cc_load_policy: 0,
        },
        events: {
          onReady: (e) => {
            e.target.mute()
            e.target.playVideo()
          },
        },
      })
      playerRef.current = player
    })

    return () => {
      destroyed = true
      if (player) {
        player.destroy()
        playerRef.current = null
      }
    }
  }, [videoId])

  if (!videoId) return null

  return (
    <>
      <div
        ref={wrapperRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '177.77vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div ref={containerRef} className="h-full w-full" />
        </div>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.9) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ zIndex: 3, height: '80px', background: 'rgba(10,10,10,1)' }}
      />
    </>
  )
}
