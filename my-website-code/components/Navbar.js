import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-300 bg-navy-blue/90 backdrop-blur-sm shadow-lg">
      <Link href="/" className="text-2xl font-bold text-white">SecureMesh</Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#" className="text-white hover:text-amber-gold transition">Products</Link>
        <Link href="#" className="text-white hover:text-amber-gold transition">Gallery</Link>
        <Link href="#" className="text-white hover:text-amber-gold transition">Why Us</Link>
      </nav>
      <Link href="#">
        <button className="bg-amber-gold text-navy-blue font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:scale-105">
          Get a Free Quote
        </button>
      </Link>
    </header>
  );
}