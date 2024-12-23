import  { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUsers, FaCity, FaTrophy, FaThumbsUp } from "react-icons/fa";

const AboutPageAchievementsSection = () => {
  const [stats, setStats] = useState({
    users: 0,
    cities: 0,
    awards: 0,
    successStories: 0,
  });

  useEffect(() => {
    const counters = {
      users: 500000,
      cities: 100,
      awards: 10,
      successStories: 1000,
    };

    let interval = setInterval(() => {
      setStats((prevStats) => ({
        users: prevStats.users < counters.users ? prevStats.users + 1000 : counters.users,
        cities: prevStats.cities < counters.cities ? prevStats.cities + 1 : counters.cities,
        awards: prevStats.awards < counters.awards ? prevStats.awards + 1 : counters.awards,
        successStories:
          prevStats.successStories < counters.successStories
            ? prevStats.successStories + 10
            : counters.successStories,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AchievementsContainer>
      <ContentWrapper>
        <SectionTitle>🏆 Our <span>Achievements</span></SectionTitle>
        <StatsGrid>
          <StatCard>
            <IconWrapper><FaUsers /></IconWrapper>
            <h3>{stats.users.toLocaleString()}+</h3>
            <p>Happy Users</p>
          </StatCard>
          <StatCard>
            <IconWrapper><FaCity /></IconWrapper>
            <h3>{stats.cities}+</h3>
            <p>Cities Covered</p>
          </StatCard>
          <StatCard>
            <IconWrapper><FaTrophy /></IconWrapper>
            <h3>{stats.awards}+</h3>
            <p>Awards Won</p>
          </StatCard>
          <StatCard>
            <IconWrapper><FaThumbsUp /></IconWrapper>
            <h3>{stats.successStories.toLocaleString()}+</h3>
            <p>Success Stories</p>
          </StatCard>
        </StatsGrid>
      </ContentWrapper>
    </AchievementsContainer>
  );
};

// Styled Components
const AchievementsContainer = styled.section`
  background: linear-gradient(to right, #f9c935, #ffdd57);
  padding: 80px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

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
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #555;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #000;
  margin-bottom: 15px;
`;

export default AboutPageAchievementsSection;
