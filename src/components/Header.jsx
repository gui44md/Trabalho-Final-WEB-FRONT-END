import { useState } from 'react'
import { Globe, LogIn, Menu, X, Trophy } from 'lucide-react'
import './Header.css'

const navLinks = [
  { label: 'Seleções', href: '#selecoes' },
  { label: 'Estatísticas', href: '#estatisticas' },
  { label: 'Próximos Jogos', href: '#jogos' },
  { label: 'Notícias', href: '#noticias' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="ws-header">
      <div className="ws-header__bar">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2">
            <div className="d-flex align-items-center gap-2" style={{ fontSize: '12px', color: 'var(--color-muted2)' }}>
              <span className="live-dot"></span>
              <span>Cobertura ao vivo · Copa do Mundo 2026</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-muted2)' }}>
              🇺🇸 USA &nbsp;·&nbsp; 🇲🇽 México &nbsp;·&nbsp; 🇨🇦 Canadá
            </div>
          </div>
        </div>
      </div>

      <nav className="ws-header__nav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* LOGO */}
            <a href="#" className="ws-header__logo">
              <div className="ws-header__logo-icon">
                <Trophy size={20} color="#000" strokeWidth={2.5} />
              </div>
              <div className="ws-header__logo-text">
                <span className="ws-header__logo-name">WorldStats</span>
                <span className="ws-header__logo-year">26</span>
              </div>
            </a>

            {/* NAV DESKTOP */}
            <div className="ws-header__links d-none d-lg-flex">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} className="ws-header__link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="d-flex align-items-center gap-3">
              <div className="d-none d-lg-flex align-items-center gap-2" style={{ color: 'var(--color-muted2)', fontSize: '13px' }}>
                <Globe size={14} />
                <span>PT-BR</span>
              </div>
              <button className="btn-ws-gold d-none d-lg-flex">
                <LogIn size={14} />
                Entrar
              </button>
              <button
                className="ws-header__burger d-lg-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="ws-header__mobile-menu d-lg-none">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="ws-header__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-ws-gold w-100 justify-content-center mt-2">
                <LogIn size={14} />
                Entrar na plataforma
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
