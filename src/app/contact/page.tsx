"use client";

import styled from 'styled-components';

const ContactPage = () => (
  <ContactSection>
    <h1>Contact Us</h1>
    <p>Ready to transform your accounting? Get in touch with us today!</p>
    <Button>Contact Us</Button>
  </ContactSection>
);

export default ContactPage;

const ContactSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: #f4f4f4;
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
