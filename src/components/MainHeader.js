import React from 'react';
//image
const MainHeader = ({ onNavigate }) => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Roja Directa</h1>
        <nav>
          <button
            onClick={() => onNavigate('home')}
            className="text-white text-lg font-semibold hover:text-gray-200 transition-colors mx-4"
          >
            Inicio
          </button>
          <button
            onClick={() => onNavigate('courts')}
            className="text-white text-lg font-semibold hover:text-gray-200 transition-colors mx-4"
          >
            Canchas
          </button>
          <button
            onClick={() => onNavigate('reservations')}
            className="text-white text-lg font-semibold hover:text-gray-200 transition-colors mx-4"
          >
            Mis Reservas
          </button>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
