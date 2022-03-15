import { NavLink } from 'react-router-dom';
import { nav } from '../../../constants/nav';
import Palette from '../../../lib/Palette';
import styled from 'styled-components';

const StyledNavLinks = styled.ul`
  display: flex;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    transition: all 0.2s linear;
    justify-content: flex-start;
  }
`;

const StyledNavLink = styled.li`
  margin: 0 10px;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  a {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${Palette.gray[1]};
    }
  }
  @media screen and (max-width: 1120px) {
    margin: 0;
    a {
      display: block;
      width: 100%;
      padding: 1.5rem 0rem 1.5rem 2rem;
      &:hover {
        color: inherit;
        background-color: ${({ hover }) => hover};
      }
    }
  }
`;

function NavLinks({ open }) {
  const activeStyle = {
    color: Palette.gray[6],
  };
  return (
    <StyledNavLinks className={open ? 'show' : ''}>
      {nav.map((menu) => (
        <StyledNavLink key={menu.id} hover="#9DACCA">
          <NavLink
            to={menu.to}
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {menu.label}
          </NavLink>
        </StyledNavLink>
      ))}
    </StyledNavLinks>
  );
}

export default NavLinks;
