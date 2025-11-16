import type { Metadata } from 'next';
import './globals.css';
import Layout from './components/Layout';

export const metadata: Metadata = {
  title: 'DentistMatch - Find Your Perfect Dentist',
  description: 'The modern way to discover and book dental care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}