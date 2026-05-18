import { Zap, Bell, BarChart2, Globe, ShieldCheck, Smartphone } from 'lucide-react'
import './SecaoDestaque.css'

const diferenciais = [
  {
    icon: <Zap size={22} />,
    titulo: 'Tempo Real',
    desc: 'Estatísticas e placares atualizados ao vivo durante todos os jogos da Copa.',
    cor: 'green',
  },
  {
    icon: <BarChart2 size={22} />,
    titulo: 'Análise Avançada',
    desc: 'Métricas detalhadas: posse de bola, chutes a gol, mapas de calor e muito mais.',
    cor: 'gold',
  },
  {
    icon: <Bell size={22} />,
    titulo: 'Alertas Instant.',
    desc: 'Notificações imediatas para gols, cartões e resultados das suas seleções favoritas.',
    cor: 'green',
  },
  {
    icon: <Globe size={22} />,
    titulo: 'Cobertura Global',
    desc: 'Todos os 104 jogos, 48 seleções e 16 estádios em um único lugar.',
    cor: 'gold',
  },
  {
    icon: <ShieldCheck size={22} />,
    titulo: 'Dados Oficiais',
    desc: 'Parceria com a FIFA para dados 100% verificados e confiáveis.',
    cor: 'green',
  },
  {
    icon: <Smartphone size={22} />,
    titulo: 'Multi-dispositivo',
    desc: 'Acesse em qualquer tela. Interface otimizada para mobile, tablet e desktop.',
    cor: 'gold',
  },
]

export default function SecaoDestaque() {
  return (
    <section className="secao-destaque section-py" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT TEXT */}
          <div className="col-lg-4">
            <span className="badge-green mb-3">Por que escolher</span>
            <h2 className="section-title">
              A plataforma <span className="text-gold">premium</span><br />
              do futebol mundial
            </h2>
            <div className="section-divider" />
            <p className="section-subtitle mb-4">
              WorldStats 26 foi desenvolvido para fãs, jornalistas e analistas que exigem
              os melhores dados sobre a Copa do Mundo.
            </p>
            <button className="btn-ws-primary">
              Criar conta gratuita
            </button>
            <div className="destaque-users mt-4">
              <div className="destaque-avatars">
                {['🇧🇷','🇦🇷','🇫🇷','🇩🇪','🇺🇸'].map((f, i) => (
                  <div key={i} className="destaque-avatar" style={{ zIndex: 5 - i }}>{f}</div>
                ))}
              </div>
              <div className="destaque-users-text">
                <strong style={{ color: 'var(--color-white)' }}>+2.4 milhões</strong>
                <span style={{ color: 'var(--color-muted2)', fontSize: '0.8rem' }}> de usuários globais</span>
              </div>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="col-lg-8">
            <div className="row g-3">
              {diferenciais.map((d) => (
                <div key={d.titulo} className="col-12 col-sm-6">
                  <div className="diferencial-card ws-card">
                    <div
                      className="diferencial-icon"
                      style={{
                        color: d.cor === 'green' ? 'var(--color-green)' : 'var(--color-gold)',
                        background: d.cor === 'green' ? 'rgba(0,208,104,0.1)' : 'rgba(240,180,41,0.1)',
                      }}
                    >
                      {d.icon}
                    </div>
                    <div>
                      <h4 className="diferencial-titulo">{d.titulo}</h4>
                      <p className="diferencial-desc">{d.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
