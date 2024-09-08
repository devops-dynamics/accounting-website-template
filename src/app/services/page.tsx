"use client";

import styled from 'styled-components';

export default function Services() {
  return (
    <ServicesPage>
      <Section>
        <h2>Our Services</h2>
        <p>We offer a wide range of accounting services tailored to your needs.</p>
      </Section>

      <TestimonialsSection>
        <h2>What Our Clients Say</h2>
        <Testimonial>
          <p>“The best accounting software I have ever used!”</p>
          <h4>Jane Doe, Business Owner</h4>
        </Testimonial>
        <Testimonial>
          <p>“Streamlined our invoicing process!”</p>
          <h4>John Smith, Freelancer</h4>
        </Testimonial>
      </TestimonialsSection>
    </ServicesPage>
  );
}

const ServicesPage = styled.div`
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
  }
`;

const TestimonialsSection = styled.section`
  background-color: #f9fafb;
  padding: 50px 20px;
  text-align: center;

  h2 {
    color: #3ba776;
    margin-bottom: 30px;
  }
`;

const Testimonial = styled.div`
  margin-bottom: 20px;

  p {
    font-style: italic;
    font-size: 18px;
    color: #555;
  }

  h4 {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }
`;
