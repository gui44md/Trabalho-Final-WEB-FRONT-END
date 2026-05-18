import { Clock, ChevronRight, TrendingUp } from 'lucide-react'
import './SecaoNoticias.css'

const noticias = [
  {
    id: 1,
    emoji: '🏆',
    categoria: 'Torneio',
    titulo: 'FIFA confirma os 48 grupos e a chave completa para a Copa 2026',
    resumo: 'A federação internacional revelou o sorteio final com todos os confrontos da fase de grupos, gerando grandes expectativas entre os torcedores.',
    tempo: '2h atrás',
    destaque: true,
    leituras: '24k',
  },
  {
    id: 2,
    emoji: '⚽',
    categoria: 'Artilharia',
    titulo: 'Vini Jr. lidera ranking de artilheiros nas eliminatórias sul-americanas',
    resumo: 'O atacante do Real Madrid entrou na Copa como principal esperança do Brasil, com 12 gols nas classificatórias.',
    tempo: '4h atrás',
    destaque: false,
    leituras: '18k',
  },
  {
    id: 3,
    emoji: '🏟️',
    categoria: 'Infraestrutura',
    titulo: 'MetLife Stadium será o palco da grande final no dia 19 de julho',
    resumo: 'O estádio de Nova York receberá o jogo mais importante do planeta, com capacidade para mais de 82 mil espectadores.',
    tempo: '6h atrás',
    destaque: false,
    leituras: '15k',
  },
  {
    id: 4,
    emoji: '🌎',
    categoria: 'Seleções',
    titulo: 'América do Norte vibra com a proximidade da maior Copa da história',
    resumo: 'Ingressos esgotados em horas e euforia nas ruas de Las Vegas, Toronto e Guadalajara marcam a expectativa do torneio.',
    tempo: '8h atrás',
    destaque: false,
    leituras: '12k',
  },
  {
    id: 5,
    emoji: '📊',
    categoria: 'Análise',
    titulo: 'Dados revelam que a Copa 2026 pode superar todos os recordes de audiência global',
    resumo: 'Pesquisa da Nielsen aponta que o evento pode atingir 6 bilhões de espectadores em todo o mundo.',
    tempo: '10h atrás',
    destaque: false,
    leituras: '9k',
  },
]

function CardNoticia({ emoji, categoria, titulo, resumo, tempo, destaque, leituras }) {
  return (
    <div className={`card-noticia ws-card${destaque ? ' card-noticia--destaque' : ''}`}>
      <div className="card-noticia__emoji">{emoji}</div>
      <div className="card-noticia__body">
        <div className="card-noticia__top">
          <span className="badge-green" style={{ fontSize: '10px' }}>{categoria}</span>
          {destaque && <span className="badge-gold" style={{ fontSize: '10px' }}>Em Alta</span>}
        </div>
        <h3 className="card-noticia__titulo">{titulo}</h3>
        <p className="card-noticia__resumo">{resumo}</p>
        <div className="card-noticia__footer">
          <span className="card-noticia__meta">
            <Clock size={11} /> {tempo}
          </span>
          <span className="card-noticia__meta">
            <TrendingUp size={11} /> {leituras} leituras
          </span>
          <button className="card-noticia__btn">
            Ler <ChevronRight size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function SecaoNoticias() {
  return (
    <section className="section-py" id="noticias">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col">
            <span className="badge-gold mb-3">Última Hora</span>
            <h2 className="section-title">Notícias da <span className="text-green">Copa</span></h2>
            <div className="section-divider" />
            <p className="section-subtitle">Fique por dentro de tudo que acontece no maior evento do mundo</p>
          </div>
          <div className="col-auto d-none d-md-block">
            <button className="btn-ws-outline" style={{ fontSize: '0.8rem', padding: '8px 20px' }}>
              Ver todas
            </button>
          </div>
        </div>

        <div className="row g-3">
          {/* destaque principal */}
          <div className="col-12 col-lg-5">
            <CardNoticia {...noticias[0]} />
          </div>
          {/* demais */}
          <div className="col-12 col-lg-7">
            <div className="row g-3">
              {noticias.slice(1).map((n) => (
                <div key={n.id} className="col-12 col-sm-6">
                  <CardNoticia {...n} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
