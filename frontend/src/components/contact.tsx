import { Mail, MessageCircle } from "lucide-react";

export default function ContactComponent() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
        <p className="text-gray-600 text-lg mb-8">
          Estamos disponíveis para tirar dúvidas, receber sugestões ou ajudar com seu pedido.
        </p>

        <div className="flex flex-col gap-4 items-center">
          {/* Botão WhatsApp */}
          <a
            href="https://wa.me/353896017762?text=Olá,%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Fale conosco pelo WhatsApp
          </a>

          {/* Botão E-mail */}
          <a
            href="mailto:Grandexpressdelivery@gmail.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20mais%20informações."
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <Mail className="w-5 h-5" />
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
