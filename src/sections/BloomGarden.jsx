import { useState } from 'react'
import { content } from '../content'
import Flower from './Flower'

export default function BloomGarden() {
  const { bloom } = content
  const [grown, setGrown] = useState([])
  const finished = grown.length === bloom.flowers.length

  return <section id="bloom" className="section bloom-garden" aria-labelledby="bloom-title">
    <div className="bloom-landscape">
      <img src={bloom.artwork} alt="" loading="lazy"/>
      <span className="garden-sparkle sparkle-one" aria-hidden="true">✦</span>
      <span className="garden-sparkle sparkle-two" aria-hidden="true">✧</span>
      <span className="garden-butterfly" aria-hidden="true">🦋</span>
    </div>
    <h2 id="bloom-title">{bloom.title}</h2>
    <p className="section-intro">{bloom.intro}</p>
    <div className="bloom-bed">
      {bloom.flowers.map(flower => {
        const planted = grown.includes(flower.id)
        return <button key={flower.id} type="button" data-sound="bloom"
          className={planted ? 'planted' : ''}
          aria-pressed={planted} aria-disabled={planted}
          onClick={() => setGrown(previous => previous.includes(flower.id) ? previous : [...previous, flower.id])}>
          {planted ? <Flower kind={flower.id}/> : <span className="garden-seed" aria-hidden="true"/>}
          <span>{planted ? flower.name : bloom.plant + ' ' + flower.name.toLowerCase()}</span>
        </button>
      })}
    </div>
    <p className="bloom-reward" role="status">{finished ? bloom.reward : ''}</p>
    {finished && <button type="button" className="button" onClick={() => setGrown([])}>{bloom.reset}</button>}
  </section>
}
