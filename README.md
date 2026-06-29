# the news — Redesign (Case Dev Front-end & Design)

Protótipo em React de 3 telas redesenhadas do app **the news**, feito como parte do processo seletivo de Dev Front-end & Design.

🔗 **Acessar online:** [the-news-redesign.vercel.app](https://the-news-redesign.vercel.app)
📄 **Documento de decisões:** ver link enviado no formulário do case
🎨 **Figma:** ver link enviado no formulário do case

## O que tem nesse projeto

Três telas do app foram redesenhadas:

- **Edição** — o índice "Na edição de hoje" agora é clicável (leva direto até a notícia) e cada matéria tem um botão de destaque para compartilhar no WhatsApp.
- **Podcasts** — episódio do dia em destaque, episódios anteriores agrupados por período (em vez de lista infinita), e o player não depende mais do Spotify.
- **Menu "Mais"** — reorganizado em categorias com critério (Para você, Conteúdo, Social & Diversão, Conta, Entre em Contato), em vez de uma lista única sem nenhum agrupamento.

## Tecnologias usadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (builda e roda o projeto)
- [React Router](https://reactrouter.com/) (navegação entre as telas)
- CSS puro, sem framework.

## Como rodar o projeto no seu computador

Você vai precisar ter o **Node.js** instalado antes (versão 18 ou mais recente). Para checar se já tem, abra o terminal e digite:

```bash
node -v
```

Se não tiver, baixe em [nodejs.org](https://nodejs.org/) (escolha a versão "LTS").

### Passo a passo

**1. Baixe o projeto**

Se você tem o Git instalado:

```bash
git clone <link-do-repositorio>
cd the-news-redesign
```

Ou, se preferir, baixe o ZIP do repositório e extraia numa pasta.

**2. Instale as dependências**

Dentro da pasta do projeto, rode:

```bash
npm install
```

Isso baixa todas as bibliotecas que o projeto precisa (pode levar 1-2 minutos).

**3. Rode o projeto**

```bash
npm run dev
```

O terminal vai mostrar um endereço, geralmente:

```
Local: http://localhost:5173
```

Abra esse endereço no navegador e o projeto vai aparecer funcionando.
