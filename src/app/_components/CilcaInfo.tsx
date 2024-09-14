import React from 'react';

const CilcaInfo = () => {
  return (
    <div className="hero-container">
        {/* Sección 1: Misión */}
        <section className="bg-purple-700 text-white py-8">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">CILCA HOLISTIC PROGRAM</h1>
            <p className="mt-4">
                Nuestra misión es contribuir al desarrollo integral y sostenible de la sociedad y para conseguir este cambio, debemos comenzar en nuestro interior.
            </p>
            <p className="mt-2">
                CILCA Holisitic Program es un conjunto de cursos, talleres y herramientas que pueden ser la clave para lograr impulsar el rendimiento escolar y la productividad de las empresas. Partiendo de potencializar el talento, capacidades y habilidades de cada persona.
            </p>
            </div>
        </section>

        <img 
        src="https://compartirenfamilia.com/wp-content/uploads/2023/09/GettyImages-1215789559-scaled.jpg" 
        alt="Familia feliz meditando" 
        style={{ maxWidth: '800px', height: 'auto', display: 'block', margin: '0 auto' }} 
        />

        {/* Sección 2: Estrés en nuestro día a día */}
        <section className="bg-gray-100 text-center py-8">
            <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-purple-700">EL ESTRÉS EN NUESTRO DÍA A DÍA</h2>
            <p className="mt-4">
                México es el primer lugar a nivel mundial en estrés. Representa un grave problema a nivel social y económico, ya que perjudica la salud y el rendimiento escolar y disminuye la productividad de las empresas.
            </p>
            </div>
        </section>

        {/* Sección 3: Consecuencias del estrés */}
        <section className="py-8 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-700 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold">CONSECUENCIAS DE ESTRÉS EN NUESTRO LUGAR DE TRABAJO</h3>
                <ul className="list-disc mt-4 ml-6">
                <li>Se generan sinergias negativas (deterioro de las relaciones laborales).</li>
                <li>Aumento del absentismo.</li>
                <li>Incremento de accidentes laborales.</li>
                <li>Mayor número de bajas por enfermedad.</li>
                <li>Bajo rendimiento por empleado.</li>
                <li>Menor productividad.</li>
                <li>Aumento de quejas por parte de los clientes teniendo menor nivel de satisfacción.</li>
                </ul>
            </div>

            <div className="bg-yellow-500 text-black p-6 rounded-lg">
                <h3 className="text-xl font-bold">CONSECUENCIAS PSÍQUICAS E INDIVIDUALES</h3>
                <ul className="list-disc mt-4 ml-6">
                <li>Deterioro cognitivo.</li>
                <li>Dificultad para concentrarse.</li>
                <li>Ansiedad y/o depresión.</li>
                <li>Dificultad para tomar decisiones.</li>
                <li>Insomnio.</li>
                <li>Bajo rendimiento escolar.</li>
                <li>Trastornos de tipo afectivo.</li>
                <li>Desórdenes mentales como esquizofrenia o trastornos obsesivo-compulsivos.</li>
                <li>Adicciones.</li>
                </ul>
            </div>
            </div>
        </section>

        {/* Sección 4: Programa Holístico */}
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-purple-700">CILCA: UN PROGRAMA HOLÍSTICO</h2>
            <p className="mt-4">
                CILCA es un programa holístico que está enfocado en desarrollar y maximizar el potencial de la persona. Buscando que a través de este programa puedas desarrollar la mejor versión de ti mismo.
            </p>

            {/* Cards del programa */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-purple-600 text-white p-4 rounded-lg">Habilidades Artísticas</div>
                <div className="bg-green-600 text-white p-4 rounded-lg">Salud Física</div>
                <div className="bg-orange-500 text-white p-4 rounded-lg">Meditación</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Técnicas de Relajación</div>
                <div className="bg-green-600 text-white p-4 rounded-lg">Inteligencia Emocional</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Yoga</div>
                <div className="bg-orange-500 text-white p-4 rounded-lg">Emprender</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Liderazgo</div>
            </div>
            </div>
        </section>

        {/* Sección 5: Beneficios del programa */}
        <section className="bg-white py-8">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-purple-700">ALGUNOS BENEFICIOS DEL PROGRAMA</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-blue-600 text-white p-4 rounded-lg">Autoconocimiento</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Autoestima</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Valores</div>
                <div className="bg-blue-600 text-white p-4 rounded-lg">Concentración</div>
                <div className="bg-purple-600 text-white p-4 rounded-lg">Plan de vida</div>
                <div className="bg-purple-600 text-white p-4 rounded-lg">Creatividad</div>
                <div className="bg-purple-600 text-white p-4 rounded-lg">Uso de los sentidos</div>
            </div>
            </div>
        </section>
        </div>
  );
};

export default CilcaInfo;
