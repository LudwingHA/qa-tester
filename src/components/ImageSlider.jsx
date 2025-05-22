import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://lh7-us.googleusercontent.com/oz6Zxf4x0xHMv435rh2NJAbaUBSzkYEhaJ7pOc8N8CrnecS7eAggvSILZgaXf6FF_giu4yMxDUr0fJdym2fVO2yscPPTpOyu9h9JP-pJ4NIau6Q_HavQ4qdbhOJ-WMsH04kcaU9jBkwP3u0RaoZUQ4w",
      title: "Equipo de Testing",
      description: "Nuestro equipo de especialistas trabajando en proyectos de alta complejidad"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXjTU1Pfp9PgHCijEd6J6jlg7-tatqJwL9A&s",
      title: "Automatización de Pruebas",
      description: "Implementamos frameworks de automatización para eficientizar tus procesos"
    },
    {
      image: "https://videocursos.co/wp-content/uploads/2023/10/tester-de-software.webp",
      title: "Capacitación Constante",
      description: "Mantenemos a nuestro equipo actualizado con las últimas tecnologías"
    },
    {
      image: "https://cdn.publish0x.com/prod/fs/images/a82799b80009accec369c5bbbfb019420b55df65d6bfa1d6a609295b85157c64.jpg",
      title: "Trabajo en Equipo",
      description: "Colaboración estrecha con los equipos de desarrollo de nuestros clientes"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestro Trabajo</h2>
        
        <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
                <p className="text-gray-200">{slide.description}</p>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;