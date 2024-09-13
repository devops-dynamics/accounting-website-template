"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AboutPage>
      <AboutSection isVisible={isVisible}>
        <TextContainer>
          <h2>About Us</h2>
          <p>
            We provide expert financial services and solutions tailored to
            manage your business's finances efficiently. Our experienced team
            is here to guide you through financial planning, auditing, taxation,
            and more.
          </p>
          <p>
            With over 20 years of experience and a dedicated team, we strive to
            deliver personalized and transparent financial services that empower
            your business to succeed.
          </p>
        </TextContainer>
        <ImageContainer isVisible={isVisible}>
          <img src="/about-us-image.png" alt="About us illustration" />
        </ImageContainer>
      </AboutSection>
      <StatsSection>
        {[
          { label: "20+", description: "Years of Experience" },
          { label: "50+", description: "Happy Clients" },
          { label: "100%", description: "Transparency" },
        ].map((stat, index) => (
          <StatItem key={index} isVisible={isVisible} delay={`${index * 0.2}s`}>
            <h3>{stat.label}</h3>
            <p>{stat.description}</p>
          </StatItem>
        ))}
      </StatsSection>
    </AboutPage>
  );
}

const AboutPage = styled.div`
  padding: 50px 20px;
 background: linear-gradient(135deg, rgb(247, 249, 251) 0%, #86efac 100%);
`;

const AboutSection = styled.section<{ isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(50px)"};
  transition: opacity 0.8s ease, transform 0.8s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
  h2 {
    font-size: 2.5rem;
    color: #3ba776;
    margin-bottom: 20px;
  }
  p {
    margin-top: 20px;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    animation: fadeIn 1s ease-in-out;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageContainer = styled.div<{ isVisible: boolean }>`
  max-width: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transform: ${(props) =>
      props.isVisible ? "scale(1)" : "scale(0.9)"};
    transition: transform 0.6s ease-out;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 30px;
  }
`;

const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatItem = styled.div<{ isVisible: boolean; delay: string }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease ${(props) => props.delay},
    transform 0.5s ease ${(props) => props.delay};

  h3 {
    font-size: 3rem;
    color: #3ba776;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;
