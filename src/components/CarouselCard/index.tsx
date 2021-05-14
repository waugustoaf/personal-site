import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface Skill {
  id: number;
  icon: IconType;
  tech: string;
  text: string;
  time: string;
}

interface CardProps {
  skill: Skill
}

export const CarouselCard: React.FC<CardProps> = ({skill}) => {
  const Icon = skill.icon;

  return (
    <Container>
      <Icon />
      <h2>{skill.tech}</h2>
      <div className="text">
        <p>{skill.text}</p>
      </div>
      {!!skill.time && <span>{skill.time}</span>}
    </Container>
  );
};
