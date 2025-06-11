import React, { useState } from 'react';

const PaymentModal = ({ reservationDetails, onClose, onConfirmPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('mercadopago');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'mercadopago') {
      alert(`Pago de $${reservationDetails.totalPrice} con MercadoPago. ¡Pago exitoso!`);
      onConfirmPayment(reservationDetails);
    } else if (paymentMethod === 'tarjeta') {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        alert('Por favor, completa todos los datos de la tarjeta.');
        return;
      }
      alert(`Pago de $${reservationDetails.totalPrice} con Tarjeta. ¡Pago exitoso!`);
      onConfirmPayment(reservationDetails);
    } else {
      alert(`Pago de $${reservationDetails.totalPrice} con ${paymentMethod}. ¡Pago exitoso!`);
      onConfirmPayment(reservationDetails);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all scale-100 opacity-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Confirmar Reserva y Pago</h2>

        <div className="mb-6">
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Cancha:</span> {reservationDetails.court.name}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Fecha:</span> {reservationDetails.date}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Hora:</span> {reservationDetails.time}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            <span className="font-semibold">Duración:</span> {reservationDetails.duration} hora(s)
          </p>
          <p className="text-gray-900 text-2xl font-bold mt-4">
            Total a pagar: ${reservationDetails.totalPrice}
          </p>
        </div>

        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">
            Método de Pago:
          </label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          >
            <option value="mercadopago">MercadoPago</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {paymentMethod === 'tarjeta' && (
          <div className="mb-6 space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                Número de Tarjeta:
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            <div>
              <label htmlFor="cardName" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre en la Tarjeta:
              </label>
              <input
                type="text"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                placeholder="Nombre Apellido"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">
                  Fecha de Vencimiento:
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  placeholder="MM/AA"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  placeholder="XXX"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors shadow-md"
          >
            Cancelar
          </button>
          <button
            onClick={handlePayment}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;