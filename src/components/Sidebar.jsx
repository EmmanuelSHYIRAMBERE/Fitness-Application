import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-full w-64 flex-shrink-0">
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/admin" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 rounded">
              Manage Events
            </Link>
          </li>
          <li>
            <Link to="/admin/bookings" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 rounded">
              Manage Bookings
            </Link>
          </li>
          <li>
            <Link to="/admin/create-event" className="block py-2 px-4 text-gray-700 hover:bg-gray-300 rounded">
              Create Event
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
