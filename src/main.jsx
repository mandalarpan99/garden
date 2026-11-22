import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { content } from './content'
import Lock from './sections/Lock'
import Hero from './sections/Hero'
import Memories from './sections/Memories'
import Letter from './sections/Letter'
import Bouquet from './sections/Bouquet'
import Album from './sections/Album'
import Surprises from './sections/Surprises'
import GardenMusic from './sections/GardenMusic'
import BloomGarden from './sections/BloomGarden'
import Wishes from './sections/Wishes'
import { useGardenSounds } from './useGardenSounds'
import './styles.css'

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const { enabled, toggle, play, handleClick } = useGardenSounds(content.effects.enabledByDefault)

  useEffect(() => {
    if (unlocked) document.getElementById('hero-title')?.focus()
  }, [unlocked])

  function closeGarden() {
    history.replaceState(null, '', location.pathname + location.search)
    setUnlocked(false)
    window.scrollTo(0, 0)
  }

  if (!unlocked) return <Lock onUnlock={() => { play('bloom'); setUnlocked(true) }}/>

  return <div onClick={handleClick}>
    <header className="site-header">
      <a href="#top" className="brand">{content.brand}</a>
      <nav aria-label="Garden sections">
        <a href="#memories">Memories</a>
        <a href={'#' + content.album.id}>{content.album.nav}</a>
        <a href={'#' + content.surprises.id}>{content.surprises.nav}</a>
        <a href="#letter">Letter</a>
        <a href="#bloom">Garden</a>
      </nav>
      <div className="audio-controls">
        <GardenMusic/>
        <button type="button" className="music-toggle" data-sound="none" aria-pressed={enabled} onClick={toggle}>
          {enabled ? content.effects.on : content.effects.off}
        </button>
      </div>
    </header>
    <main id="top">
      <Hero/>
      <Memories/>
      <Album/>
      <Surprises/>
      <BloomGarden/>
      <Wishes/>
      <Letter/>
      <Bouquet/>
    </main>
    <footer className="site-footer"><span>{content.brand}</span><button type="button" onClick={closeGarden}>Lock the garden</button></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>)
