import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Routes, Route } from 'react-router-dom';

// Import the route components
import { Dashboard } from './Dashboard';
import { Products } from './Products';
import { Inventory } from './Inventory';

export const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {isSidebarVisible && <Sidebar />}

      {/* Main layout */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarVisible ? 'ml-64' : 'ml-0'}`}>
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="*" element={<h1 className="text-2xl font-semibold text-gray-700">Welcome, Bernice</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
