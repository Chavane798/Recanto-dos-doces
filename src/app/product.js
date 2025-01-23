"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const products = [
    {
        imageSrc: "/milco.jpg",
        name: "Milco",
        price: 1000,
        quantity: "10",
        category: "biscoitos",
        description: "Bites de morango saborosos."
    },
    {
        imageSrc: "/coca-cola.jpg",
        name: "Coca-Cola",
        price: 30,
        quantity: "10",
        category: "refrigerantes",
        description: "Refrigerante clássico Coca-Cola."
    },
    {
        imageSrc: "/sandes.jpg",
        name: "Sandes",
        price: 1000,
        quantity: "5",
        category: "alimentação",
        description: "Sandes disponíveis nos tamanhos médio e grande."
    },
    {
        imageSrc: "/chips.jpg",
        name: "Batata Chips",
        price: 150,
        quantity: "20",
        category: "snacks",
        description: "Batatas chips crocantes, sabor barbecue."
    },
    {
        imageSrc: "/suco-laranja.jpg",
        name: "Suco de Laranja",
        price: 25,
        quantity: "15",
        category: "bebidas",
        description: "Suco de laranja natural, sem açúcar adicionado."
    },
    {
        imageSrc: "/pizza.jpg",
        name: "Mini Pizza",
        price: 500,
        quantity: "8",
        category: "alimentação",
        description: "Mini pizzas com queijo e pepperoni."
    },
    {
        imageSrc: "/chocolate.jpg",
        name: "Chocolate ao Leite",
        price: 200,
        quantity: "12",
        category: "doces",
        description: "Chocolate ao leite cremoso, derrete na boca."
    },
    {
        imageSrc: "/agua.jpg",
        name: "Água Mineral",
        price: 10,
        quantity: "50",
        category: "bebidas",
        description: "Água mineral pura e cristalina."
    },
    {
        imageSrc: "/cookies.jpg",
        name: "Cookies",
        price: 300,
        quantity: "25",
        category: "doces",
        description: "Cookies com gotas de chocolate, crocantes e deliciosos."
    }
];

export default function Product() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento (por exemplo, aguardando a resposta de uma API)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Tempo para simular o carregamento (2 segundos)
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin border-4 border-t-4 border-blue-600 rounded-full w-16 h-16"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-red-300 rounded-xl shadow-md">
        <Image 
        className= "mx-auto rounded-lg mx-auto rounded-full mb-4"
        src="/recanto-dos-doces.webp"
        alt="Next.js logo"
        width={180}
        height={180}
        />

      <h1 className="text-3xl font-serif italic font-extrabold text-center bg-rose-200 mb-6 rounded-md py-2">
        Produtos
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <li
          className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
          key={index}
        >
          <Image
            className="mx-auto rounded-lg"
            src={product.imageSrc}
            alt={`${product.name} image`}
            width={100}
            height={100}
            loading="lazy"
          />
        
          <h2 className="text-lg font-semibold text-center mt-4">
            {product.name}
          </h2>
          <p className="text-gray-600 text-center">
            Preço: {product.price.toFixed(2)}MT
          </p>
          <p className="text-gray-600 text-center">
            Quantidade: {product.quantity}
          </p>
          <p className="text-gray-600 text-center">
            Categoria: {product.category}
          </p>
          <p className="text-gray-600 text-center">
            {product.description}
          </p>
        </li>
        
        ))}
      </ul>
    </div>
  );
}
