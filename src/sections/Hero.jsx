import { content } from '../content'

export default function Hero() {
  const { hero } = content
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">A Memory Capsule</p>
      <h1 id="hero-title" tabIndex="-1">{hero.title[0]}<br/><em>{hero.title[1]}</em></h1>
      <p>{hero.intro}</p>
      <a href="#memories" className="button">Explore the memories</a>
    </div>
    <div className="hero-art"><img src={hero.image} alt="Blush roses and white wildflowers arranged against a dark background" /></div>
  </section>
}
