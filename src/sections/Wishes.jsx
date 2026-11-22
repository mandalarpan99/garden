import { useState } from 'react'
import { content } from '../content'
import Flower from './Flower'

export default function Wishes() {
  const { wishes } = content
  const [selected, setSelected] = useState(null)

  return <section id="wishes" className="section wishes" aria-labelledby="wishes-title">
    <h2 id="wishes-title">{wishes.title}</h2>
    <p className="section-intro">{wishes.intro}</p>
    <div className="wish-grid">
      {wishes.ideas.map(idea => <article className="wish-card" key={idea.id}>
        <Flower kind={idea.flower}/>
        <h3>{idea.title}</h3>
        <p>{idea.text}</p>
        <button type="button" className="button" data-sound="bloom"
          aria-pressed={selected?.id === idea.id} onClick={() => setSelected(idea)}>{wishes.choose}</button>
      </article>)}
    </div>
    <p className="wish-result" role="status">{selected && <>{wishes.picked} · {selected.title}</>}</p>
    {selected && <button type="button" className="wish-clear" onClick={() => setSelected(null)}>{wishes.clear}</button>}
  </section>
}
