import { useRef, useState } from 'react'
import { content } from '../content'
import Flower from './Flower'

function Photo({ photo }) {
  return <div className={'album-photo memory-' + photo.flower}>
    {photo.image ? <img src={photo.image} alt={photo.alt} loading="lazy"/> : <Flower kind={photo.flower}/>}
  </div>
}

export default function Album() {
  const { album } = content
  const [index, setIndex] = useState(0)
  const dialog = useRef(null)
  const trigger = useRef(null)
  const current = album.photos[index]

  function open(event, next) {
    trigger.current = event.currentTarget
    setIndex(next)
    dialog.current.showModal()
  }

  function step(direction) {
    setIndex(previous => (previous + direction + album.photos.length) % album.photos.length)
  }

  return <section id={album.id} className="section album" aria-labelledby="album-title">
    <div className="album-heading">
      <div><h2 id="album-title">{album.title}</h2><p className="section-intro">{album.intro}</p></div>
      <img src={album.artwork} alt="" loading="lazy"/>
    </div>
    <div className="album-grid">
      {album.photos.map((photo, position) => <button type="button" className="album-card"
        key={photo.id} onClick={event => open(event, position)} aria-haspopup="dialog">
        <Photo photo={photo}/><span>{photo.title}</span>
      </button>)}
    </div>
    {current && <dialog className="album-dialog" ref={dialog} aria-labelledby="photo-title"
      onClose={() => trigger.current?.focus()}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') step(-1)
        if (event.key === 'ArrowRight') step(1)
      }}>
      <div className="album-dialog-top">
        <button type="button" autoFocus onClick={() => dialog.current.close()}>{album.close}</button>
      </div>
      <div className="album-current" aria-live="polite">
        <Photo key={current.id} photo={current}/>
        <h3 id="photo-title">{current.title}</h3>
        <p>{current.caption}</p>
      </div>
      <div className="album-dialog-nav">
        <button type="button" onClick={() => step(-1)} disabled={album.photos.length < 2}>{album.previous}</button>
        <button type="button" onClick={() => step(1)} disabled={album.photos.length < 2}>{album.next}</button>
      </div>
    </dialog>}
  </section>
}
