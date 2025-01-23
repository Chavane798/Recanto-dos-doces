'use client';

import Image from 'next/image';

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
            onClickCapture={() => window.location.href = "/product"}
          >
            Conheça Nossos Produtos
          </button>
        </main>

        {/* Segunda coluna: Slider de imagens automático */}
        <div className="relative w-full h-80 sm:h-full overflow-hidden rounded-lg shadow-inner">
          <div className="absolute flex w-[300%] h-full animate-slider">
            {/* Imagem 1 */}
            <div className="relative w-1/3 h-full">
              <Image
                src="/sumo.webp"
                alt="Brigadeiros deliciosos"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Imagem 2 */}
            <div className="relative w-1/3 h-full">
              <Image
                src="/hotd.webp"
                alt="Trufas artesanais"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Imagem 3 */}
            <div className="relative w-1/3 h-full">
              <Image
                src="/chips.webp"
                alt="Doces especiais"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para o slider automático */}
      <style jsx>{`
        .animate-slider {
          animation: slider 12s linear infinite;
        }

        @keyframes slider {
          0% {
            transform: translateX(0);
          }
          33% {
            transform: translateX(-100%);
          }
          66% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
