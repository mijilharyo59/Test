import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'JULL STUDIO',
  description: 'Quiet luxury fashion editorial experience.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
