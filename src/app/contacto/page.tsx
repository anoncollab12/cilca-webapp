"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre no puede estar vacío.';
    if (!formData.email) {
      newErrors.email = 'El correo electrónico no puede estar vacío.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico introducido no es válido.';
    }
    if (!formData.message) newErrors.message = 'El mensaje no puede estar vacío.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí puedes manejar el envío del formulario
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Banner Section */}
      <div className="bg-purple-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Luz, Ciencia y Arte</h1>
          <p className="mb-4">
            Luz, Ciencia y Arte es una organización sin fines de lucro, formada
            con la finalidad de contribuir al desarrollo integral y sostenible
            de la sociedad.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/luzcienciayarte"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-4 py-2 rounded shadow hover:bg-gray-100"
            >
              Visita nuestro Facebook
            </a>
            <a
              href="https://www.youtube.com/@fundacionluzcienciayarte"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-4 py-2 rounded shadow hover:bg-gray-100"
            >
              Visita nuestro YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Contact and Map Section */}
      <div className="container mx-auto py-16 px-4 lg:flex lg:space-x-8">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Contáctanos
          </h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Tu nombre"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Tu correo electrónico"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Tu mensaje"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md shadow hover:bg-purple-700"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Nuestra Ubicación
          </h2>
          <div className="bg-white p-6 rounded-lg shadow dark:bg-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.643456789!2d-99.133208484682!3d19.432607986886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sCentro%20Hist%C3%B3rico%2C%20Centro%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Correo: contacto@luzcienciayarte.org
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Teléfono: 55 1392 2649
          </p>
        </div>
      </div>
    </div>
  );
}