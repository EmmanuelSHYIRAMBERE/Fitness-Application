import { useState, useEffect } from "react";

const EventList = () => {
  // Mock data for events (replace with actual data from API or backend)
  const [events, setEvents] = useState([
    { id: 1, title: "Music Concert", date: "2024-05-15", location: "City Hall" },
    { id: 2, title: "Art Exhibition", date: "2024-06-10", location: "Art Gallery" },
    { id: 3, title: "Food Festival", date: "2024-07-20", location: "Park" },
  ]);

  // Fetch events from API (simulated with useEffect)
  useEffect(() => {
    // Simulated API call or backend fetch
    // Replace this with actual fetch logic
    const fetchEvents = async () => {
      try {
        // Your fetch logic here
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        // setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="text-gray-600">Date: {event.date}</p>
            <p className="text-gray-600">Location: {event.location}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Book Tickets
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
