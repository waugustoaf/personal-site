import { CgBrowser } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdComputer } from 'react-icons/md';
import { SiJavascript, SiNodeDotJs, SiTypescript } from 'react-icons/si';

const calcYears = (pastYear: number): string => {
  const years = new Date().getFullYear() - pastYear;
  return years < 1 ? '6 meses' : years < 2 ? '1 ano' : `${years} anos`;
};

interface Skill {
  id: number;
  icon: IconType;
  tech: string;
  text: string;
  time: string;
}

export const skillsProvider = [
  {
    id: 1,
    icon: SiJavascript,
    tech: 'JavaScript',
    text: 'JavaScript é uma linguagem de alto nível com tipagem fraca e multiparadigma que pode ser encontrada tanto no back-end, quando no front-end e mobile.',
    time: calcYears(2018),
  },
  {
    id: 2,
    icon: FaReact,
    tech: 'React.JS',
    text: 'Mantido pelo Facebook e utilizado por empresas como Netflix, Airbnb e Walmart, o ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas WEB',
    time: calcYears(2019),
  },
  {
    id: 3,
    icon: FaReact,
    tech: 'React Native',
    text: 'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa.',
    time: calcYears(2020),
  },
  {
    id: 4,
    icon: SiTypescript,
    tech: 'TypeScript',
    text: 'Sendo um superset do JavaScript, o TypeScript disponibiliza tipagem forte para o JavaScript, aumentando a produtividade pessoal e principalmente em conjunto',
    time: calcYears(2020),
  },
  {
    id: 5,
    icon: FaReact,
    tech: 'Git',
    text: 'É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.',
    time: calcYears(2021),
  },
  {
    id: 6,
    icon: CgBrowser,
    tech: 'HTML, CSS, SASS',
    text: 'Podemos dizer que o HTML é o esqueleto, o parte bruta de uma página WEB a qual o navegador entende. Já o CSS é o que pode o deixar bonito e muito customizável. O SCSS é um pre-processador que pode ajudar na produtividade com CSS.',
    time: calcYears(2018),
  },
  {
    id: 7,
    icon: SiNodeDotJs,
    tech: 'Node.JS',
    text: 'Node.js é um software de código aberto, multiplataforma, que executa códigos JavaScript no backend/servidor e frontend/interface, baseado no V8 interpretador de JavaScript em C++ do Google, mantido pela fundação Node.js em parceria com a Linux Foundation.',
    time: calcYears(2020),
  },
  {
    id: 8,
    icon: MdComputer,
    tech: 'Outros',
    text: 'Docker, Postgres, SOLID, TDD, DDD, API/REST/RESTful, Testes automatizados, MySQL, MongoDB, PHP, Java',
    time: '',
  },
] as Skill[];
