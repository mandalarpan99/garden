import { useRef, useState } from 'react'
import { content } from '../content'

export default function GardenMusic() {
  const { music } = content
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)

  async function toggleMusic() {
    const player = audio.current
    setFailed(false)
    if (!player.paused) {
      player.pause()
      return
    }
    try {
      player.volume = 0.55
      await player.play()
    } catch (error) {
      if (error.name !== 'AbortError') setFailed(true)
    }
  }

  return <div className="garden-music">
    <audio ref={audio} src={music.source} loop preload="none"
      onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onError={() => { setFailed(true); setPlaying(false) }}/>
    <button type="button" className="music-toggle" data-sound="none" onClick={toggleMusic}>
      <span aria-hidden="true">♫</span> {playing ? music.pause : music.play}
    </button>
    {failed && <p role="status">{music.error}</p>}
  </div>
}
