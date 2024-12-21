import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <BlocksContainer>
          <Block>
            <Logo>Mopedo</Logo>
            <Address>
              <p>4th Floor, Workflo Bizness Square</p>
              <p>Hitech City, Madhapur</p>
              <p>Hyderabad - 500081</p>
            </Address>
            <EmailHeading>
              email:{" "}
              <span>
                <Email href="mailto:example@example.com">
                  dhanush@mopedo.com
                </Email>
              </span>
            </EmailHeading>
          </Block>

          <Block>
            <SocialLinksHeading>Links</SocialLinksHeading>
            <NavContainer>
              <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/services">Services</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
              </Nav>
              <Nav>
                <StyledLink to="/">Privacy policy</StyledLink>
                <StyledLink to="/about">Terms & conditions</StyledLink>
              </Nav>
            </NavContainer>
          </Block>

          <Block>
            <SocialLinksHeading>Social Links</SocialLinksHeading>
            <SocialmediaIconsContainer>
              <SocialMediaALink
                href="https://www.facebook.com/biketaxiservices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} title="Facebook" />
              </SocialMediaALink>
              <SocialMediaALink
                href="https://www.instagram.com/mopedo_bike/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} title="Instagram" />
              </SocialMediaALink>
              <SocialMediaALink
                href="https://x.com/mopedodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} title="Twitter" />
              </SocialMediaALink>
              <SocialMediaALink
                href="https://www.youtube.com/watch?v=CsmAMne5Gq0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={30} title="Youtube" />
              </SocialMediaALink>
            </SocialmediaIconsContainer>
            <SocialMediaDescription>
              Follow us to get more details and up to date
            </SocialMediaDescription>
          </Block>
        </BlocksContainer>
        <RightReserved>
          &copy; {new Date().getFullYear()} Mopedo. All rights reserved.
        </RightReserved>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const FooterInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
`;

const BlocksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Block = styled.div`
  width: 30%;
  height: 100%;
  color: #fff;
`;

const Logo = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.2rem;
  margin-bottom: 8px;
`;

const Address = styled.address`
  font-style: normal;
  font-size: 1.4rem;
`;

const EmailHeading = styled.p`
  margin-top: 4px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Email = styled.a`
  text-decoration: none;
  display: inline;
  color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

const SocialLinksHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  text-decoration: underline;
`;

const SocialMediaDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 16px;
`;

const SocialmediaIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const SocialMediaALink = styled.a`
  text-decoration: none;

  svg {
    color: #fff;
    transition: color 0.3s ease-in-out;
  }

  &:hover svg {
    color: #ffcc0f;
    cursor: pointer;
  }
`;



const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  position: relative;
  padding-bottom: 5px;
  display: inline;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const RightReserved = styled.p`
  margin-top: 36px;
  font-size: 1.4rem;
`;

export default Footer;
