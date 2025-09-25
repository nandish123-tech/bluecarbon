// src/views/HomeView.jsx
import React from 'react';
import { Leaf, TrendingUp, Globe, Wallet, MapPin, QrCode, Upload, Shield } from 'lucide-react';

const HomeView = ({ setCurrentView, credits, notifications }) => {
  // The entire HomeView function code goes here...
  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      {/* ...pasting the full JSX from your original HomeView */}
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => setCurrentView('projects')} /* ... */ >
          <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-center">Choose Sites</p>
        </button>
        {/* ... other buttons */}
      </div>
    </div>
  );
};

export default HomeView;
