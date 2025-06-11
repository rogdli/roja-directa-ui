import React from 'react';

const HeroSection = ({ onExploreClick }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://www.reciclajecontemar.es/wp-content/uploads/cuanto-cuesta-construir-una-cancha-de-futbol.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-8 rounded-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm shadow-2xl border border-white border-opacity-20">
        <h2 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Reserva tu cancha a un click de distancia
        </h2>
        <p className="text-2xl text-gray-200 mb-10 drop-shadow-md">
          Las mejores cancha de fútbol en línea de forma rápida y segura.
        </p>
        <button
          onClick={onExploreClick}
          className="bg-red-600 text-white px-12 py-5 rounded-full text-2xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-xl transform hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75"
        >
          Explorar Canchas
        </button>
      </div>
    </div>
  );
};

export default HeroSection;