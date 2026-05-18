import { Trophy, Twitter, Instagram, Youtube, Facebook, Github, Mail } from 'lucide-react'
import './Footer.css'

const links = {
  plataforma: ['Seleções', 'Estatísticas', 'Próximos Jogos', 'Artilharia', 'Rankings'],
  torneio:    ['Grupos', 'Fase Eliminatória', 'Semifinais', 'Final', 'Premiação'],
  empresa:    ['Sobre Nós', 'Contato', 'API', 'Imprensa', 'Carreiras'],
}

const sociais = [
  { icon: <Twitter  size={18} />, label: 'Twitter',   href: '#' },
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
  { icon: <Youtube  size={18} />, label: 'YouTube',   href: '#' },
  { icon: <Facebook size={18} />, label: 'Facebook',  href: '#' },
  { icon: <Github   size={18} />, label: 'GitHub',    href: '#' },
]

export default function Footer() {
  return (
    <footer className="ws-footer">
      <div className="ws-footer__main">
        <div className="container">
          <div className="row g-5">
            {/* BRAND */}
            <div className="col-12 col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div className="ws-footer__logo-icon">
                  <Trophy size={18} color="#000" strokeWidth={2.5} />
                </div>
                <div className="d-flex align-items-baseline gap-1">
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-white)' }}>WorldStats</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-gold)' }}>26</span>
                </div>
              </div>

              <p className="ws-footer__about">
                A plataforma premium de estatísticas e cobertura da Copa do Mundo FIFA 2026™.
                Dados em tempo real, análises avançadas e tudo sobre o maior evento esportivo do planeta.
              </p>

              <div className="ws-footer__socials">
                {sociais.map((s) => (
                  <a key={s.label} href={s.href} className="ws-footer__social" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="ws-footer__contact">
                <Mail size={13} />
                <span>contato@worldstats26.com</span>
              </div>
            </div>

            {/* LINKS */}
            {Object.entries(links).map(([cat, items]) => (
              <div key={cat} className="col-6 col-md-4 col-lg-2">
                <h6 className="ws-footer__col-title">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h6>
                <ul className="ws-footer__list">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="ws-footer__link">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* NEWSLETTER */}
            <div className="col-12 col-md-4 col-lg-2">
              <h6 className="ws-footer__col-title">Newsletter</h6>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-muted2)', marginBottom: '12px' }}>
                Receba as melhores análises da Copa diretamente no seu e-mail.
              </p>
              <div className="ws-footer__newsletter">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="ws-footer__input"
                />
                <button className="btn-ws-primary" style={{ padding: '9px 16px', fontSize: '0.8rem' }}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="ws-footer__bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <p className="ws-footer__copy">
              © 2026 WorldStats 26 · Projeto acadêmico. Não afiliado à FIFA.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              {['Termos de Uso', 'Privacidade', 'Cookies'].map((l) => (
                <a key={l} href="#" className="ws-footer__bottom-link">{l}</a>
              ))}
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="live-dot" style={{ width: '6px', height: '6px' }} />
              <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                Todos os sistemas operacionais
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
