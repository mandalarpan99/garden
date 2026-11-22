import { useState } from 'react'
import { content } from '../content'

export default function Lock({ onUnlock }) {
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  function submit(event) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    if (fields.get('username').trim().toLowerCase() === content.access.username.trim().toLowerCase()
      && fields.get('password') === content.access.password) {
      onUnlock()
    } else {
      setError('That key didn’t fit. Check your username and password and try again.')
    }
  }

  return <main className="gate">
    <div className="gate-art" style={{ backgroundImage: `url("${content.hero.image}")` }} aria-hidden="true" />
    <div className="gate-panel">
      <p className="eyebrow">A Memory Capsule</p>
      <h1>{content.access.title[0]}<br/><em>{content.access.title[1]}</em></h1>
      <p className="gate-intro">{content.access.intro}</p>
      <form className="gate-form" onSubmit={submit} onChange={() => setError('')}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" autoComplete="username" autoCapitalize="none" spellCheck="false" required />
        <label htmlFor="password">Password</label>
        <div className="password-field">
          <input id="password" name="password" type={visible ? 'text' : 'password'} autoComplete="current-password" required />
          <button type="button" onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
        </div>
        {error && <p className="error" role="alert">{error}</p>}
        <button className="button" type="submit">Open the garden</button>
        {/* {content.access.hint && <p className="hint">{content.access.hint}</p>} */}
      </form>
    </div>
  </main>
}
