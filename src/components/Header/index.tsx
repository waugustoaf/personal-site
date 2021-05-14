import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { routesConfig } from '../../utils/routesConfig';
import { Container, NextLink, Sandwich, SecondaryMenu } from './styles';

interface HeaderProps {
  invisible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ invisible }) => {
  const [isActive, setIsActive] = useState(false);
  const handleSandwichState = () => {
    setIsActive(previousValue => !previousValue);
  };

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Container invisible={invisible}>
        <Link href="/">
          <a>
            <h2>waugustoaf</h2>
          </a>
        </Link>

        {/* Secondary Menu */}
        <Sandwich isActive={isActive} onClick={handleSandwichState}>
          <span></span>
          <span></span>
          <span></span>
        </Sandwich>

        <nav>
          {routesConfig.map(item => (
            <Link key={item.id.toString()} href={item.path}>
              <NextLink isCurrent={item.path === currentPath}>
                {item.title}
              </NextLink>
            </Link>
          ))}
        </nav>
      </Container>
      {isActive && (
        <SecondaryMenu invisible={invisible} isActive={isActive}>
          <nav>
            {routesConfig.map(item => (
              <Link key={item.id.toString()} href={item.path}>
                <NextLink isCurrent={item.path === currentPath}>
                  {item.title}
                </NextLink>
              </Link>
            ))}
          </nav>
        </SecondaryMenu>
      )}
    </>
  );
};
