import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SecoesSelecoes from './components/SecoesSelecoes'
import SecaoEstatisticas from './components/SecaoEstatisticas'
import ProximosJogos from './components/ProximosJogos'
import SecaoNoticias from './components/SecaoNoticias'
import SecaoDestaque from './components/SecaoDestaque'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SecoesSelecoes />
        <SecaoEstatisticas />
        <ProximosJogos />
        <SecaoNoticias />
        <SecaoDestaque />
      </main>
      <Footer />
    </>
  )
}
