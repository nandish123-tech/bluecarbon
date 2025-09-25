import React, { useState, useEffect } from 'react';
import { Camera, MapPin, QrCode, Leaf, Shield, Users, Bot, Star, AlertTriangle, CheckCircle, Upload, Calendar, TrendingUp, Globe, Wallet } from 'lucide-react';

const BlueCarbon = () => {
  const [currentView, setCurrentView] = useState('home');
  const [userType, setUserType] = useState('company');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCara, setShowCara] = useState(false);
  const [caraMessage, setCaraMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [credits, setCredits] = useState(150);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Site #A127 mangrove growth verified +25 credits", type: "success" },
    { id: 2, message: "Cyclone alert for Region B - Credits auto-transferred", type: "warning" }
  ]);

  const projects = [
    {
      id: 'A127',
      name: 'Sundarbans Mangrove Restoration',
      location: 'West Bengal Coast',
      riskScore: 2,
      progress: 78,
      credits: 45,
      coordinates: '21.9497° N, 88.1992° E',
      ecosystem: 'Mangrove',
      duration: '3 years',
      community: 'Gosaba Panchayat',
      lastUpdate: '2 days ago',
      images: ['🌱', '🌿', '🌳'],
      status: 'Active'
    },
    {
      id: 'B203',
      name: 'Seagrass Meadow Conservation',
      location: 'Tamil Nadu Coast',
      riskScore: 1,
      progress: 92,
      credits: 67,
      coordinates: '10.7905° N, 79.8378° E',
      ecosystem: 'Seagrass',
      duration: '2 years',
      community: 'Rameshwaram Fishers Collective',
      lastUpdate: '1 day ago',
      images: ['🌾', '🐟', '🌊'],
      status: 'Active'
    },
    {
      id: 'C089',
      name: 'Coastal Wetland Revival',
      location: 'Gujarat Coast',
      riskScore: 4,
      progress: 34,
      credits: 23,
      coordinates: '22.2587° N, 68.9631° E',
      ecosystem: 'Salt Marsh',
      duration: '4 years',
      community: 'Kutch Marine NGO',
      lastUpdate: '5 hours ago',
      images: ['🌱', '🦆', '💧'],
      status: 'High Risk'
    }
  ];

  const getRiskColor = (score) => {
    if (score <= 2) return 'text-green-600';
    if (score <= 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskBg = (score) => {
    if (score <= 2) return 'bg-green-100';
    if (score <= 3) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const handleCaraChat = (message) => {
    const responses = {
      'carbon credits': 'Carbon credits are digital tokens representing verified CO2 absorption by blue carbon ecosystems. Each credit = 1 ton CO2 equivalent.',
      'risk score': 'Risk scores (1-5) are calculated using historical cyclone data, soil stability, and local climate patterns. Lower scores mean safer investments.',
      'blockchain': 'All data is stored on Ethereum blockchain with GeoNFTs (ERC-721) ensuring tamper-proof records tied to exact GPS coordinates.',
      'mrv': 'MRV (Measurement, Reporting, Verification) uses IoT sensors, drones, and mobile uploads for real-time monitoring instead of annual audits.',
      'default': 'I can help with carbon credits, blockchain technology, risk assessment, MRV processes, and project selection. What would you like to know?'
    };
    
    const response = responses[message.toLowerCase()] || responses['default'];
    setChatHistory([...chatHistory, 
      { sender: 'user', message },
      { sender: 'cara', message: response }
    ]);
    setCaraMessage('');
  };

  const HomeView = () => (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">ReLeaf</h1>
            <p className="text-sm text-gray-600">Blue Carbon Registry</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <Leaf className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl text-white text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs">Total Credits</p>
            <p className="text-lg font-bold">{credits}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-xl text-white text-center">
            <Globe className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs">Active Sites</p>
            <p className="text-lg font-bold">3</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-xl text-white text-center">
            <Wallet className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs">ROI</p>
            <p className="text-lg font-bold">12%</p>
          </div>
        </div>

        <div className="space-y-2">
          {notifications.map(notif => (
            <div key={notif.id} className={`p-3 rounded-lg ${notif.type === 'success' ? 'bg-green-100 border-l-4 border-green-500' : 'bg-yellow-100 border-l-4 border-yellow-500'}`}>
              <p className="text-sm">{notif.message}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentView('projects')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-center">Choose Sites</p>
        </button>
        
        <button 
          onClick={() => setCurrentView('qr-tracker')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <QrCode className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-center">Track Progress</p>
        </button>
        
        <button 
          onClick={() => setCurrentView('upload')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Upload className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-center">Upload Data</p>
        </button>
        
        <button 
          onClick={() => setCurrentView('admin')}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Shield className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-center">NCCR Admin</p>
        </button>
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentView('home')} className="p-2 rounded-full bg-white shadow-md">
          ←
        </button>
        <h2 className="text-xl font-bold text-blue-800">Choose Your Site</h2>
        <div className="w-10"></div>
      </div>
      
      <div className="mb-4 p-4 bg-blue-100 rounded-xl">
        <p className="text-sm text-blue-800">💡 <strong>Smart Recommendation:</strong> Sites with risk score ≤2 are recommended for long-term investments</p>
      </div>

      <div className="space-y-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskBg(project.riskScore)} ${getRiskColor(project.riskScore)}`}>
                Risk: {project.riskScore}/5
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <p className="text-xs text-gray-500">Progress</p>
                <p className="font-bold text-green-600">{project.progress}%</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Credits</p>
                <p className="font-bold text-blue-600">{project.credits}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Ecosystem</p>
                <p className="font-bold text-purple-600">{project.ecosystem}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {project.images.map((img, idx) => (
                  <span key={idx} className="text-2xl">{img}</span>
                ))}
              </div>
              <button 
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentView('project-detail');
                }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetailView = () => (
    selectedProject && (
      <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentView('projects')} className="p-2 rounded-full bg-white shadow-md">
            ←
          </button>
          <h2 className="text-lg font-bold text-blue-800">Site Details</h2>
          <QrCode className="w-6 h-6 text-gray-600" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedProject.name}</h3>
            <p className="text-gray-600">{selectedProject.location}</p>
            <div className="flex justify-center space-x-2 mt-3">
              {selectedProject.images.map((img, idx) => (
                <span key={idx} className="text-3xl">{img}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Risk Score</p>
              <p className={`font-bold text-lg ${getRiskColor(selectedProject.riskScore)}`}>
                {selectedProject.riskScore}/5
              </p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Progress</p>
              <p className="font-bold text-lg text-green-600">{selectedProject.progress}%</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-bold text-gray-800">{selectedProject.duration}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Credits</p>
              <p className="font-bold text-blue-600">{selectedProject.credits}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">Coordinates: {selectedProject.coordinates}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">Community: {selectedProject.community}</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-600">Last Update: {selectedProject.lastUpdate}</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            🌱 Invest in This Site
          </button>
        </div>
      </div>
    )
  );

  const QRTrackerView = () => (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentView('home')} className="p-2 rounded-full bg-white shadow-md">
          ←
        </button>
        <h2 className="text-xl font-bold text-blue-800">Track Progress</h2>
        <div className="w-10"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 text-center">
        <div className="w-40 h-40 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-300">
          <div className="text-6xl">📱</div>
        </div>
        <h3 className="text-lg font-bold mb-2">Scan Your QR Code</h3>
        <p className="text-gray-600 text-sm mb-4">Point your camera at the QR code to track your restoration site in real-time</p>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium">
          <Camera className="w-5 h-5 inline mr-2" />
          Open Camera
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-bold text-gray-800 mb-4">Your Active Investments</h4>
        <div className="space-y-3">
          {projects.filter(p => p.status === 'Active').map(project => (
            <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">{project.name}</p>
                <p className="text-xs text-gray-500">Site ID: {project.id}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">{project.progress}%</p>
                <button className="text-xs text-blue-600 hover:underline">View QR</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const UploadView = () => (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentView('home')} className="p-2 rounded-full bg-white shadow-md">
          ←
        </button>
        <h2 className="text-xl font-bold text-blue-800">Upload Field Data</h2>
        <div className="w-10"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-bold mb-2">Community Data Upload</h3>
          <p className="text-gray-600 text-sm">Help verify restoration progress by uploading geo-tagged photos and measurements</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Site</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Select your project site...</option>
              {projects.map(p => (
                <option key={p.id} value={p.id}>{p.name} (ID: {p.id})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Take geo-tagged photos</p>
              <button className="mt-2 text-blue-600 text-sm hover:underline">Open Camera</button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Growth Measurements</label>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Height (cm)" className="p-3 border border-gray-300 rounded-lg" />
              <input type="text" placeholder="Width (cm)" className="p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
            <textarea 
              placeholder="Describe current condition, wildlife spotted, weather conditions..."
              className="w-full p-3 border border-gray-300 rounded-lg h-20 resize-none"
            ></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300">
            📤 Submit for Blockchain Verification
          </button>
        </div>
      </div>
    </div>
  );

  const AdminView = () => (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-br from-red-50 to-orange-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => setCurrentView('home')} className="p-2 rounded-full bg-white shadow-md">
          ←
        </button>
        <h2 className="text-xl font-bold text-red-800">NCCR Admin Panel</h2>
        <Shield className="w-6 h-6 text-red-600" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-lg text-center">
          <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-600">47</p>
          <p className="text-xs text-gray-600">Verified Sites</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg text-center">
          <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-yellow-600">12</p>
          <p className="text-xs text-gray-600">Pending Review</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <h4 className="font-bold text-gray-800 mb-4">Recent Submissions</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div>
              <p className="font-medium text-sm">Sundarbans Site A127</p>
              <p className="text-xs text-gray-500">Growth data + 15 photos</p>
            </div>
            <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">Approve</button>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div>
              <p className="font-medium text-sm">Gujarat Site C089</p>
              <p className="text-xs text-gray-500">Requires additional verification</p>
            </div>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded text-xs">Review</button>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div>
              <p className="font-medium text-sm">Tamil Nadu Site B203</p>
              <p className="text-xs text-gray-500">Auto-verified by IoT sensors</p>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Processed</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h4 className="font-bold text-gray-800 mb-4">Risk Alert System</h4>
        <div className="space-y-3">
          <div className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-medium text-red-800">🌀 Cyclone Warning</p>
            <p className="text-xs text-red-600">Gujarat coast - Auto-transfer initiated</p>
          </div>
          <div className="p-3 bg-orange-100 rounded-lg border-l-4 border-orange-500">
            <p className="text-sm font-medium text-orange-800">⚠️ Sea Level Rise</p>
            <p className="text-xs text-orange-600">Monitoring 3 sites in Odisha</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CaraChat = () => (
    <div className={`fixed bottom-20 right-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 ${showCara ? 'block' : 'hidden'}`}>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
              <Bot className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Cara AI Assistant</p>
              <p className="text-purple-100 text-xs">Ask me anything about blue carbon!</p>
            </div>
          </div>
          <button onClick={() => setShowCara(false)} className="text-white hover:text-purple-200">
            ✕
          </button>
        </div>
      </div>
      
      <div className="h-60 p-4 overflow-y-auto">
        {chatHistory.length === 0 && (
          <div className="text-center text-gray-500 text-sm mt-8">
            <Bot className="w-12 h-12 mx-auto mb-3 text-purple-400" />
            <p>Hi! I'm Cara, your AI assistant.</p>
            <p>Try asking me about:</p>
            <div className="mt-3 space-y-1 text-xs">
              <button onClick={() => handleCaraChat('carbon credits')} className="block w-full bg-purple-100 p-2 rounded text-purple-700 hover:bg-purple-200">
                💰 Carbon Credits
              </button>
              <button onClick={() => handleCaraChat('risk score')} className="block w-full bg-purple-100 p-2 rounded text-purple-700 hover:bg-purple-200">
                ⚠️ Risk Assessment
              </button>
              <button onClick={() => handleCaraChat('blockchain')} className="block w-full bg-purple-100 p-2 rounded text-purple-700 hover:bg-purple-200">
                🔗 Blockchain Technology
              </button>
            </div>
          </div>
        )}
        
        {chatHistory.map((chat, idx) => (
          <div key={idx} className={`mb-3 ${chat.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-2xl max-w-xs text-sm ${
              chat.sender === 'user' 
                ? 'bg-purple-500 text-white rounded-br-sm' 
                : 'bg-gray-100 text-gray-800 rounded-bl-sm'
            }`}>
              {chat.message}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={caraMessage}
            onChange={(e) => setCaraMessage(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg text-sm"
            onKeyPress={(e) => e.key === 'Enter' && caraMessage.trim() && handleCaraChat(caraMessage)}
          />
          <button
            onClick={() => caraMessage.trim() && handleCaraChat(caraMessage)}
            className="bg-purple-500 text-white px-4 py-2 rounded-r-lg hover:bg-purple-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case 'projects': return <ProjectsView />;
      case 'project-detail': return <ProjectDetailView />;
      case 'qr-tracker': return <QRTrackerView />;
      case 'upload': return <UploadView />;
      case 'admin': return <AdminView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="relative">
      {renderView()}
      
      {/* Cara AI Assistant Floating Button */}
      <button
        onClick={() => setShowCara(!showCara)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50"
      >
        <Bot className="w-6 h-6 text-white" />
      </button>

      <CaraChat />
    </div>
  );
};

export default BlueCarbon;
