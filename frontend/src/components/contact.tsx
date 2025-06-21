import { Mail, MessageCircle } from "lucide-react";

export default function ContactComponent() {
  return (
    <section id="contact" className="w-full py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl text-center border-2 border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
        <p className="text-gray-600 text-lg mb-8">
          We're available to answer questions, receive suggestions, or help with your request.
        </p>

        <div className="flex flex-col gap-4 items-center">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/353896017762?text=Hello,%20I'd%20like%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:Grandexpressdelivery@gmail.com?subject=Contact%20via%20Website&body=Hello,%20I'd%20like%20more%20information."
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
  