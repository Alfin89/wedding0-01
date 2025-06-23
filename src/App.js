// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import OurStory from './sections/OurStory';
import WeddingEvents from './sections/WeddingEvents';
import Gallery from './sections/Gallery';
import GiftInfo from './sections/GiftInfo';
// import HealthProtocol from './sections/HealthProtocol'; // Jika Anda ingin section terpisah
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OurStory />
      <WeddingEvents />
      <Gallery />
      <GiftInfo />
      {/* <HealthProtocol /> */} {/* Aktifkan jika Anda membuat komponen ini */}
      <Footer />
    </div>
  );
}

export default App;