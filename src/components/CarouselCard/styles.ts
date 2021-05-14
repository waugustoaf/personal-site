import styled from 'styled-components';

export const Container = styled.div`
  max-width: 20rem;
  margin: 0.5rem;
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  svg {
    font-size: 2rem;

    & + svg {
      margin-left: 0.5rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }


  .text {
    min-height: 10rem;
    display: flex;
    align-items: center;

    p {
      font-size: 0.8rem;
      text-align: center;
    }
  }

  span {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`;