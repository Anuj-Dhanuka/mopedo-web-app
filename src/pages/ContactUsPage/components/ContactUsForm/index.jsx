import styled from "styled-components";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <ContactGrid>
          {/* Contact Information */}
          <ContactInfo>
            <InfoCard>
              <FaMapMarkerAlt />
              <h3>Our Address</h3>
              <p>4th Floor, Workflo Bizness Square</p>
              <p>Hitech City, Madhapur, Hyderabad, Telangana, India</p>
            </InfoCard>
            <InfoCard>
              <FaPhone />
              <h3>Phone Number</h3>
              <p>+91 12345 67890</p>
            </InfoCard>
            <InfoCard>
              <FaEnvelope />
              <h3>Email</h3>
              <p>dhanush@mopedo.com</p>
            </InfoCard>
            <InfoCard>
              <FaClock />
              <h3>Business Hours</h3>
              <p>Mon - Sat: 9:00 AM to 6:00 PM</p>
            </InfoCard>
          </ContactInfo>

          {/* Contact Form */}
          <ContactForm>
            <h3>Send Us a Message</h3>
            <form>
              <FormGroup>
                <input type="text" placeholder="Your Name" required />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder="Your Email" required />
              </FormGroup>
              <FormGroup>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          </ContactForm>
        </ContactGrid>
      </ContentWrapper>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.section`
  margin-top: 10vh;
  padding: 80px 20px;
  background: #f9fafc; /* Updated Background Color */

  @media (max-width: 768px) {
    padding: 36px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 2.5rem;
    color: #f9c935;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 5px;
    color: #000;
  }

  p {
    font-size: 1.3rem;
    color: #555;
  }
`;

const ContactForm = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    color: #000;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1.3rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;

    &:focus {
      border-color: #f9c935;
    }
  }

  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background: #f9c935;
  color: #fff;
  font-size: 1.4rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-weight: 600;

  &:hover {
    background: #e8b825;
  }
`;

export default ContactUsForm;
