import { styled } from "styled-components";

export const StyledNav = styled.nav`
margin-bottom: 2rem;
width: 100%;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 1rem;

    a {
      display: block;
      text-decoration: none;
      font: 1.2rem 'Lato', sans-serif;
      color: black;
      padding: .5rem 1rem;
      background: #FFF8F0;
      border-radius: 4px;

      &:hover {
        background: #FFF8F0;
      }
    }

    a.active {
      background: #92140C;
      color: #FFF8F0;
    }
  }
`