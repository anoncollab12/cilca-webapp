// CilcaInfo.tsx
import React from "react";
import Image from "next/image";
import "../../styles/cilcainfo.css";

const CilcaInfo = () => {
  return (
    <div className="cilca-info">
      {/* Primera Sección */}
      <div className="section">
        <h1 className="title">CILCA</h1>
        <h2 className="subtitle">HOLISTIC PROGRAM</h2>
        <div className="purple-box">
          <p>
            <strong>
              Nuestra misión es contribuir al desarrollo integral y sostenible
              de la sociedad y para conseguir este cambio, debemos comenzar en
              nuestro interior.
            </strong>{" "}
            CILCA Holistic Program es un conjunto de cursos, talleres y
            herramientas que pueden ser la clave para lograr impulsar el
            rendimiento escolar y la productividad de las empresas. Partiendo de
            potencializar el talento, capacidades y habilidades de cada persona.
          </p>
        </div>
        <Image
          src="/assets/meditacion_inicio.jpg"
          alt="Personas meditando"
          className="full-width-image"
          width={1200}
          height={500}
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      {/* Segunda Sección */}
      <div className="section">
        <h2 className="section-title">EL ESTRÉS EN NUESTRO DÍA A DÍA</h2>
        <p className="section-text">
          <strong>México es el primer lugar a nivel mundial en estrés.</strong>{" "}
          Representa un grave problema a nivel social y económico, ya que
          perjudica la salud y el rendimiento escolar y disminuye la
          productividad de las empresas.
        </p>
        <div className="purple-box">
          <h3 className="yellow-header">
            CONSECUENCIAS DE ESTRÉS EN NUESTRO LUGAR DE TRABAJO
          </h3>
          <ul className="bullet-list">
            <li>
              Se generan sinergias negativas (deterioro de las relaciones
              laborales).
            </li>
            <li>Aumento del absentismo.</li>
            <li>Incremento de accidentes laborales.</li>
            <li>Mayor número de bajas por enfermedad.</li>
            <li>Bajo rendimiento por empleado.</li>
            <li>Menor productividad.</li>
            <li>
              Aumento de quejas por parte de los clientes teniendo menor nivel
              de satisfacción.
            </li>
          </ul>
        </div>
        <div className="purple-box">
          <h3 className="yellow-header">
            CONSECUENCIAS PSÍQUICAS E INDIVIDUALES
          </h3>
          <div className="two-column-list">
            <ul className="bullet-list">
              <li>Deterioro cognitivo.</li>
              <li>Dificultad para concentrarse.</li>
              <li>Ansiedad y/o depresión.</li>
              <li>Dificultad para tomar decisiones.</li>
              <li>Insomnio.</li>
            </ul>
            <ul className="bullet-list">
              <li>Bajo rendimiento escolar.</li>
              <li>Trastornos de tipo afectivo.</li>
              <li>
                Desórdenes mentales como esquizofrenia o trastornos
                obsesivo-compulsivos.
              </li>
              <li>Adicciones.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tercera Sección */}
      <div className="section">
        <h2 className="section-title">CILCA UN PROGRAMA HOLÍSTICO</h2>
        <p className="section-text">
          <strong>
            CILCA es un programa holístico que está enfocado en desarrollar y
            maximizar el potencial de la persona.
          </strong>{" "}
          Buscando que a través de este programa puedas desarrollar la mejor
          versión de ti mismo.
        </p>
        <div className="icon-grid">
          {[
            "HABILIDADES ARTÍSTICAS",
            "SALUD FÍSICA",
            "MEDITACIÓN",
            "TÉCNICAS DE RELAJACIÓN",
            "INTELIGENCIA EMOCIONAL",
            "YOGA",
            "EMPRENDER",
            "LIDERAZGO",
            "TÉCNICAS AUTODEFENSA",
            "PENSAMIENTO CIENTÍFICO",
          ].map((item, index) => (
            <div key={index} className="icon-box-wrapper">
              <div
                className={`icon-box ${["purple", "blue", "green", "blue", "orange"][index % 5]}`}
              >
                <img
                  src="/assets/icon_lotus.png"
                  alt={item}
                  className="lotus-icon"
                />
              </div>
              <div className="icon-label">{item}</div>
            </div>
          ))}
        </div>
        <h3 className="benefits-title">ALGUNOS BENEFICIOS DEL PROGRAMA</h3>
        <div className="benefits-grid">
          {[
            "Autoconocimiento",
            "Autoestima",
            "Valores",
            "Plan de vida",
            "Creatividad",
            "Uso de los sentidos",
            "Concentración",
          ].map((benefit, index) => (
            <span
              key={index}
              className={`benefit-tag ${["purple", "blue", "purple", "blue", "purple", "blue", "orange"][index]}`}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CilcaInfo;
