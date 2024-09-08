"use client";

import styled from 'styled-components';

export const CTA = () => (
  <CTASection>
    <h2>Ready to streamline your accounting?</h2>
    <Button>Get Started Now</Button>
  </CTASection>
);

const CTASection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background-color: #f7f9fb;

  h2 {
    color: #3ba776;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 12px 30px;
  background-color: #3ba776;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #319961;
  }
`;
