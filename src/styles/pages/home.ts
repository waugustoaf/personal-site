import styled, { keyframes } from 'styled-components';
import Carousel from 'react-elastic-carousel';

const chevronAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.2rem);
  }
`;
const chevronAnimationRight = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(0.5rem);
  }`;

export const Entrance = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  width: 100%;
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/home-bg.png') no-repeat fixed center;
  background-size: 100% 100vh;

  .arrow-end {
    width: 100%;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    svg {
      color: #fff;
      animation: ${chevronAnimation} 1.5s linear infinite;
    }
  }

  @media (max-width: 600px) {
    background-color: #1e1e1e;
    background-image: none;
  }
`;

export const Presentation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img {
    margin: 0;
    border-radius: 50%;
    border: 2px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
  }

  h1 {
    margin-top: 2rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  h2 {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  .social-medias {
    margin-top: 0.5rem;

    a + a {
      margin-left: 1.2rem;
    }
    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;

export const About = styled.section`
  width: 100%;
  padding: 6rem;
  background-color: #ececec;

  h2 {
    font-weight: bold;
  }

  p {
    margin-top: 2rem;
    text-align: justify;
  }

  button {
    margin-top: 3rem;
    background-color: #000;
    padding: 1rem 2rem;
    border-radius: 30px;
    border: none;
    outline: none;

    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem;
  }
`;

export const Skills = styled.section`
  width: 100%;
  padding: 6rem;
  background-color: #e1e1e1;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: bold;
    }

    .push {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        text-transform: uppercase;
      }

      svg {
        animation: ${chevronAnimationRight} 1s linear infinite;
        font-size: 1.5rem;
      }

    }
    @media screen and (max-width: 425px) {
      flex-direction: column;
    }
  }
`;

export const SkillsCarousel = styled(Carousel)`
  margin-top: 3rem;
`;

