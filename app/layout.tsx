import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'PlaySmart - Where Sports Meets STEM Education',
  description: 'PlaySmart integrates sports science with STEM education to create an engaging learning experience for athletes and students.',
  keywords: 'sports education, STEM learning, athletic development, sports science, educational technology',
  openGraph: {
    title: 'PlaySmart - Where Sports Meets STEM Education',
    description: 'Discover how STEM concepts enhance athletic performance through interactive learning.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PlaySmart',
  },
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
          to-black 
          text-white 
          min-h-screen
          flex
          flex-col
        `}
      >
        <Navbar />
        <main className="flex-grow flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}