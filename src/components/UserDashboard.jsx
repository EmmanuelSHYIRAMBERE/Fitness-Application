import React, { useState } from "react";

const UserDashboard = () => {
  // Mock data for user's booked events
  const [bookedEvents, setBookedEvents] = useState([
    { id: 1, title: "Music Concert", date: "2024-05-15", location: "City Hall" },
    { id: 2, title: "Art Exhibition", date: "2024-06-10", location: "Art Gallery" },
  ]);

  const handleCancelBooking = (eventId) => {
    // Simulated logic to cancel booking (remove event from bookedEvents)
    const updatedBookedEvents = bookedEvents.filter((event) => event.id !== eventId);
    setBookedEvents(updatedBookedEvents);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Booked Events</h1>
      {bookedEvents.length === 0 ? (
        <p>You have no booked events.</p>
      ) : (
        <ul className="space-y-4">
          {bookedEvents.map((event) => (
            <li key={event.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-gray-600">Date: {event.date}</p>
                <p className="text-gray-600">Location: {event.location}</p>
              </div>
              <button
                onClick={() => handleCancelBooking(event.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserDashboard;
