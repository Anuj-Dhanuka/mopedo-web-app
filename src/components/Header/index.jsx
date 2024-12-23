import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <LogoLink to={"/"} onClick={scrollToTop}>
          <Logo>Mopedo</Logo>
        </LogoLink>

        <MenuButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Nav $menuOpen={menuOpen}>
          <StyledLink
            to="/"
            $isActive={location.pathname === "/"}
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
          >
            Home
          </StyledLink>
          <StyledLink
            to="/about"
            $isActive={location.pathname === "/about"}
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}          >
            About
          </StyledLink>
          <StyledLink
            to="/services"
            $isActive={location.pathname === "/services"}
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}          >
            Services
          </StyledLink>
          <StyledLink
            to="/contact"
            $isActive={location.pathname === "/contact"}
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}          >
            Contact
          </StyledLink>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.4rem;
  font-weight: bold;
  color: #000;
`;

const MenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;

  span {
    height: 3px;
    width: 100%;
    background: #000;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 10vh;
    right: ${({ $menuOpen }) => ($menuOpen ? "0" : "-100%")};
    background: #fff;
    width: 200px;
    height: 100vh;
    padding: 20px;
    transition: right 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  color: ${({ $isActive }) => ($isActive ? "#f9c935" : "#000")};
  text-decoration: none;
  font-size: 1.6rem;
  position: relative;
  padding-bottom: 5px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
    height: 2px;
    background-color: #f9c935;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export default Header;
