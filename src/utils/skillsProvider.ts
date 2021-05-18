import { Skill } from '../dtos/Skills';

const calcYears = (pastYear: number): string => {
  const years = new Date().getFullYear() - pastYear;
  return years < 1 ? '6 meses' : years < 2 ? '1 ano' : `${years} anos`;
};

export const skillsProvider = [
  {
    id: 1,
    tech: 'JavaScript',
    isMain: true,
    time: calcYears(2018),
  },
  {
    id: 2,
    tech: 'React.JS',
    isMain: true,
    time: calcYears(2019),
  },
  {
    id: 3,
    tech: 'React Native',
    isMain: true,
    time: calcYears(2020),
  },
  {
    id: 4,
    tech: 'TypeScript',
    isMain: true,
    time: calcYears(2020),
  },
  {
    id: 5,
    tech: 'Git',
    isMain: true,
    time: calcYears(2021),
  },
  {
    id: 6,
    tech: 'HTML, CSS, SASS',
    isMain: true,
    time: calcYears(2018),
  },
  {
    id: 7,
    tech: 'Node.JS',
    isMain: false,
    time: calcYears(2020),
  },
  {
    id: 7,
    tech: 'Outros',
    isMain: false,
    time: 'Docker, Postgres, SOLID, TDD, DDD, API/REST/RESTful, Testes automatizados, MySQL, MongoDB, PHP, Java',
    isTooLong: true,
  },
] as Skill[];
