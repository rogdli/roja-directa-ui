import React, { useState } from 'react';
import MainHeader from './components/MainHeader';
import HeroSection from './components/HeroSection';
import CourtCard from './components/CourtCard';
import CourtDetail from './components/CourtDetail';
import PaymentModal from './components/PaymentModal';
import ReservationList from './components/ReservationList';
import { courts } from './mock/courts';
import { createStorage } from './utils/storage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const [reservations, setReservations, getReservations] = createStorage('rojaDirectaReservations', []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedCourt(null);
    setShowPaymentModal(false);
  };

  const handleSelectCourt = (court) => {
    setSelectedCourt(court);
    setCurrentPage('courtDetail');
  };

  const handleReserve = (court, date, time, duration, totalPrice) => {
    setReservationDetails({ court, date, time, duration, totalPrice });
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = (details) => {
    const currentReservations = getReservations();
    const updatedReservations = [...currentReservations, details];
    setReservations(updatedReservations);
    setShowPaymentModal(false);
    alert('¡Reserva confirmada y pagada con éxito!');
    handleNavigate('reservations');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <MainHeader onNavigate={handleNavigate} />

      <main className="container mx-auto py-8 px-4">
        {currentPage === 'home' && (
          <HeroSection onExploreClick={() => handleNavigate('courts')} />
        )}

        {currentPage === 'courts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courts.map((court) => (
              <CourtCard key={court.id} court={court} onSelectCourt={handleSelectCourt} />
            ))}
          </div>
        )}

        {currentPage === 'courtDetail' && selectedCourt && (
          <CourtDetail
            court={selectedCourt}
            onBack={() => handleNavigate('courts')}
            onReserve={handleReserve}
          />
        )}

        {currentPage === 'reservations' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mis Reservas</h2>
            <ReservationList reservations={reservations} />
          </div>
        )}
      </main>

      {showPaymentModal && reservationDetails && (
        <PaymentModal
          reservationDetails={reservationDetails}
          onClose={() => setShowPaymentModal(false)}
          onConfirmPayment={handleConfirmPayment}
        />
      )}
    </div>
  );
};

export default App;

// DONE