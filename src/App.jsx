import React from 'react';

import Hero from './components/Hero';
import Objectives from './components/Objectives';
import MissionVision from './components/MissionVision';
import Policies from './components/Policies';
import ContactForm from './components/ContactForm';
import ImageSlider from './components/ImageSlider';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="bg-gray-50">
    <Navbar></Navbar>
      <Hero />
      <Objectives />
      <MissionVision />
      <Policies />
      <ImageSlider />
      <ContactForm />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;