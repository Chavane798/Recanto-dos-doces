"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav 
            className="text-3xl m-8 font-serif italic font-extrabold text-center border-2 bg-white opacity-75 border-solid mb-6 rounded-xl py-2" 
            aria-label="Navegação principal"
        >
            <ul className="flex gap-8 justify-center">
                <li>
                    <Link href="/" aria-current="page">
                        Inicio
                    </Link>
                </li>
                
                <li><Link href="/product">Produtos</Link></li>
                
                <li>
                    <Link href="/contact">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
