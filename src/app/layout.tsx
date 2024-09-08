import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/Header';  // Ensure you import the Header component

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />  {/* Add Header component here */}
        {children}
      </body>
    </html>
  );
}
