import React from 'react';

const Objectives = () => {
  return (
    <section id="objetivo" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestros Objetivos</h2>
        
        <div className="mb-16" id="objetivo-general">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Objetivo General</h3>
          <p className="text-gray-700 leading-relaxed">
            Proporcionar servicios de testing de software de alta calidad que garanticen el correcto funcionamiento de las aplicaciones, 
            mejorando la experiencia del usuario final y reduciendo los costos asociados a fallos en producción.
          </p>
        </div>
        
        <div id="objetivos-especificos">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Objetivos Específicos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-3 text-blue-800">Detección Temprana</h4>
              <p className="text-gray-700">
                Identificar y reportar defectos en etapas tempranas del desarrollo para reducir costos de corrección.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-3 text-blue-800">Automatización</h4>
              <p className="text-gray-700">
                Implementar procesos de automatización de pruebas para aumentar eficiencia y cobertura.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-3 text-blue-800">Calidad Integral</h4>
              <p className="text-gray-700">
                Asegurar la calidad no solo funcional sino también de rendimiento, seguridad y usabilidad.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-medium mb-3 text-blue-800">Metodologías Ágiles</h4>
              <p className="text-gray-700">
                Integrar testing continuo en procesos ágiles para entrega rápida y constante de valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;