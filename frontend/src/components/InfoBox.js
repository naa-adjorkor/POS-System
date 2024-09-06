import React, {useEffect, useState} from 'react'

export const InfoBox =  ({ message, onClose }) => {
  const [timer, setTimer] = useState(5); // 5 seconds for the timer

  useEffect(() => {
    if (timer <= 0) {
      onClose();
      return;
    }
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, onClose]);

  return (
    <div className={`fixed right-0 top-4 w-80 bg-white border border-gray-200 shadow-lg rounded-lg transform transition-transform duration-500 ${timer <= 0 ? 'translate-x-full' : 'translate-x-0'}`}>
      <div className="p-4 relative">
        <p className="text-lg font-semibold text-green-600">{message}</p>
        <div className="absolute bottom-0 left-0 w-full bg-green-500 h-2" style={{ width: `${(timer / 5) * 100}%` }}></div>
      </div>
    </div>
  );
};


