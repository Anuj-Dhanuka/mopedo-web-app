// MopedoShowcase.jsx
import styled from "styled-components";

// Data for the circles
const items = [
  { letter: "M" },
  { letter: "O" },
  { letter: "P" },
  { letter: "E" },
  { letter: "D" },
  { letter: "O" },
];

// Main Component
const MopedoShowcase = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={index}>
          <Circle>{item.letter}</Circle>
        </Item>
      ))}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background-color: #f9fafc;
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 36px 20px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    gap: 10px;
  }
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: black;
  color: #f9c935;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  border: 2px solid white;

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1.5rem;
  }


`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin: 5px;
  }

  @media (max-width: 480px) {
    margin: 3px;
  }
`;

export default MopedoShowcase;
