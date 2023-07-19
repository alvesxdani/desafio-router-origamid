import { NavLink } from 'react-router-dom';
import { StyledNav } from './style';

function Header() {
  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink to="/" end>
            Produtos
          </NavLink>
        </li>

        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Header;
