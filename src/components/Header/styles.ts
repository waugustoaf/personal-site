import styled, { css } from 'styled-components';

interface ContainerProps {
  invisible?: boolean;
}

interface NextLinkProps {
  isCurrent?: boolean;
}

interface SandwichProps {
  isActive?: boolean;
  invisible?: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  padding: 3rem 6rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${props => (props.invisible ? 'transparent' : '#060606')};

  a {
    text-decoration: none;

    h2 {
      font-weight: 400;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 2rem 3rem;
  }
  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
  @media (max-width: 375px) {
    padding: 1rem;
  }
`;

export const Sandwich = styled.button<SandwichProps>`
  width: 32px;
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  display: none;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #fff;
    transition: all 0.3s ease-in 0s;
    border-radius: 2px;
    &:nth-child(2) {
      margin: 6px 0;
    }
  }

  ${props =>
    props.isActive &&
    css`
      span {
        &:nth-child(1) {
          transform: translate(0, 10px) rotate(135deg);
        }
        &:nth-child(2) {
          visibility: hidden;
          transition: all 0s ease-in 0s;
        }
        &:nth-child(3) {
          transform: translate(0, -10px) rotate(-135deg);
        }
      }
    `}

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export const SecondaryMenu = styled.div<SandwichProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.invisible ? 'transparent' : '#060606')};
`;

export const NextLink = styled.a<NextLinkProps>`
  cursor: pointer;

  padding: 0.4rem 0;
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
  border-bottom: ${props => (props.isCurrent ? '2px solid #fff' : '')};

  & + a {
    margin-left: 1rem;
  }
`;
