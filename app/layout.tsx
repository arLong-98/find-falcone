import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head></head>
      <body className={clsx(poppins.className, 'min-h-screen')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Find Falcone',
  description: 'Help king shan in finding Queen Falcone',
};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default RootLayout;
