import React from "react";
import { styled } from "styled-components";

const Navigation = () => {
  return (
    <NavContainer>
      <NavAppTitle href="/">Cocktail App</NavAppTitle>
      <NavList>
        <NavListElement>
          <NavListAnchor href="/favorites">My Favorite Cocktails</NavListAnchor>
        </NavListElement>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  background-color: #8390fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
`;

const NavAppTitle = styled.a`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover,
  &:active {
    color: #093824;
  }
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavListElement = styled.li`
  color: #ffff;
`;
const NavListAnchor = styled.a`
  color: #ffff;
  text-decoration: none;

  &:hover,
  &:active {
    color: #093824;
  }
`;
