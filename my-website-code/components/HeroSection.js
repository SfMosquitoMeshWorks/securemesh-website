import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute z-10 w-full h-full bg-navy-blue opacity-60"></div>
      <div className="z-20 p-8">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
          Elegant Protection. Uncompromised Views.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Custom-engineered mosquito and security mesh solutions for modern homes.
        </p>
        <button className="bg-amber-gold text-navy-blue font-bold py-4 px-10 text-lg rounded-lg shadow-xl hover:bg-yellow-400 transition transform hover:scale-105">
          Get My Free, No-Obligation Quote
        </button>
      </div>
      {/* Background Image as a fallback */}
      <style jsx>{`
        section {
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </section>
  );
}