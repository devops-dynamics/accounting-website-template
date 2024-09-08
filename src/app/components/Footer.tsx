"use client";

import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} AccountEase. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  text-align: center;
  padding: 20px;
  color: #777;
`;
