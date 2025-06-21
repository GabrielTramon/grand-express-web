import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white border-y-2 border-gray-300 py-10 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Services</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
          <Image src="/fastIcon.png" alt="Entrega Rápida" width={120} height={100} className="mx-auto mb-2" />
          <p className="text-gray-600">Receba seu pedido em até 30 minutos.</p>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
          <Image src="/mapIcon.png" alt="Entrega Rápida" width={100} height={100} className="mx-auto mb-4 mt-5" />
          <p className="text-gray-600">Receba seu pedido em até 30 minutos.</p>
        </div>
        <div className="flex flex-col bg-white p-4 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
          <Image src="/safeIcon.png" alt="Entrega Rápida" width={80} height={100} className="mx-auto mb-4 mt-5" />
          <p className="text-gray-600">Receba seu pedido em até 30 minutos.</p>
        </div>
      </div>
    </section>
  );
}
