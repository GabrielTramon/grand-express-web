'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="w-full bg-amber-100 py-16 px-6 md:px-12mt mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-5xl font-extrabold text-orange-600 mb-6">Sobre Nós</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Na <span className="font-semibold text-orange-700">GrandExpress</span>, oferecemos soluções modernas com foco em excelência,
            transparência e experiência do cliente. Nossa equipe é apaixonada
            por inovação e comprometida com resultados reais. Estamos aqui para
            transformar sua ideia em realidade com dedicação e confiança.
          </p>
        </div>

        {/* Imagem */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/about-us-image.jpg" // coloque sua imagem na pasta public
            alt="Equipe trabalhando junta"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
