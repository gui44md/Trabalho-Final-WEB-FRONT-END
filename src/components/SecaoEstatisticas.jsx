import { Globe, Users, MapPin, Ticket, Tv, Trophy } from 'lucide-react'
import CardEstatistica from './CardEstatistica'

const stats = [
  { icone: <Users size={22} />,  valor: '48',   label: 'Seleções',    descricao: 'Pela primeira vez na história da Copa',  cor: 'green' },
  { icone: <Globe  size={22} />, valor: '104',  label: 'Partidas',    descricao: '104 jogos em formato expandido',          cor: 'gold'  },
  { icone: <MapPin size={22} />, valor: '16',   label: 'Estádios',    descricao: 'Distribuídos pelos 3 países sede',        cor: 'white' },
  { icone: <Ticket size={22} />, valor: '5.3M', label: 'Ingressos',   descricao: 'Estimativa total de espectadores',        cor: 'blue'  },
  { icone: <Tv     size={22} />, valor: '5B+',  label: 'Telespect.',  descricao: 'Audiência global estimada no mundo',      cor: 'green' },
  { icone: <Trophy size={22} />, valor: '$10B', label: 'Prêmios',     descricao: 'Maior premiação da história da FIFA',     cor: 'gold'  },
]

export default function SecaoEstatisticas() {
  return (
    <section className="section-py" id="estatisticas">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge-gold mb-3">Os Números</span>
          <h2 className="section-title">
            Estatísticas do <span className="text-green">Torneio</span>
          </h2>
          <div className="section-divider mx-auto" style={{ margin: '12px auto 0' }} />
          <p className="section-subtitle mt-2">
            A Copa do Mundo 2026 é o maior torneio de futebol da história
          </p>
        </div>

        <div className="row g-3">
          {stats.map((s) => (
            <div key={s.label} className="col-6 col-md-4 col-xl-2">
              <CardEstatistica {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
