import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body, html {
  width: 100%;
  font: 13px 'Calibri', sans-serif;
}

body {
  padding: 2rem;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  border-radius: 0.5rem;
}

a {
  text-decoration: none;
  color: #92140C;
}

h1 {
  font: 1.4rem 'Montserrat', sans-serif;

}

.animaLeft {
  transform: translateX(-20px);
  opacity: 0;
  animation: animaLeft .3s forwards;
}

@keyframes animaLeft {
  to {
    transform: initial;
    opacity: initial;
  }
}

.produto {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.produto .fotos img {
  margin-bottom: 2rem;
}

.produto .preco {
  padding: 0.5rem;
  background: #92140C;
  color: #fff;
  border-radius: 5px;
  margin: 2rem 0;
  font-weight: bold;
}

.produto .desc_produto {
  line-height: 2rem;
}

.App {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  margin: 0 auto;
  min-height: calc(100vh + 10rem);
}

.content {
  flex: 1;
}
`

export default GlobalStyle