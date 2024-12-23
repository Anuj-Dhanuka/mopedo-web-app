import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useImage1 from "../../../../assets/images/user1.png";

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <TestimonialsContainer>
      <ContentWrapper>
        <SectionTitle>
          What Our <Highlight>Users Say</Highlight>
        </SectionTitle>
        <StyledSlider {...settings}>
          <TestimonialCard>
            <Header>
              <SectionImage src={useImage1} alt="User" />
              <UserDetails>
                <UserName>Alex Johnson</UserName>
                <UserRole>Frequent Commuter</UserRole>
              </UserDetails>
            </Header>
            <TestimonialText>
              &quot;Mopido has transformed my daily commute. The rides are
              affordable, and the service is top-notch!&quot;
            </TestimonialText>
            <Footer>
              <Rating>★★★★★</Rating>
            </Footer>
          </TestimonialCard>

          <TestimonialCard>
            <Header>
              <SectionImage src={useImage1} alt="User" />
              <UserDetails>
                <UserName>Maria Lopez</UserName>
                <UserRole>First-Time User</UserRole>
              </UserDetails>
            </Header>
            <TestimonialText>
              &quot;I love how easy it is to book a ride with Mopido. The app
              is super user-friendly!&quot;
            </TestimonialText>
            <Footer>
              <Rating>★★★★☆</Rating>
            </Footer>
          </TestimonialCard>

          <TestimonialCard>
            <Header>
              <SectionImage src={useImage1} alt="User" />
              <UserDetails>
                <UserName>John Smith</UserName>
                <UserRole>Business Traveler</UserRole>
              </UserDetails>
            </Header>
            <TestimonialText>
              &quot;Reliable and efficient service. I highly recommend Mopido
              to everyone.&quot;
            </TestimonialText>
            <Footer>
              <Rating>★★★★★</Rating>
            </Footer>
          </TestimonialCard>
        </StyledSlider>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: hidden;
    border-radius: 10px;
  }

  .slick-slide > div {
    margin: 0 10px;
    border-radius: 10px;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    color: #000;
    width: 40px;
    height: 40px;

     @media (max-width: 768px) {
      display: none !important; /* Hide navigation buttons on small devices */
    }
  }

  .slick-prev {
    left: -30px;

    @media (max-width: 480px) {
      left: -20px;
    }
  }

  .slick-next {
    right: -30px;

    @media (max-width: 480px) {
      right: -20px;
    }
  }

  .slick-dots {
    bottom: -24px;

    @media (max-width: 768px) {
      bottom: -40px;
    
    }

    li button:before {
      font-size: 12px;

      @media (max-width: 480px) {
        font-size: 8px;
      }
    }
  }
`;

const TestimonialsContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9c935;
  text-align: center;
  display: flex;
  justify-content: center;
  padding-bottom: 80px; 

  @media (max-width: 768px) {
    padding: 60px 15px;
    padding-bottom: 80px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
    padding-bottom: 60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const Highlight = styled.span`
  color: #000;
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 90%; /* Prevent overflowing */
    margin: 0 auto; /* Center cards on small screens */
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const SectionImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #ddd;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const UserRole = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.4rem;
  color: #555;
  font-style: italic;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  text-align: right;

  @media (max-width: 480px) {
    text-align: center; /* Center the rating on smaller screens */
  }
`;

const Rating = styled.div`
  font-size: 1.6rem;
  color: #f39c12;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export { TestimonialsSection };
