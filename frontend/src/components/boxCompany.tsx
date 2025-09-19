import Image from "next/image";

export default function BoxCompany() {
  return (
    <section className="mt-12 px-4">
      {/* TÍTULO CENTRALIZADO */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Corporate partners</h1>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Box 1 */}
        <a
          href="https://gourmetfuel.com/?srsltid=AfmBOoovnHLmxce8PRdcsscGZf5l77V41JeGKsyvHbB_zoYPuGGXejzT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md border-2 border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:text-orange-600 w-72">
            <Image alt="Gourmet Fuel Logo" src="/gf-logo.png" width={180} height={100} />
            <h3 className="text-2xl font-semibold mt-5 text-center">Gourmet Fuel</h3>
          </div>
        </a>

        {/* Box 2 */}
        <a
          href="https://hopelessbotanics.ie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md border-2 border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:text-orange-600 w-72">
            <Image alt="Hopeless Botanics Logo" src="/hopeless-logo.png" width={180} height={100} />
            <h3 className="text-2xl font-semibold mt-5 text-center">Hopeless Botanics</h3>
          </div>
        </a>

        {/* Box 3 */}
        <a
          href="https://abmbbq.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md border-2 border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:text-orange-600 w-72">
            <Image alt="ABM BBQ Logo" src="/abbq-logo.png" width={180}height={100} />
            <h3 className="text-2xl font-semibold mt-5 text-center">ABM BBQ</h3>
          </div>
        </a>

                <a
          href="https://www.instagram.com/eatupmeals_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md border-2 border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:text-orange-600 w-72">
            <Image alt="eatUp" src="/eatUpLogo.jpg" width={182}height={100} />
            <h3 className="text-2xl font-semibold mt-5 text-center">Eat Up</h3>
          </div>
        </a>
      </div>
    </section>
  );
}
