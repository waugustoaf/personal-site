import React from 'react';
import { Skill } from '../../dtos/Skills';
import { Container } from './styles';

interface CardProps {
  skill: Skill;
}

export const CarouselCard: React.FC<CardProps> = ({ skill }) => {
  const { isMain, isTooLong, tech, time } = skill;
  return (
    <Container isMain={isMain} isTooLong={isTooLong}>
      <h2>{tech}</h2>
      {!!time && <span>{time}</span>}
    </Container>
  );
};
