import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Expertos en Testing de Software</h1>
          <p className="text-xl mb-8">Garantizamos la calidad de tus aplicaciones con procesos de testing rigurosos y metodologías ágiles.</p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Contáctanos
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://msmk.university/wp-content/uploads/2025/01/qa-tester.png" 
            alt="Equipo de testing de software" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;