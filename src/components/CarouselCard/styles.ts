import styled, { css } from 'styled-components';

interface ContainerProps {
  isTooLong?: boolean;
  isMain: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 20rem;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  min-height: 5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  ${props => !props.isMain && css`
    opacity: 0.6;
  `}

  svg {
    flex: 1;

    & + svg {
      margin-left: 0.5rem;
    }
  }

  h2 {
    flex: 4;
    font-size: 1.2rem;
    font-weight: bold;
  }

  span {
    margin-left: 0.7rem;
    font-size: ${props => props.isTooLong ? '0.5rem' : '0.8rem'};
    font-weight: 500;
    text-align: right;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;