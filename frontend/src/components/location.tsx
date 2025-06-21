'use client'

import Image from 'next/image'

export default function Location(){
    return(
           <section id="" className="w-full bg-amber-950 py-16 px-6 md:px-12mt mt-12">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/dublinMap.png" // coloque sua imagem na pasta public
                    alt="Equipe trabalhando junta"
                    width={1500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-5xl font-extrabold text-amber-100 mb-6">Location</h2>
                  <p className="text-lg text-amber-100 leading-relaxed">
                    Na <span className="font-semibold text-white">GrandExpress</span>, oferecemos soluções modernas com foco em excelência,
                    transparência e experiência do cliente. Nossa equipe é apaixonada
                    por inovação e comprometida com resultados reais. Estamos aqui para
                    transformar sua ideia em realidade com dedicação e confiança.
                  </p>
                </div>
              </div>
            </section>
    )
}