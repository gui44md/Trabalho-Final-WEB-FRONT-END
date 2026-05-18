import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'
import './ProximosJogos.css'

const jogos = [
  {
    id: 1,
    data: '11 Jun',
    hora: '21:00',
    time1: { pais: 'México',   flag: '🇲🇽' },
    time2: { pais: 'Polônia',  flag: '🇵🇱' },
    estadio: 'Azteca, Cidade do México',
    grupo: 'Grupo A',
    destaque: true,
  },
  {
    id: 2,
    data: '12 Jun',
    hora: '18:00',
    time1: { pais: 'EUA',      flag: '🇺🇸' },
    time2: { pais: 'Sérvia',   flag: '🇷🇸' },
    estadio: 'MetLife, Nova York',
    grupo: 'Grupo B',
    destaque: false,
  },
  {
    id: 3,
    data: '12 Jun',
    hora: '21:00',
    time1: { pais: 'Brasil',   flag: '🇧🇷' },
    time2: { pais: 'Alemanha', flag: '🇩🇪' },
    estadio: 'SoFi, Los Angeles',
    grupo: 'Grupo E',
    destaque: true,
  },
  {
    id: 4,
    data: '13 Jun',
    hora: '18:00',
    time1: { pais: 'Argentina',flag: '🇦🇷' },
    time2: { pais: 'Portugal', flag: '🇵🇹' },
    estadio: 'AT&T, Dallas',
    grupo: 'Grupo C',
    destaque: false,
  },
  {
    id: 5,
    data: '13 Jun',
    hora: '21:00',
    time1: { pais: 'França',   flag: '🇫🇷' },
    time2: { pais: 'Espanha',  flag: '🇪🇸' },
    estadio: "Levi's, São Francisco",
    grupo: 'Grupo D',
    destaque: true,
  },
]

function CardJogo({ data, hora, time1, time2, estadio, grupo, destaque }) {
  return (
    <div className={`card-jogo ws-card${destaque ? ' card-jogo--destaque' : ''}`}>
      <div className="card-jogo__meta">
        <span className="badge-green" style={{ fontSize: '10px' }}>{grupo}</span>
        <div className="d-flex align-items-center gap-3">
          <span className="card-jogo__meta-item">
            <Calendar size={12} /> {data}
          </span>
          <span className="card-jogo__meta-item">
            <Clock size={12} /> {hora}
          </span>
        </div>
      </div>

      <div className="card-jogo__matchup">
        <div className="card-jogo__time">
          <span className="card-jogo__flag">{time1.flag}</span>
          <span className="card-jogo__name">{time1.pais}</span>
        </div>

        <div className="card-jogo__vs">
          <span>VS</span>
        </div>

        <div className="card-jogo__time card-jogo__time--right">
          <span className="card-jogo__name">{time2.pais}</span>
          <span className="card-jogo__flag">{time2.flag}</span>
        </div>
      </div>

      <div className="card-jogo__footer">
        <span className="card-jogo__estadio">
          <MapPin size={11} /> {estadio}
        </span>
        <button className="card-jogo__btn">
          Detalhes <ChevronRight size={12} />
        </button>
      </div>
    </div>
  )
}

export default function ProximosJogos() {
  return (
    <section className="section-py" id="jogos" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col">
            <span className="badge-green mb-3">Agenda</span>
            <h2 className="section-title">Próximos <span className="text-gold">Jogos</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">Confira os confrontos mais aguardados do torneio</p>
          </div>
          <div className="col-auto d-none d-md-block">
            <button className="btn-ws-outline" style={{ fontSize: '0.8rem', padding: '8px 20px' }}>
              Calendário completo
            </button>
          </div>
        </div>

        <div className="row g-3">
          {jogos.map((j) => (
            <div key={j.id} className="col-12 col-md-6 col-xl-4">
              <CardJogo {...j} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
