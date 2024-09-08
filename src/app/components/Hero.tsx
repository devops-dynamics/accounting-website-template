"use client";

import styled from 'styled-components';

export const Hero = () => (
  <HeroSection>
    <HeroContent>
      <h1>Streamline Your Accounting with Ease</h1>
      <p>Manage your finances with our efficient and reliable platform.</p>
      <HeroButton>Get Started</HeroButton>
    </HeroContent>
    <HeroImage src="/hero-image.png" alt="Accounting illustration" />
  </HeroSection>
);

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background: linear-gradient(135deg, #f7f9fb 0%, #e1f5e6 100%);
  height: 100vh; /* Full viewport height */
`;

const HeroContent = styled.div`
  max-width: 50%;

  h1 {
    font-size: 48px;
    color: #3ba776;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    color: #555;
  }
`;

const HeroButton = styled.button`
  margin-top: 30px;
  padding: 12px 24px;  /* Larger button */
  background-color: #3ba776;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px; /* Larger font for better visibility */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #319961;
  }
`;

const HeroImage = styled.img`
  max-width: 50%;
  height: auto;
`;
