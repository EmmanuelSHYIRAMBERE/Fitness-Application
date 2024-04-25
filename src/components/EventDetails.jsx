import React from "react";

const EventDetails = () => {
  // Static data for event details
  const eventDetails = {
    id: 1,
    title: "Music Concert",
    date: "2024-05-15",
    location: "City Hall",
    description: "Join us for an unforgettable night of music and entertainment.",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{eventDetails.title}</h1>
      <p className="text-gray-600">Date: {eventDetails.date}</p>
      <p className="text-gray-600">Location: {eventDetails.location}</p>
      <p className="mt-4">{eventDetails.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Book Tickets
      </button>
    </div>
  );
};

export default EventDetails;
