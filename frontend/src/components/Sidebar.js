import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="w-60 bg-blue-500 h-screen fixed top-0 left-0 px-4 py-6 text-white">
      <ul className="space-y-3">
        <li>
          <NavLink
            to="/home/dashboard"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-blue-700' : 'hover:bg-blue-600'}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/products"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-blue-700' : 'hover:bg-blue-600'}`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/home/inventory"
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? 'bg-blue-700' : 'hover:bg-blue-600'}`
            }
          >
            Inventory
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
