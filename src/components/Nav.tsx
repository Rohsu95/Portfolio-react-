import React from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import { HashLink } from "react-router-hash-link";

const NavContainer = styled.nav``;
const UlContainer = styled.ul`
  display: flex;
`;
const LiContainer = styled.li`
  list-style: none;
  font-size: 2rem;
  font-weight: 900;
  padding: 0 2rem;

  &:hover {
    color: ${theme.colors.font_hover};
  }
  @media ${theme.media.laptop} {
    font-size: 2rem;
  }

  @media ${theme.media.phone} {
    font-size: 1.5rem;
  }
`;
const NavSPan = styled.span`
  &:hover {
    color: ${theme.colors.font_hover};
  }
`;
const Nav = () => {
  return (
    <NavContainer>
      <UlContainer>
        <LiContainer>
          <HashLink
            smooth
            to="/"
            style={{ textDecoration: "none", color: `${theme.colors.font}` }}
          >
            <NavSPan>About</NavSPan>
          </HashLink>
        </LiContainer>
        <LiContainer>
          <HashLink
            smooth
            to="project"
            style={{ textDecoration: "none", color: `${theme.colors.font}` }}
          >
            <NavSPan> Project</NavSPan>
          </HashLink>
        </LiContainer>
        <LiContainer>
          <HashLink
            smooth
            to="contact"
            style={{ textDecoration: "none", color: `${theme.colors.font}` }}
          >
            <NavSPan>Contact</NavSPan>
          </HashLink>
        </LiContainer>
      </UlContainer>
    </NavContainer>
  );
};
export default Nav;
