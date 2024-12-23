import styled from "styled-components";
import { ImCheckmark } from "react-icons/im";

// Assets
import foodDehliveryServiceImage from "../../../assets/images/food-dehlivery-service-mopedo.jpg";
import goodsDehliveryServices from "../../../assets/images/goods_dehlivery_service_mopedo.jpg";
import bikeTaxiServices from "../../../assets/images/bike-taxi-service-mopedo.jpg";

const ServiceDetails = () => {
  return (
    <DetailsContainer>
      <ContentWrapper>
        {/* Bike Taxi Service */}
        <ServiceRow>
          <ServiceImage>
            <img src={bikeTaxiServices} alt="Bike Taxi" />
          </ServiceImage>
          <ServiceContent>
            <h3>🏍️ Bike Taxi</h3>
            <p>
              Our <strong>Bike Taxi</strong> service is tailored for urban
              commuters who value time, convenience, and affordability. With a
              fleet of well-maintained bikes and experienced riders, we provide
              a hassle-free travel experience.
            </p>
            <p>
              <strong>Key Benefits:</strong>
            </p>
            <ul>
              <li>
                <ImCheckmark /> Quick navigation through city traffic.
              </li>
              <li>
                <ImCheckmark /> Budget-friendly travel fares.
              </li>
              <li>
                <ImCheckmark /> Safe and professional riders.
              </li>
              <li>
                <ImCheckmark /> Real-time GPS tracking.
              </li>
            </ul>
            <p>
              Embrace smarter commuting with Mopedo&apos;s bike taxi services
              and say goodbye to long waiting hours.
            </p>
          </ServiceContent>
        </ServiceRow>

        {/* Food Delivery Service */}
        <ServiceRow >
          
          <ServiceContent>
            <h3>🍔 Food Delivery</h3>
            <p>
              Mopedo&apos;s <strong>Food Delivery</strong> service is designed
              to bring your favorite meals right to your doorstep—hot, fresh,
              and on time. Partnering with popular local restaurants and food
              joints, we ensure a seamless food delivery experience.
            </p>
            <p>
              <strong>Why Choose Us:</strong>
            </p>
            <ul>
              <li>
                <ImCheckmark /> Quick delivery times.
              </li>
              <li>
                <ImCheckmark /> Wide variety of cuisines available.
              </li>
              <li>
                <ImCheckmark /> Trusted restaurant partnerships.
              </li>
              <li>
                <ImCheckmark /> Easy reordering from your history.
              </li>
            </ul>
            <p>
              Satisfy your hunger without leaving your home. Trust Mopedo to
              deliver happiness, one meal at a time!
            </p>
          </ServiceContent>
          <ServiceImage>
            <img src={foodDehliveryServiceImage} alt="Food Delivery" />
          </ServiceImage>
        </ServiceRow>

        {/* Goods Delivery Service */}
        <ServiceRow>
          <ServiceImage>
            <img src={goodsDehliveryServices} alt="Goods Delivery" />
          </ServiceImage>
          <ServiceContent>
            <h3>📦 Goods Delivery</h3>
            <p>
              With our reliable <strong>Goods Delivery</strong> service,
              transporting parcels and packages has never been easier. Whether
              it&apos;s an important document, a fragile package, or bulk goods,
              we handle your deliveries with utmost care and precision.
            </p>
            <p>
              <strong>Service Highlights:</strong>
            </p>
            <ul>
              <li>
                <ImCheckmark /> Timely and secure deliveries.
              </li>
              <li>
                <ImCheckmark /> Real-time tracking of shipments.
              </li>
              <li>
                <ImCheckmark /> Insured deliveries for high-value items.
              </li>
              <li>
                <ImCheckmark /> AI-optimized routes for efficiency.
              </li>
            </ul>
            <p>
              With Mopedo&apos;s goods delivery service, you can focus on your
              business while we take care of the logistics.
            </p>
          </ServiceContent>
        </ServiceRow>
      </ContentWrapper>
    </DetailsContainer>
  );
};

// Styled Components
const DetailsContainer = styled.div`
  background-color: #f9fafc;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 36px;

  @media (max-width: 768px) {
    padding: 36px 20px;
    padding-bottom: 12px;
  }

  @media (max-width: 480px) {
    padding: 36px 20px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const ServiceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  margin-top: 60px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;

    &:nth-child(2) {
      flex-direction: column-reverse; /* Image first for the second row */
    }
  }

  
`;

const ServiceContent = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;

  h3 {
    font-size: 2rem;
    margin-bottom: 15px;
    color: #000;
  }

  p {
    font-size: 1.5rem;
    color: #272324;
    margin-bottom: 10px;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 15px 0;

    li {
      font-size: 1.5rem;
      color: #272324;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: #f9c935;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

const ServiceImage = styled.div`
  flex: 1;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;




export default ServiceDetails;
