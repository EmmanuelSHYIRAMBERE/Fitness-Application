import React from "react";

const Home = () => {
  // Static events data with images and addresses
  const eventsData = [
    {
      id: 1,
      title: "Event 1",
      description: "Description for Event 1",
      date: "2024-05-01",
      address: "123 Main St, City, State, Zip",
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description for Event 2",
      date: "2024-05-05",
      address: "456 Elm St, City, State, Zip",
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description for Event 3",
      date: "2024-05-10",
      address: "789 Oak St, City, State, Zip",
    },
  ];

  // Image URL for all events
  const imageUrl = "/assets/images.jpeg";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <div className="flex justify-center gap-4 overflow-x-auto">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white p-4 shadow rounded-lg flex flex-col items-center"
              style={{ minWidth: "250px" }}
            >
              <img
                src={imageUrl}
                alt={event.title}
                className="mb-4 rounded-lg"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-500 mb-2">{event.description}</p>
              <p className="text-sm text-gray-400 mb-2">{event.date}</p>
              <p className="text-sm text-gray-400">{event.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">
          Discover Unforgettable Events with Company Events
        </h1>
        <p className="text-lg text-center mb-8">
          Your gateway to immersive experiences, unforgettable memories,
          and endless excitement awaits. Browse our curated collection
          of upcoming events and embark on your next adventure.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Browse events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
