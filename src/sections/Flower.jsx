export default function Flower({ kind = 'rose' }) {
  const petalCount = kind === 'daisy' ? 10 : 7
  return <svg viewBox="0 0 100 120" fill="none" aria-hidden="true" className={'flower flower-' + kind}>
    <path d="M50 112Q43 83 51 46M48 94Q21 91 18 69Q39 71 48 94M48 82Q68 57 82 65Q74 85 48 88" stroke="#677b58" strokeWidth="2" fill="#aaba94"/>
    {kind === 'bud' ? <path d="M50 59C24 56 22 25 26 15L40 25L50 11L60 24L75 15C78 35 70 57 50 59Z" fill="#ad566d" stroke="#71344a" strokeWidth="1.5"/> :
      <g transform="translate(50 39)">
        {Array.from({length: petalCount}, (_, index) =>
          <ellipse key={index} rx={kind === 'daisy' ? 7 : 13} ry="15" cy="-16" transform={'rotate(' + index * 360 / petalCount + ')'} fill={kind === 'daisy' ? '#fff5df' : '#db92a1'} stroke={kind === 'daisy' ? '#cdb58e' : '#a45168'} />)}
        <circle r={kind === 'daisy' ? 9 : 12} fill={kind === 'daisy' ? '#c79542' : '#a45168'}/>
        <circle r="4" fill="#e9b68d"/>
      </g>}
  </svg>
}
