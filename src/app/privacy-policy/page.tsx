
const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground p-8 max-w-4xl mx-auto my-12 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
      <p className="mb-4">
        En CILCA, valoramos tu privacidad. Esta Política de
        Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu
        información personal cuando visitas o utilizas nuestros servicios.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Información que recopilamos</h2>
      <p className="mb-4">
        Podemos recopilar la siguiente información cuando utilizas nuestros
        servicios:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Información personal, como tu nombre, dirección de correo electrónico, y teléfono.</li>
        <li>Información sobre el dispositivo, incluyendo la dirección IP, tipo de navegador, etc.</li>
        <li>Información sobre el uso de nuestros servicios.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Uso de la información</h2>
      <p className="mb-4">Utilizamos tu información para los siguientes propósitos:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Proporcionar, operar y mejorar nuestros servicios.</li>
        <li>Comunicarnos contigo para responder a tus consultas o enviarte información importante.</li>
        <li>Personalizar tu experiencia en nuestro sitio.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Compartir información</h2>
      <p className="mb-4">
        No compartimos tu información personal con terceros, excepto en los siguientes casos:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Cuando sea necesario para cumplir con la ley.</li>
        <li>Cuando nos des tu consentimiento explícito.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Seguridad de la información</h2>
      <p className="mb-4">
        Nos comprometemos a proteger tu información personal implementando
        medidas de seguridad razonables para evitar accesos no autorizados o
        divulgaciones.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Cambios a esta Política</h2>
      <p className="mb-4">
        Podemos actualizar esta Política de Privacidad en cualquier momento. Te
        notificaremos de cualquier cambio publicando la nueva política en este
        sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contacto</h2>
      <p className="mb-4">
        Si tienes alguna pregunta sobre esta Política de Privacidad, puedes
        contactarnos en: [correo electrónico o información de contacto].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
