import { content } from '../content'

export default function Letter() {
  const { letter } = content
  return <section id="letter" className="section letter" aria-labelledby="letter-title">
    <div className="letter-paper">
      <h2 id="letter-title">{letter.title}</h2>
      <details>
        <summary data-sound="paper">Unfold the letter</summary>
        <div className="letter-body">
          <p>{letter.salutation}</p>
          {letter.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <p>{letter.signoff}<br/><em className="signature">{letter.signature}</em></p>
        </div>
      </details>
    </div>
  </section>
}
