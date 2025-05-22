import React from 'react';

const MissionVision = () => {
  return (
    <section id="mision-vision" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Misión y Visión</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img src="https://phimc.org/wp-content/uploads/2016/09/about-mission-icon.png" alt="Misión" className="h-16 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-700">Misión</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Ser el aliado estratégico de nuestros clientes en el aseguramiento de la calidad de software, 
              mediante soluciones innovadoras y un equipo altamente calificado, contribuyendo al éxito de sus 
              proyectos tecnológicos y a la satisfacción de sus usuarios finales.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img src="https://cdn-icons-png.flaticon.com/512/301/301687.png" alt="Visión" className="h-16 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-700">Visión</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Para 2025, ser reconocidos como la empresa líder en servicios de testing de software en México, 
              destacando por nuestra excelencia técnica, innovación constante y contribución al ecosistema tecnológico 
              nacional, con presencia en los principales sectores productivos del país.
            </p>
          </div>
        </div>
        
        <div id="breve" className="mt-16 bg-blue-800 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Breve Historia</h3>
          <p className="leading-relaxed">
            Fundada en 2018 en Guadalajara, Jalisco, QATESTER nació de la pasión por la calidad en el desarrollo de software. 
            Lo que comenzó como un pequeño equipo de 3 especialistas hoy es una empresa con más de 50 colaboradores y presencia 
            en 5 estados de la República Mexicana. Hemos participado en más de 200 proyectos para empresas de diversos sectores, 
            siempre comprometidos con entregar resultados excepcionales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;