// Avvalgi 1-qism importlari o'zgarishsiz qoldi
import { useState } from 'react';
import ShortenForm from '../components/ShortenForm';
import LinkHistory from '../components/LinkHistory';

const Home = () => {
  // Avvalgi 1-qism kodi o'zgarishsiz
  const [links, setLinks] = useState([]);

  return (
    <>
      {/* 1-qism komponentlari (Navbar, Hero) */}
      <Navbar />
      <Hero />
      
      {/* 2-qism komponentlari */}
      <div className="content-section">
        <ShortenForm 
          onShorten={(newLink) => setLinks([newLink, ...links])} 
        />
        <LinkHistory links={links} />
      </div>
    </>
  );
};