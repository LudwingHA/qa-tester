import React from 'react';

const Policies = () => {
  return (
    <section id="politicas" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestras Políticas</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Calidad</h3>
            <p className="text-gray-700">
              Todos nuestros procesos están diseñados para garantizar la máxima calidad en los servicios entregados, 
              siguiendo estándares internacionales como ISTQB e ISO 25000.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Confidencialidad</h3>
            <p className="text-gray-700">
              Protegemos la información de nuestros clientes con estrictos protocolos de seguridad y acuerdos de confidencialidad.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Mejora Continua</h3>
            <p className="text-gray-700">
              Invertimos constantemente en capacitación y actualización tecnológica para mantenernos a la vanguardia en testing de software.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Ética Profesional</h3>
            <p className="text-gray-700">
              Actuamos con integridad, honestidad y transparencia en todas nuestras relaciones comerciales y laborales.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Sostenibilidad</h3>
            <p className="text-gray-700">
              Implementamos prácticas ecoamigables en nuestras operaciones y promovemos el teletrabajo para reducir nuestra huella de carbono.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Diversidad e Inclusión</h3>
            <p className="text-gray-700">
              Fomentamos un ambiente laboral diverso e inclusivo donde todas las personas tienen igualdad de oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;