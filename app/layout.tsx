import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

import './globals.css';
import ToasterProvider from './components/providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import {
  LoginModal,
  RegisterModal,
  RentModal,
  SearchModal,
} from './components/modals';
import { ClientOnly } from './components';

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
          <SearchModal />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </ClientOnly>
      </body>
    </html>
  );
}
