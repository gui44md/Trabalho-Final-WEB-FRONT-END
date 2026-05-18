import { Play, BarChart2, ChevronRight } from 'lucide-react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section noise-overlay">
      {/* background layers */}
      <div className="hero-bg-stadium" />
      <div className="hero-bg-gradient" />
      <div className="hero-bg-grid" />

      <div className="container position-relative">
        <div className="row align-items-center" style={{ minHeight: '88vh' }}>
          {/* LEFT CONTENT */}
          <div className="col-lg-6 hero-content">
            <div className="fade-up">
              <span className="badge-green mb-3">⚽ Copa do Mundo FIFA 2026™</span>
            </div>

            <h1 className="hero-title fade-up-1">
              O maior<br />
              evento do <span className="shimmer-text">futebol</span><br />
              em suas mãos
            </h1>

            <p className="hero-subtitle fade-up-2">
              Estatísticas em tempo real, seleções, rankings, artilharia e
              tudo sobre a Copa do Mundo 2026. Uma plataforma premium para
              o maior espetáculo do esporte mundial.
            </p>

            <div className="d-flex flex-wrap gap-3 fade-up-3">
              <button className="btn-ws-primary">
                <BarChart2 size={16} />
                Explorar Estatísticas
              </button>
              <button className="btn-ws-outline">
                <Play size={16} />
                Próximos Jogos
              </button>
            </div>

            {/* MINI STATS */}
            <div className="hero-mini-stats fade-up-4">
              {[
                { value: '48', label: 'Seleções' },
                { value: '104', label: 'Jogos' },
                { value: '16', label: 'Sedes' },
                { value: '5.3M', label: 'Ingressos' },
              ].map((s) => (
                <div key={s.label} className="hero-mini-stat">
                  <span className="hero-mini-stat__value">{s.value}</span>
                  <span className="hero-mini-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: TROPHY CARD */}
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0 fade-up-2">
            <div className="hero-trophy-card">
              {/* Glow rings */}
              <div className="trophy-glow-ring ring-1" />
              <div className="trophy-glow-ring ring-2" />

              <div className="trophy-inner">
                <div className="trophy-emoji">🏆</div>
                <div className="trophy-name">Taça FIFA</div>
                <div className="trophy-edition">Copa do Mundo 2026™</div>

                <div className="trophy-hosts">
                  <div className="host-flag">🇺🇸</div>
                  <div className="trophy-host-plus">+</div>
                  <div className="host-flag">🇲🇽</div>
                  <div className="trophy-host-plus">+</div>
                  <div className="host-flag">🇨🇦</div>
                </div>
                <div className="trophy-host-label">11 Jun – 19 Jul · 2026</div>

                <div className="trophy-divider" />

                <div className="d-flex gap-2 justify-content-center">
                  <a href="#selecoes" className="trophy-cta">
                    Ver Seleções <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
