import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
  };
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
              Email:{" "}
              <span>
                <Email href="mailto:dhanush@mopedo.com">dhanush@mopedo.com</Email>
              </span>
            </EmailHeading>
          </Block>

          <Block>
            <SocialLinksHeading>Links</SocialLinksHeading>
            <LinksGrid>
              <Column>
                <StyledLink to="/" onClick={scrollToTop}>Home</StyledLink>
                <StyledLink to="/about" onClick={scrollToTop}>About</StyledLink>
                <StyledLink to="/services" onClick={scrollToTop}>Services</StyledLink>
                <StyledLink to="/contact" onClick={scrollToTop}>Contact</StyledLink>
              </Column>
              <Column>
                <StyledLink to="/" onClick={scrollToTop}>Privacy Policy</StyledLink>
                <StyledLink to="/" onClick={scrollToTop}>Terms & Conditions</StyledLink>
              </Column>
            </LinksGrid>
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
              Follow us for updates and more details.
            </SocialMediaDescription>
          </Block>
        </BlocksContainer>
        <RightReserved>
          &copy; {new Date().getFullYear()} created by Anuj Dhanuka for his portfolio website. All rights reserved.
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
  padding: 60px 20px;
  box-sizing: border-box;
`;

const FooterInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlocksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Block = styled.div`
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
  color: #fff;
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Always 2 columns */
  gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr)); /* Force 2 columns, even on small devices */
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SocialLinksHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  text-decoration: underline;
`;

const SocialmediaIconsContainer = styled.div`
  display: flex;
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
  display: inline-flex;
  max-width: max-content; 
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding-bottom: 5px;
  position: relative;
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

const SocialMediaDescription = styled.p`
  font-size: 1.6rem;
  margin-top: 16px;
`;

const RightReserved = styled.p`
  margin-top: 36px;
  font-size: 1.4rem;
  text-align: left;
  color: #fff;
`;

export default Footer;
