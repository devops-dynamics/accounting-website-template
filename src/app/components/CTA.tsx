"use client";

import styled from 'styled-components';

export const CTA = () => (
  <CTASection>
    <h2>Ready to transform your accounting?</h2>
    <CTAButton>Contact Us Today</CTAButton>
  </CTASection>
);

const CTASection = styled.section`
  text-align: center;
  margin: 50px 0;

  h2 {
    font-size: 32px;
    color: #3ba776;
  }
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  background-color: #3ba776;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #319961;
  }
`;

