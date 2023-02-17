import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid ${p => p.theme.colors.accent};
  box-shadow: 0px 7px 12px 0px ${p => p.theme.colors.accent};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  &:not(.active):hover,
  &:not(.active):focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
