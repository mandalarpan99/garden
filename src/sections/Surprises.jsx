import { useState } from 'react'
import { content } from '../content'
import Flower from './Flower'

export default function Surprises() {
  const { surprises } = content
  const [opened, setOpened] = useState(null)

  return <section id={surprises.id} className="section surprises" aria-labelledby="surprise-title">
    <h2 id="surprise-title">{surprises.title}</h2>
    <p className="section-intro">{surprises.intro}</p>
    <div className="surprise-grid">
      {surprises.cards.map(card => {
        const isOpen = opened === card.id
        return <article key={card.id} className="surprise-card">
          <Flower kind={card.flower}/>
          <h3>{card.title}</h3>
          <button type="button" data-sound="paper" aria-expanded={isOpen} aria-controls={'note-' + card.id}
            onClick={() => setOpened(isOpen ? null : card.id)}>
            {isOpen ? surprises.close : surprises.open}
          </button>
          <p id={'note-' + card.id} className="surprise-note" hidden={!isOpen}>{card.note}</p>
        </article>
      })}
    </div>
  </section>
}
