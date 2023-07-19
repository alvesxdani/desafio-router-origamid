import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body, html {
  width: 100%;
  height: 100%;
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
`

export default GlobalStyle