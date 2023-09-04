import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">Cocktail App 🍹</NavLink>
      <NavList>
        <NavListElement>
          <NavLink to="/favorites">❤️My Favorite Cocktails</NavLink>
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
  padding: 0.5rem;
  position: fixed; 
  z-index: 1;
  width: 100%;
  top: 0;
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

const NavLink = styled(Link)`
text-decoration: none; 
color: #fff;
margin: 0 12px 0 0; 
`
