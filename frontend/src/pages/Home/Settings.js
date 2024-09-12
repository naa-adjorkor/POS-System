import React, { useState } from 'react';

export const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Light');

  const handleNotificationChange = () => setNotifications(!notifications);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleThemeChange = (e) => setTheme(e.target.value);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        {/* Account Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full border-gray-300 rounded-lg p-2" 
                placeholder="johndoe@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full border-gray-300 rounded-lg p-2" 
                placeholder="••••••••"
              />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Save Changes</button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="notifications" 
                checked={notifications}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              <label htmlFor="notifications" className="text-gray-700">Enable Notifications</label>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Save Settings</button>
          </div>
        </div>

        {/* General Settings */}
        <div>
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Language</label>
              <select 
                value={language} 
                onChange={handleLanguageChange} 
                className="w-full border-gray-300 rounded-lg p-2"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Theme</label>
              <select 
                value={theme} 
                onChange={handleThemeChange} 
                className="w-full border-gray-300 rounded-lg p-2"
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Apply Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
