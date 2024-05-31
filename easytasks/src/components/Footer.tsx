/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer-gradient text-black py-10 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mb-4">Web</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/Comenzar">Comenzar</Link>
            </li>
            <li>
              <Link href="/Donate">Donaciones</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="EasyTasks Logo" className="mx-auto mb-2" />
          <h2 className="text-lg font-bold mb-4">EasyTasks</h2>
          <div className="flex  space-x-4">
            <Link href="https://facebook.com">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://linkedin">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://youtube">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-lg font-bold mb-4">Contacto</h2>
          <ul>
            <li>
              <Link href="/reclamo">Haz un reclamo</Link>
            </li>
            <li>
              <Link href="/Deja una Consulta">Deja una Consulta</Link>
            </li>
            <li>
              <Link href="/sugerencias">Enviar Sugerencias</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">@2024 - EasyTasks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
