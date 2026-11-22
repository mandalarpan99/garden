import { content } from '../content'
import Flower from './Flower'

export default function Memories() {
  const { memories } = content
  return <section id="memories" className="section memories" aria-labelledby="memories-title">
    <h2 id="memories-title">{memories.title}</h2>
    <p className="section-intro">{memories.intro}</p>
    <div className="memory-grid">
      {memories.entries.map(memory => <article key={memory.id} className="memory">
        <div className={'memory-art memory-' + memory.flower}>
          {memory.image ? <img src={memory.image} alt={memory.alt} loading="lazy"/> : <Flower kind={memory.flower}/>}
        </div>
        <div className="memory-copy"><p className="eyebrow">{memory.label}</p><h3>{memory.title}</h3><p>{memory.text}</p></div>
      </article>)}
    </div>
  </section>
}
