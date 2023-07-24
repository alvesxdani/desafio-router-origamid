import { Link } from 'react-router-dom';
import { StyledCardProduct } from './style';

// eslint-disable-next-line react/prop-types
function CardProduct({ photo, title, preco, id }) {
  return (
    <StyledCardProduct>
      <Link to={`/produto/${id}`}>
        <img src={photo} alt={title} />
        <h2>{title}</h2>
        <p>R$ {preco}</p>
      </Link>
    </StyledCardProduct>
  );
}

export default CardProduct;
