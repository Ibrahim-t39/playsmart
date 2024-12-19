import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'STEMletics - STEM-Sports Integrated Educational Platform',
  description: 'STEMletics combines the excitement of sports with the innovation of STEM to create an immersive educational experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${montserrat.variable} 
          ${openSans.variable} 
          font-sans 
          bg-gradient-to-br 
          from-gray-900 
          via-gray-800 
          to-black 
          text-white 
          min-h-screen
        `}
      >
        <Navbar />
        <main className="flex-grow flex flex-col w-full min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
