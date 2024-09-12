import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBox, FaWarehouse, FaTruck, FaShoppingCart, FaUsers, FaChartBar, FaCog, FaUserCircle } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-500 h-screen fixed top-0 left-0 px-4 py-6 text-white">
      <ul className="space-y-3 mt-8">
        {/* Dashboard */}
        <li>
          <NavLink
            to="/home/dashboard"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaHome className="mr-3" /> Dashboard
          </NavLink>
        </li>

        {/* Products */}
        <li>
          <NavLink
            to="/home/products"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaBox className="mr-3" /> Products
          </NavLink>
        </li>

        {/* Inventory */}
        <li>
          <NavLink
            to="/home/inventory"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaWarehouse className="mr-3" /> Inventory
          </NavLink>
        </li>

        {/* Suppliers */}
        <li>
          <NavLink
            to="/home/suppliers"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaTruck className="mr-3" /> Suppliers
          </NavLink>
        </li>

        {/* Purchases */}
        <li>
          <NavLink
            to="/home/purchases"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaShoppingCart className="mr-3" /> Purchases
          </NavLink>
        </li>

        {/* Customers */}
        <li>
          <NavLink
            to="/home/customers"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaUsers className="mr-3" /> Customers
          </NavLink>
        </li>

        {/* Reports */}
        <li>
          <NavLink
            to="/home/reports"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaChartBar className="mr-3" /> Reports
          </NavLink>
        </li>

        {/* Settings */}
        <li>
          <NavLink
            to="/home/settings"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaCog className="mr-3" /> Settings
          </NavLink>
        </li>

        {/* User Profile */}
        <li>
          <NavLink
            to="/home/profile"
            className={({ isActive }) =>
              `flex items-center py-3 px-4  ${isActive ? 'bg-blue-700 border-l-2 border-white' : 'hover:bg-blue-600'}`
            }
          >
            <FaUserCircle className="mr-3" /> Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
