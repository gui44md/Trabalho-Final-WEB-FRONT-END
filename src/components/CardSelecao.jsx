import { Star, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import './CardSelecao.css'

function RankTrend({ trend }) {
  if (trend === 'up')   return <TrendingUp  size={13} color="var(--color-green)" />
  if (trend === 'down') return <TrendingDown size={13} color="#ef4444" />
  return <Minus size={13} color="var(--color-muted)" />
}

export default function CardSelecao({ pais, flag, ranking, pontos, estrelas, grupo, trend, destaque }) {
  return (
    <div className={`card-selecao ws-card${destaque ? ' card-selecao--destaque' : ''}`}>
      {destaque && <div className="card-selecao__badge">⭐ Favorita</div>}

      <div className="card-selecao__top">
        <div className="card-selecao__rank">
          <span className="card-selecao__rank-num">#{ranking}</span>
          <RankTrend trend={trend} />
        </div>
        <div className="card-selecao__flag">{flag}</div>
      </div>

      <div className="card-selecao__body">
        <h3 className="card-selecao__name">{pais}</h3>
        <div className="card-selecao__grupo">{grupo}</div>

        <div className="card-selecao__stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              fill={i < estrelas ? 'var(--color-gold)' : 'none'}
              color={i < estrelas ? 'var(--color-gold)' : 'var(--color-border)'}
            />
          ))}
        </div>
      </div>

      <div className="card-selecao__footer">
        <span className="card-selecao__pts-label">FIFA Points</span>
        <span className="card-selecao__pts-value">{pontos}</span>
      </div>
    </div>
  )
}
