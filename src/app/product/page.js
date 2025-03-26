"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const products = {
  biscoitos: [
      {
          imageSrc: "/milco.jpg",
          name: "Milco",
          price: 15,
          quantity: "10",
          description: "Bites de morango saborosos."
      },
      {
          imageSrc: "/oreo.jpeg",
          name: "Oreo",
          price: 90,
          quantity: "30",
          description: "Biscoitos recheados com creme de baunilha."
      },
      {
          imageSrc: "/cream-cracker.jpeg",
          name: "Cream Cracker",
          price: 70,
          quantity: "40",
          description: "Biscoitos crocantes ideais para lanches rápidos."
      }
  ],
  refrigerantes: [
      {
          imageSrc: "/coca-cola.jpg",
          name: "Coca-Cola",
          price: 30,
          quantity: "10",
          description: "Refrigerante clássico Coca-Cola."
      },
      {
          imageSrc: "/pepsi.jpeg",
          name: "Pepsi",
          price: 25,
          quantity: "15",
          description: "Refrigerante refrescante com sabor marcante."
      },
      {
          imageSrc: "/fanta.jpeg",
          name: "Fanta Laranja",
          price: 30,
          quantity: "20",
          description: "Refrigerante sabor laranja com gás."
      }
  ],
  alimentacao: [
      {
          imageSrc: "/sandes.jpg",
          name: "Sandes",
          price: 100,
          quantity: "5",
          description: "Sandes disponíveis nos tamanhos médio e grande."
      },
      {
          imageSrc: "/pizza.jpg",
          name: "Mini Pizza",
          price: 120,
          quantity: "8",
          description: "Mini pizzas com queijo e pepperoni."
      },
      {
          imageSrc: "/hamburguer.jpeg",
          name: "Hambúrguer",
          price: 250,
          quantity: "10",
          description: "Hambúrgueres suculentos com acompanhamentos variados."
      }
  ],
  snacks: [
      {
          imageSrc: "/chips.jpg",
          name: "Batata Chips",
          price: 50,
          quantity: "20",
          description: "Batatas chips crocantes, sabor barbecue."
      },
      {
          imageSrc: "/nachos.jpeg",
          name: "Nachos",
          price: 120,
          quantity: "15",
          description: "Nachos de milho com um toque de pimenta."
      },
      {
          imageSrc: "/amendoim.jpeg",
          name: "Amendoim Torrado",
          price: 60,
          quantity: "25",
          description: "Amendoim torrado com um leve toque de sal."
      }
  ],
  bebidas: [
      {
          imageSrc: "/suco-laranja.jpg",
          name: "Suco de Laranja",
          price: 25,
          quantity: "15",
          description: "Suco de laranja natural, sem açúcar adicionado."
      },
      {
          imageSrc: "/agua.jpg",
          name: "Água Mineral",
          price: 20,
          quantity: "50",
          description: "Água mineral pura e cristalina."
      },
      {
          imageSrc: "/cha-gelado.jpeg",
          name: "Chá Gelado",
          price: 40,
          quantity: "10",
          description: "Chá gelado com sabores de pêssego e limão."
      }
  ],
  doces: [
      {
          imageSrc: "/chocolate.jpg",
          name: "Chocolate ao Leite",
          price: 140,
          quantity: "12",
          description: "Chocolate ao leite cremoso, derrete na boca."
      },
      {
          imageSrc: "/cookies.jpg",
          name: "Cookies",
          price: 100,
          quantity: "25",
          description: "Cookies com gotas de chocolate, crocantes e deliciosos."
      },
      {
          imageSrc: "/bala.jpeg",
          name: "Bala de Gelatina",
          price: 50,
          quantity: "40",
          description: "Balas de gelatina com sabores variados."
      }
  ]
};


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
    <div className="container mx-auto p-6 bg-red-300 rounded-xl shadow-md">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          className="rounded-full border-4 border-white shadow-lg"
          src="/recanto-dos-doces.webp"
          alt="Recanto dos Doces"
          width={160}
          height={160}
        />
      </div>
  
      {/* Título Principal */}
      <h1 className="text-3xl font-serif italic font-extrabold text-center bg-rose-200 mb-8 rounded-lg py-3 px-6 shadow-sm">
        Produtos
      </h1>
  
      {/* Categorias */}
      <div className="space-y-10">
        {Object.entries(products).map(([category, items]) => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize border-b-2 border-rose-200 pb-2">
              {category}
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((product, index) => (
                <li
                  className="flex flex-col border rounded-xl p-5 bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  key={index}
                >
                  {/* Imagem centralizada */}
                  <div className="flex justify-center mb-4">
                    <Image
                      className="rounded-lg object-cover h-32 w-32"
                      src={product.imageSrc}
                      alt={`${product.name}`}
                      width={128}
                      height={128}
                      loading="lazy"
                    />
                  </div>
  
                  {/* Informações do produto */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-center mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-center text-sm mb-4">
                      {product.description}
                    </p>
                  </div>
  
                  {/* Preço e botão alinhados na base */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-bold text-pink-600">
                        {product.price.toFixed(2)}MT
                      </span>
                      <span className="text-sm text-gray-500">
                        {product.quantity} un
                      </span>
                    </div>
                    <button className="w-full mt-3 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors">
                      Comprar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}