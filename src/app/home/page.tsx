"use client";

import styled from 'styled-components';

export default function Home() {
  return (
    <HomePage>
      <HeroSection>
        <HeroContent>
          <h1>Streamline Your Accounting with Ease</h1>
          <p>Manage your finances with our efficient and reliable platform.</p>
          <HeroButton>Get Started</HeroButton>
        </HeroContent>
        <HeroImage src="/hero-image.png" alt="Accounting illustration" />
      </HeroSection>
    </HomePage>
  );
}

const HomePage = styled.div`
  padding: 50px 20px;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: linear-gradient(135deg, #f7f9fb 0%, #e1f5e6 100%);
  height: 80vh;
`;

const HeroContent = styled.div`
  max-width: 50%;
  h1 {
    font-size: 3.5rem;
    color: #3ba776;
  }
  p {
    margin-top: 20px;
    font-size: 1.25rem;
    color: #555;
  }
`;

const HeroButton = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #3ba776;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #319961;
  }
`;

const HeroImage = styled.img`
  max-width: 50%;
  height: auto;
`;
