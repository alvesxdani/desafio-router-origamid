import { styled } from 'styled-components';

export const StyledCardContact = styled.section`
  width: 50%;
  margin: 0 auto;
  background: #f7f7f7;
  padding: 2rem 3rem;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  .photo_contact {
    border-radius: 5px;
    margin: 1.5rem;

    img {
      transition: 0.8s;
      transform: scale(100%);
      &:hover {
        transform: scale(110%);
      }

      @media (max-width: 950px) {
       display: none;
      }
    }
  }

  .info_contact {
    h1 {
      font: 2rem 'Montserrat', sans-serif;
      text-align: center;
      margin-bottom: 1rem;
      color: #92140c;
    }

    ul {
      li {
        list-style: none;
        margin: 0.5rem;
        background: #eee;
        padding: 1rem;
        transition: 0.8s;
        &:hover {
          padding-left: 2rem;
        }
      }
    }
  }
`;
