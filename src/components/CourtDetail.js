import React, { useState, useEffect } from 'react';

const CourtDetail = ({ court, onBack, onReserve }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(1); // Duración en horas
  const [availableTimes, setAvailableTimes] = useState([]);

  const availableDates = Object.keys(court.availability);

  useEffect(() => {
    if (selectedDate && court.availability[selectedDate]) {
      setAvailableTimes(court.availability[selectedDate]);
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate, court.availability]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setSelectedDuration(parseInt(e.target.value));
  };

  const calculateTotalPrice = () => {
    return court.pricePerHour * selectedDuration;
  };

  const handleReserveClick = () => {
    if (selectedDate && selectedTime && selectedDuration) {
      onReserve(court, selectedDate, selectedTime, selectedDuration, calculateTotalPrice());
    } else {
      alert('Por favor, selecciona una fecha, hora y duración.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto my-8 border border-gray-200">
      <button
        onClick={onBack}
        className="text-red-600 hover:text-red-800 transition-colors mb-6 flex items-center font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Volver a Canchas
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img src={court.imageUrl} alt={court.name} className="w-full h-80 object-cover rounded-xl shadow-lg" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-lg font-semibold">
            ${court.pricePerHour} / hora
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{court.name}</h2>
          <p className="text-gray-700 text-lg mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {court.address}
          </p>
          <p className="text-gray-800 text-base mb-6 leading-relaxed">{court.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                Fecha:
              </label>
              <select
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              >
                <option value="">Selecciona</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                Hora:
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={handleTimeChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                disabled={!selectedDate || availableTimes.length === 0}
              >
                <option value="">Selecciona</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
                Duración (horas):
              </label>
              <select
                id="duration"
                value={selectedDuration}
                onChange={handleDurationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              >
                <option value={1}>1 hora</option>
                <option value={2}>2 horas</option>
                <option value={3}>3 horas</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
            <span className="text-gray-800 font-bold text-3xl">Total: <span className="text-red-600">${calculateTotalPrice()}</span></span>
            <button
              onClick={handleReserveClick}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg text-xl font-semibold transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourtDetail;