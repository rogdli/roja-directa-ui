import React from 'react';

const ReservationList = ({ reservations }) => {
  if (reservations.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-xl">Aún no tienes reservas. ¡Anímate a reservar una cancha!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {reservations.map((reservation, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{reservation.court.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{reservation.court.address}</p>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Fecha:</span> {reservation.date}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Hora:</span> {reservation.time}
            </p>
            <p className="text-gray-700 text-base mb-2">
              <span className="font-semibold">Precio por hora:</span> ${reservation.court.pricePerHour}
            </p>
            <p className="text-gray-900 text-xl font-bold mt-4">
              Total Pagado: ${reservation.totalPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;