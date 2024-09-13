"use client";

import styled, { keyframes } from 'styled-components';

export default function Services() {
  return (
    <ServicesPage>
      <ServiceHeader>
        <h2>Our Services</h2>
        <p>Explore the range of services we provide to help streamline your accounting and financial needs.</p>
      </ServiceHeader>
      
      <ServiceContainer>
        {servicesData.map((service, index) => (
          <ServiceBox key={index}>
            <ServiceIcon src={service.icon} alt={`${service.title} icon`} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceBox>
        ))}
      </ServiceContainer>
    </ServicesPage>
  );
}

// Sample data for services
const servicesData = [
  {
    icon: "/icons/bookkeeping.svg",
    title: "Bookkeeping & Accounting",
    description: "Manage your books with ease using our comprehensive bookkeeping and accounting services.",
  },
  {
    icon: "/icons/tax.svg",
    title: "Tax Services",
    description: "Stay compliant and save money with our professional tax services tailored to your needs.",
  },
  {
    icon: "/icons/advisory.svg",
    title: "Financial Advisory",
    description: "Receive expert financial advice to help you grow and protect your wealth.",
  },
];

// Animation for the service box hover effect
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Styled components
const ServicesPage = styled.div`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f7f9fb 0%, #86efac 100%);
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #319961;
`;

const ServiceHeader = styled.div`
  margin-bottom: 40px;
  h2 {
    font-size: 2.5rem;
    color: #3ba776;
  }
  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const ServiceBox = styled.div`
  background-color: white;
  border: 1px solid #f1f1f1;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease forwards;
  opacity: 0;

  &:hover {
    box-shadow: 0 4px 8px #555;;
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #3ba776;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
