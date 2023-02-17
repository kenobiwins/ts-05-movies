import { Outlet } from 'react-router-dom';
import { Nav, NavItem, Header } from './SharedLayout.styled';
import { Container } from 'BaseStyles/Container.styled';
import { Suspense } from 'react';
// import { Box } from 'BaseStyles/Box';

const NavItems = [
  {
    name: 'Home',
    path: '/',
  },
  { name: 'Movies', path: 'movies' },
];

export const Sharedlayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            {NavItems.map(({ name, path }) => {
              return (
                <NavItem key={name} to={path}>
                  {name}
                </NavItem>
              );
            })}
          </Nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
