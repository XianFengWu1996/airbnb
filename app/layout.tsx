import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

import './globals.css';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

const nunito = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
