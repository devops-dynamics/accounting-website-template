"use client";

import styled from 'styled-components';

export const Footer = () => (
  <FooterSection>
    <p>&copy; {new Date().getFullYear()} AccountEase. All Rights Reserved.</p>
  </FooterSection>
);

const FooterSection = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1; /* Subtle footer background */
  color: #777;
`;

