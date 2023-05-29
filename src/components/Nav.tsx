import React from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavContainer>
      <UlContainer>
        <LiContainer>
          <LinkTo to="/">
            <NavSPan>About</NavSPan>
          </LinkTo>
        </LiContainer>
        <LiContainer>
          <LinkTo to="project">
            <NavSPan> Project</NavSPan>
          </LinkTo>
        </LiContainer>
        <LiContainer>
          <LinkTo to="contact">
            <NavSPan>Contact</NavSPan>
          </LinkTo>
        </LiContainer>
      </UlContainer>
    </NavContainer>
  );
};

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
const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.font};
`;

export default Nav;
