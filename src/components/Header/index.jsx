import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <Logo>Mopedo</Logo>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </Nav>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: transparent;
  color: #000;
`;

const Logo = styled.div`
  font-size: 2rem;
  letter-spacing: 0.4rem;
  font-weight: bold;
`;

const Nav = styled.nav``;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: #000;
  text-decoration: none;
  font-size: 1.6rem;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #000; /* Tomato color */
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default Header;
