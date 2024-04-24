import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GlobalStyle } from './styles/Globals.styled';
import StyledComponentsRegistry from '@/lib/registry';

const fixel = localFont({
  src: './fonts/FixelVariable.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Funtico',
  description: 'In Web3 w̶e̶ is trust',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.png' sizes='any' />
      </head>
      <body className={fixel.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
