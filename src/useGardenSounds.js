import { useEffect, useRef, useState } from 'react'

const tones = {
  tap: [587.33],
  paper: [440, 659.25],
  bloom: [523.25, 659.25, 783.99],
}

export function useGardenSounds(initiallyEnabled) {
  const [enabled, setEnabled] = useState(initiallyEnabled)
  const context = useRef(null)

  useEffect(() => () => {
    context.current?.close().catch(() => {})
  }, [])

  async function play(kind = 'tap') {
    if (!enabled) return
    const Audio = window.AudioContext || window.webkitAudioContext
    if (!Audio) return

    try {
      context.current ??= new Audio()
      const audio = context.current
      if (audio.state === 'suspended') await audio.resume()
      const now = audio.currentTime
      tones[kind].forEach((pitch, index) => {
        const start = now + .055 * index
        const oscillator = audio.createOscillator()
        const volume = audio.createGain()
        oscillator.type = 'sine'
        oscillator.frequency.value = pitch
        volume.gain.setValueAtTime(.001, start)
        volume.gain.exponentialRampToValueAtTime(.09, start + .015)
        volume.gain.exponentialRampToValueAtTime(.001, start + .2)
        oscillator.connect(volume).connect(audio.destination)
        oscillator.start(start)
        oscillator.stop(start + .21)
      })
    } catch {
      // Leave interactions usable on devices with restricted audio playback.
    }
  }

  function handleClick(event) {
    const control = event.target.closest('button, summary, a')
    if (control && !control.disabled && control.getAttribute('aria-disabled') !== 'true' && control.dataset.sound !== 'none') {
      play(control.dataset.sound)
    }
  }

  return { enabled, toggle: () => setEnabled(value => !value), play, handleClick }
}
