"use client";

import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  return (
    <StyledHeader>
      <Logo>AccountEase</Logo>
      <Nav>
        <Link href="/" passHref legacyBehavior>
          <NavLink $isActive={activeLink === 'home'} onClick={() => setActiveLink('home')}>
            Home
          </NavLink>
        </Link>
        <Link href="/services" passHref legacyBehavior>
          <NavLink $isActive={activeLink === 'services'} onClick={() => setActiveLink('services')}>
            Services
          </NavLink>
        </Link>
        <Link href="/testimonials" passHref legacyBehavior>
          <NavLink $isActive={activeLink === 'testimonials'} onClick={() => setActiveLink('testimonials')}>
            Testimonials
          </NavLink>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <NavLink $isActive={activeLink === 'about'} onClick={() => setActiveLink('about')}>
            About
          </NavLink>
        </Link>
        <Link href="/contact" passHref legacyBehavior>
          <NavLink $isActive={activeLink === 'contact'} onClick={() => setActiveLink('contact')}>
            Contact
          </NavLink>
        </Link>
      </Nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #3ba776;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
`;

const NavLink = styled.a<{ $isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#3ba776' : '#333')};
  font-size: 1rem;
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.$isActive ? '2px solid #3ba776' : 'none')};
  padding-bottom: 4px;
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #3ba776;
  }
`;
