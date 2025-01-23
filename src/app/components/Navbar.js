'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="text-3xl m-8 font-serif italic font-extrabold text-center border-2 bg-white opacity-75 border-solid mb-6 rounded-xl py-2" 
      aria-label="Navegação principal"
    >
      <div className="flex justify-between items-center">
        {/* Logo ou título */}
        <div className="text-lg sm:text-2xl font-bold text-pink-600 justify-center ">
          <Link href="/">Recanto dos Doces</Link>
        </div>

        {/* Botão de menu hamburguer para telas pequenas */}
        <button 
          className="sm:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Lista de navegação */}
      <ul 
        className={`sm:flex gap-8 justify-center mt-4 sm:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <li>
          <Link href="/" aria-current="page">Inicio</Link>
        </li>
        
        <li>
          <Link href="/product">Produtos</Link>
        </li>
        
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}
