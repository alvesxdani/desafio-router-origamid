import { StyledCardProduct } from './style'

// eslint-disable-next-line react/prop-types
function CardProduct({photo, title}) {
  return (
    <StyledCardProduct>
      <img src={photo} alt={title} />
      <h2>{title}</h2>
    </StyledCardProduct>
  )
}

export default CardProduct