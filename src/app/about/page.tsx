"use client";

import styled from 'styled-components';

const AboutPage = () => {
  return (
    <AboutSection>
      <h1>About AccountEase</h1>
      <p>
        At AccountEase, we are passionate about simplifying accounting for businesses of all sizes. 
        With our user-friendly platform, you can streamline your financial processes, 
        manage invoices, and track your financial health in real-time.
      </p>
      <p>
        Our team of experts is dedicated to providing cutting-edge solutions tailored 
        to the needs of your business. We believe in empowering businesses to focus 
        on what matters most—growth, without the hassle of complex accounting tasks.
      </p>
    </AboutSection>
  );
};

export default AboutPage;

const AboutSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  background-color: #f4f4f4;

  h1 {
    font-size: 3rem;
    color: #3ba776;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.25rem;
    color: #555;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
