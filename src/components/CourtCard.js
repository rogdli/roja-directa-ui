import React from 'react';

const CourtCard = ({ court, onSelectCourt }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer border border-gray-200 hover:border-red-500"
      onClick={() => onSelectCourt(court)}
    >
      <img src={court.imageUrl} alt={court.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{court.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{court.address}</p>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">{court.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-red-600 font-bold text-xl">${court.pricePerHour} / hora</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectCourt(court);
            }}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md text-base font-medium"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourtCard;