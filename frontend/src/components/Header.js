import React from 'react';

export const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-blue-500 text-white py-4 px-8">
      <div className="text-xl font-bold">Inventory System</div>
      <button onClick={toggleSidebar} className="md:hidden">
        <img 
          src="/path/to/menu-icon.png" 
          alt="Menu" 
          className="w-8 h-8"
        />
      </button>
    </header>
  );
};
