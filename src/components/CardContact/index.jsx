import { StyledCardContact } from './style';

// eslint-disable-next-line react/prop-types
function CardContact({ title, photo, email, tel, address }) {
  return (
    <StyledCardContact className='animaLeft'>
      <div className="photo_contact">
        <img src={photo} />
      </div>

      <div className="info_contact">
        <h1>{title}</h1>

        <ul>
          <li>E-mail: {email}</li>
          <li>Cel.: {tel}</li>
          <li>{address}</li>
        </ul>
      </div>
    </StyledCardContact>
  );
}

export default CardContact;
