"use client"
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import NavbarApp from './navbarApp';

export const Navigation = () => {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/register') {
    return null; // No renderiza ninguna navbar
  }

  return (
    <>
      {pathname === '/' ? <Navbar /> : <NavbarApp />}
    </>
  );
};

export default Navigation;