"use client";

import styled from 'styled-components';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here, e.g., sending form data to backend
  };

  return (
    <ContactPage>
      <Section>
        <h2>Contact Us</h2>
        <p>
        Reach out to us for expert accounting services tailored to your needs.
        </p>
      </Section>

      <ContactContainer>
        <ContactInfo>
          <InfoItem>
            <Icon>📍</Icon>
            <div>
              <h3>Address</h3>
              <p>4671 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
            </div>
          </InfoItem>

          <InfoItem>
            <Icon>📞</Icon>
            <div>
              <h3>Phone</h3>
              <p>571-457-2321</p>
            </div>
          </InfoItem>

          <InfoItem>
            <Icon>📧</Icon>
            <div>
              <h3>Email</h3>
              <p>ntamerweal@mfano.ga</p>
            </div>
          </InfoItem>
        </ContactInfo>

        <FormContainer onSubmit={handleSubmit}>
          <h3>Send Message</h3>
          <FormInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormTextarea
            name="message"
            placeholder="Type your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <FormButton type="submit">Send</FormButton>
        </FormContainer>
      </ContactContainer>
    </ContactPage>
  );
}

// Styled-components for styling
const ContactPage = styled.div`
  padding: 50px 20px;
  background: linear-gradient(135deg, #f7f9fb 0%, #e1f5e6 100%);
`;

const Section = styled.section`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px; /* Adjust this value to increase space below h2 */
  }

  p {
    font-size: 1.25rem;
    color: #777;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px; /* Adjust this value to increase space above p */
  }
`;
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  h3 {
    color: #333;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  p {
    color: #555;
    font-size: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const FormContainer = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;

  h3 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
`;

const FormButton = styled.button`
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

