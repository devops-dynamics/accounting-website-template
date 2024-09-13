"use client";

import styled from 'styled-components';

export default function Testimonials() {
  return (
    <TestimonialPage>
      <TestimonialSection>
        <SectionHeader>
          <h2>What Our Clients Say</h2>
          <p>Hear from our clients about how we’ve helped them manage their finances effortlessly.</p>
        </SectionHeader>
        <TestimonialCards>
          <TestimonialCard>
            <Quote>
              "The platform has completely transformed the way we handle our accounts. It's efficient, reliable, and easy to use!"
            </Quote>
            <ClientInfo>
              <ClientImage src="/client1.jpg" alt="Client 1" />
              <ClientDetails>
                <ClientName>John Doe</ClientName>
                <ClientCompany>CEO, Acme Corp</ClientCompany>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Quote>
              "An indispensable tool for any business. The best decision we made for our accounting needs!"
            </Quote>
            <ClientInfo>
              <ClientImage src="/client2.jpg" alt="Client 2" />
              <ClientDetails>
                <ClientName>Jane Smith</ClientName>
                <ClientCompany>Founder, BrightPath</ClientCompany>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Quote>
              "Our accounting process has never been easier. We highly recommend this platform!"
            </Quote>
            <ClientInfo>
              <ClientImage src="/client3.jpg" alt="Client 3" />
              <ClientDetails>
                <ClientName>Michael Johnson</ClientName>
                <ClientCompany>CFO, Tech Solutions</ClientCompany>
              </ClientDetails>
            </ClientInfo>
          </TestimonialCard>
        </TestimonialCards>
      </TestimonialSection>
    </TestimonialPage>
  );
}

const TestimonialPage = styled.div`
  padding: 50px 20px;
  background: linear-gradient(135deg, #f7f9fb 0%, #86efac 100%);
`;

const TestimonialSection = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 50px;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 2.5rem;
    color: #3ba776;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.125rem;
    color: #555;
  }
`;

const TestimonialCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  transition: box-shadow 0.3s ease,transform 0.3s ease;
  animation: kcLEkT 0.5s ease forwards;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px #555;
  width: 300px;
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s ease,transform 0.3s ease;
  animation: kcLEkT 0.5s ease forwards;
`;

const Quote = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: #333;
  margin-bottom: 20px;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #3ba776;
`;

const ClientCompany = styled.span`
  font-size: 0.875rem;
  color: #777;
`;
