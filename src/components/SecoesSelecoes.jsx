import CardSelecao from './CardSelecao'
import './SecoesSelecoes.css'

const selecoes = [
  { pais: 'Brasil',    flag: '🇧🇷', ranking: 1,  pontos: 1848, estrelas: 5, grupo: 'Grupo E', trend: 'up',   destaque: true  },
  { pais: 'França',    flag: '🇫🇷', ranking: 2,  pontos: 1832, estrelas: 5, grupo: 'Grupo D', trend: 'down', destaque: false },
  { pais: 'Argentina', flag: '🇦🇷', ranking: 3,  pontos: 1790, estrelas: 5, grupo: 'Grupo C', trend: 'same', destaque: false },
  { pais: 'Espanha',   flag: '🇪🇸', ranking: 4,  pontos: 1745, estrelas: 4, grupo: 'Grupo A', trend: 'up',   destaque: false },
  { pais: 'Inglaterra',flag: '🇬🇧', ranking: 5,  pontos: 1710, estrelas: 4, grupo: 'Grupo B', trend: 'up',   destaque: false },
  { pais: 'Alemanha',  flag: '🇩🇪', ranking: 6,  pontos: 1698, estrelas: 4, grupo: 'Grupo F', trend: 'down', destaque: false },
  { pais: 'Portugal',  flag: '🇵🇹', ranking: 7,  pontos: 1650, estrelas: 3, grupo: 'Grupo G', trend: 'up',   destaque: false },
  { pais: 'Holanda',   flag: '🇳🇱', ranking: 8,  pontos: 1630, estrelas: 3, grupo: 'Grupo H', trend: 'same', destaque: false },
]

export default function SecoesSelecoes() {
  return (
    <section className="section-py" id="selecoes" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col">
            <span className="badge-green mb-3">Ranking FIFA</span>
            <h2 className="section-title">Seleções em <span className="text-gold">Destaque</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">As principais seleções da Copa do Mundo 2026 por ranking</p>
          </div>
          <div className="col-auto d-none d-md-block">
            <button className="btn-ws-outline" style={{ fontSize: '0.8rem', padding: '8px 20px' }}>
              Ver todas as 48 seleções
            </button>
          </div>
        </div>

        <div className="row g-3">
          {selecoes.map((s) => (
            <div key={s.pais} className="col-6 col-md-4 col-lg-3">
              <CardSelecao {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
