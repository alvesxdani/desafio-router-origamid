import { styled } from "styled-components";

export const StyledLoading = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #92140C;
  margin: 2rem;
  animation: loading .80s ease-in infinite;

  @keyframes loading {
    from {
      transform: scale(1%);
    }
    to {
      transform: initial;      
    }
  }
`