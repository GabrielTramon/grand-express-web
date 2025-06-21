export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} GrandExpress. All rights reserved.</p>
        <div className="flex gap-6 mt-3 sm:mt-0 text-sm">
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
