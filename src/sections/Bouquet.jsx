import { useState } from 'react'
import { content } from '../content'
import Flower from './Flower'

export default function Bouquet() {
  const { bouquet } = content
  const [selected, setSelected] = useState(null)
  return <section id="bouquet" className="section bouquet" aria-labelledby="bouquet-title">
    <h2 id="bouquet-title">{bouquet.title}</h2>
    <p className="section-intro">{bouquet.intro}</p>
    <div className="flower-picker">
      {bouquet.flowers.map(flower => <button type="button" data-sound="bloom" key={flower.id}
        aria-pressed={selected?.id === flower.id} onClick={() => setSelected(flower)}>
        <Flower kind={flower.id}/><span>{flower.name}</span>
      </button>)}
    </div>
    <div className="flower-note" aria-live="polite">{selected?.note}</div>
  </section>
}
