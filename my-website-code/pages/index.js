import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Head>
        <title>SecureMesh - Premium Mosquito & Security Mesh Solutions</title>
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        {/* Other sections will be added here later */}
      </main>
    </div>
  );
}