# ⚽ WorldStats 26

> Plataforma esportiva premium de estatísticas e cobertura da Copa do Mundo FIFA 2026™

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap)
![Lucide](https://img.shields.io/badge/Lucide_React-0.383-black?style=flat)

---

##  Dupla

| Nome | RA |
|------|----|
| Guilherme Medina Silva | 0900074515 |
| Michel José Freitas Farah | 0900008415 |

---

##  Descrição do Projeto

O **WorldStats 26** é uma aplicação front-end moderna inspirada em plataformas esportivas como SofaScore, OneFootball e FIFA.com. A proposta é funcionar como uma vitrine digital que reúne, em uma única interface, tudo sobre a Copa do Mundo 2026:

- 🏆 Seleções participantes com ranking FIFA e estrelas
- 📊 Estatísticas do torneio (jogos, sedes, público estimado)
- 📅 Próximos jogos com horários, estádios e confrontos
- 📰 Notícias fictícias da Copa
- ✨ Diferenciais da plataforma

A interface possui tema escuro, paleta verde/dourado/branco e tipografia esportiva, transmitindo a atmosfera de um grande evento mundial.

---

##  Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| [React](https://react.dev/) | 18 | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | 5 | Build tool e servidor de desenvolvimento |
| [Bootstrap](https://getbootstrap.com/) | 5.3 | Grid responsivo e utilitários de layout |
| [Lucide React](https://lucide.dev/) | 0.383 | Biblioteca de ícones |
| CSS Variables | — | Design System próprio (cores, sombras, tipografia) |
| Google Fonts | — | Tipografia Barlow Condensed + Barlow |

---

##  Estrutura de Componentes

```
src/
├── main.jsx                  # Entrada da aplicação
├── App.jsx                   # Componente raiz
├── index.css                 # Design System (variáveis CSS globais)
└── components/
    ├── Header.jsx             # Navbar fixa com logo, menu e botão login
    ├── HeroSection.jsx        # Banner principal com troféu animado
    ├── CardSelecao.jsx        # Card de seleção (recebe dados via props)
    ├── SecoesSelecoes.jsx     # Grade com 8 seleções em destaque
    ├── CardEstatistica.jsx    # Card de métrica (recebe dados via props)
    ├── SecaoEstatisticas.jsx  # 6 números do torneio
    ├── ProximosJogos.jsx      # Cards de confrontos com horários
    ├── SecaoNoticias.jsx      # Notícias fictícias da Copa
    ├── SecaoDestaque.jsx      # Diferenciais da plataforma
    └── Footer.jsx             # Rodapé com links e redes sociais
```

---

##  Instruções de Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (já incluído com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/worldstats26.git

# 2. Acesse a pasta do projeto
cd worldstats26

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: **http://localhost:5173**

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

---

##  Decisões de Design

- **Tema escuro** — padrão das grandes plataformas esportivas, foco no conteúdo
- **Paleta verde + dourado** — verde remete ao campo de futebol; dourado ao troféu
- **Barlow Condensed** — tipografia esportiva, compacta e impactante
- **CSS Variables** — Design System centralizado para consistência visual total
- **Hover suaves** — feedback visual discreto sem poluir a interface

---

##  Disciplina

Desenvolvimento Front-End com React — Atividade de componentização e Design System
