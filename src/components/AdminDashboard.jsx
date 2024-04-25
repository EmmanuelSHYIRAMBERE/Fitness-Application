import React, { useState } from "react";

const AdminDashboard = () => {
  // Mock data for events and bookings
  const [events, setEvents] = useState([
    { id: 1, title: "Music Concert", date: "2024-05-15", location: "City Hall" },
    { id: 2, title: "Art Exhibition", date: "2024-06-10", location: "Art Gallery" },
  ]);

  const [bookings, setBookings] = useState([
    { id: 1, eventId: 1, eventName: "Music Concert", user: "John Doe" },
    { id: 2, eventId: 2, eventName: "Art Exhibition", user: "Jane Smith" },
  ]);

  const handleDeleteEvent = (eventId) => {
    // Simulated logic to delete event (remove event from events)
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);

    // Simulated logic to delete associated bookings (remove bookings related to the event)
    const updatedBookings = bookings.filter((booking) => booking.eventId !== eventId);
    setBookings(updatedBookings);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-xl font-bold mb-2">Manage Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-gray-600">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
            </div>
            <button
              onClick={() => handleDeleteEvent(event.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete Event
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2">Manage Bookings</h2>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking.id} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold">{booking.eventName}</h3>
            <p className="text-gray-600">Booked by: {booking.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
