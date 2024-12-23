/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaCar, FaUsers, FaCity, FaCalendarAlt } from "react-icons/fa";

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <AchievementsContainer ref={sectionRef}>
      <ContentWrapper>
        <SectionTitle>
          Our <span>Achievements</span>
        </SectionTitle>
        <StatsContainer>
          <StatCard $isVisible={isVisible}>
            <IconWrapper>
              <FaCar />
            </IconWrapper>
            <AnimatedNumber end={1000000} suffix="+" $isVisible={isVisible} />
            <StatLabel>Rides Completed</StatLabel>
          </StatCard>
          <StatCard $isVisible={isVisible}>
            <IconWrapper>
              <FaUsers />
            </IconWrapper>
            <AnimatedNumber end={500000} suffix="+" $isVisible={isVisible} />
            <StatLabel>Satisfied Customers</StatLabel>
          </StatCard>
          <StatCard $isVisible={isVisible}>
            <IconWrapper>
              <FaCity />
            </IconWrapper>
            <AnimatedNumber end={50} suffix="+" $isVisible={isVisible} />
            <StatLabel>Cities Covered</StatLabel>
          </StatCard>
          <StatCard $isVisible={isVisible}>
            <IconWrapper>
              <FaCalendarAlt />
            </IconWrapper>
            <AnimatedNumber end={5} suffix="+" $isVisible={isVisible} />
            <StatLabel>Years of Operation</StatLabel>
          </StatCard>
        </StatsContainer>
      </ContentWrapper>
    </AchievementsContainer>
  );
};

const AnimatedNumber = ({ end, suffix, $isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if ($isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 10);
      return () => clearInterval(timer);
    }
  }, [end, $isVisible]);

  return (
    <StatNumber>
      {count.toLocaleString()}
      {suffix}
    </StatNumber>
  );
};

const AchievementsContainer = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 36px 20px;
  }

  @media (max-width: 480px) {
    padding: 36px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  color: #272324;
  font-weight: bold;
  span {
    color: #f9c935;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #f9c935;
  margin-bottom: 15px;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export { AchievementsSection };
