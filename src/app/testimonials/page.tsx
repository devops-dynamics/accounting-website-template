"use client";

import styled from 'styled-components';

const TestimonialsPage = () => (
  <TestimonialsSection>
    <h1>What Our Clients Say</h1>
    <Testimonial>
      <p>“The best accounting software I have ever used!”</p>
      <h4>Jane Doe, Business Owner</h4>
    </Testimonial>
    <Testimonial>
      <p>“Streamlined our invoicing process!”</p>
      <h4>John Smith, Freelancer</h4>
    </Testimonial>
  </TestimonialsSection>
);

export default TestimonialsPage;

const TestimonialsSection = styled.section`
  background-color: #f9fafb;
  padding: 50px 20px;
  text-align: center;

  h1 {
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
