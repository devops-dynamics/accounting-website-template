"use client";

import styled from 'styled-components';

export default function Contact() {
  return (
    <ContactPage>
      <Section>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please get in touch with us using the form below or via email.</p>
        <Button>Contact Us</Button>
      </Section>
    </ContactPage>
  );
}

const ContactPage = styled.div`
  padding: 50px 20px;
`;

const Section = styled.section`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    color: #3ba776;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.25rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
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
