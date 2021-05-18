import Image from 'next/image';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { CarouselCard } from '../components/CarouselCard';
import { Header } from '../components/Header';
import {
  About,
  Entrance,
  Presentation,
  Skills,
  SkillsGrid,
} from '../styles/pages/home';
import { skillsProvider } from '../utils/skillsProvider';

const Home: React.FC = () => {
  return (
    <>
      <Entrance>
        <Header invisible />
        <Presentation>
          <div className="img">
            <Image
              src="/profile_photo.png"
              width={800}
              height={800}
              alt="Augusto Fernandes"
            ></Image>
          </div>

          <hgroup>
            <h1>Prazer, Augusto Fernandes aqui!</h1>
            <h2>Desenvolvedor front-end e mobile</h2>
          </hgroup>

          <div className="social-medias">
            <a href="mailto:waugustoaf@gmail.com" target="_blank">
              <HiOutlineMail />
            </a>
            <a href="https://linkedin.com/in/waugustoaf" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/waugustoaf" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5531971297803"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/waltherfernandes" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </Presentation>
        <div className="arrow-end">
          <FiChevronDown />
        </div>
      </Entrance>
      <About>
        <h2>Que bom te ver!</h2>
        <p>
          Eu me chamo Walther Fernandes, mas pode me chamar de Augusto. Eu
          desenvolvo sites e aplicativos em React e React Native,
          respectivamente, em nível de senioridade Júnior sempre com boas
          práticas. Tenho 17 anos, emancipado, nascido e crescido em Barão de
          Cocais, Minas Gerais, Brazil, ingressei no curso integrado técnico
          Desenvolvimento de Sistemas em 2019 no CEFET-MG Campus Timóteo. Estou
          sempre aberto e em busca de novos conhecimentos e problemas complexos,
          o que me faz ser apaixonado por programar. No mais é isso, caso
          precise de ajuda ou alguma informação adicional, não exite em me
          chamar em alguma das fontes de contato espalhadas por todo o site.
        </p>
        <button>Visualizar currículo</button>
      </About>
      <Skills>
        <div className="header">
          <h2>Habilidades</h2>
        </div>

        <SkillsGrid>
          {skillsProvider.map(skill => (
            <CarouselCard skill={skill} key={skill.id.toString()} />
          ))}
        </SkillsGrid>
      </Skills>
    </>
  );
};

export default Home;
