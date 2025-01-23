'use client';

//import Product from ".Product";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Primeira coluna: Mensagem de boas-vindas */}
        <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
          <h1 className="text-5xl font-serif italic font-extrabold text-pink-600 leading-tight">
            Bem-vindo ao Recanto dos Doces! 🍬
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
            Explore um universo de sabores que vão adoçar os seus momentos. Nossos doces são feitos com carinho e dedicação, perfeitos para presentear ou tornar o seu dia ainda mais especial.
          </p>
          <button className="px-8 py-3 bg-pink-500 text-white text-lg rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
           onClick={() => {window.location.href = '/product'}}
          >
            Conheça Nossos Produtos
          </button>
        </main>

        {/* Segunda coluna: Slider de imagens (a ser implementado) */}
        <div className="flex justify-center items-center">
          <div className="w-full h-80 sm:h-full bg-gray-200 rounded-lg shadow-inner flex items-center justify-center">
            <p className="text-lg text-gray-500 italic">
              [Slider de imagens aqui]
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
