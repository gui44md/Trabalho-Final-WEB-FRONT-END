import './CardEstatistica.css'

export default function CardEstatistica({ icone, valor, label, descricao, cor }) {
  const corMap = {
    green: 'var(--color-green)',
    gold:  'var(--color-gold)',
    white: 'var(--color-white)',
    blue:  '#60a5fa',
  }
  const corHex = corMap[cor] || corMap.green

  return (
    <div className="card-estat ws-card">
      <div className="card-estat__icon" style={{ color: corHex, background: `${corHex}18` }}>
        {icone}
      </div>
      <div className="card-estat__valor" style={{ color: corHex }}>{valor}</div>
      <div className="card-estat__label">{label}</div>
      {descricao && <div className="card-estat__desc">{descricao}</div>}
      <div className="card-estat__bar" style={{ background: `${corHex}22` }}>
        <div className="card-estat__bar-fill" style={{ background: corHex }} />
      </div>
    </div>
  )
}
