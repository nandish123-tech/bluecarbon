// src/BlueCarbon.jsx
import React, { useState } from 'react';
import { Bot } from 'lucide-react';

// Import your new view components
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import ProjectDetailView from './views/ProjectDetailView';
import QRTrackerView from './views/QRTrackerView';
import UploadView from './views/UploadView';
import AdminView from './views/AdminView';
// ... and CaraChat if you also move it to its own file

const BlueCarbon = () => {
  // All your useState, project data, and helper functions remain here
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCara, setShowCara] = useState(false);
  // ... and so on

  const projects = [ /* ... your project data array ... */ ];
  
  const getRiskColor = (score) => { /* ... */ };
  const getRiskBg = (score) => { /* ... */ };

  // Your renderView function now uses the imported components
  const renderView = () => {
    switch (currentView) {
      case 'projects':
        return <ProjectsView 
                  projects={projects} 
                  getRiskBg={getRiskBg} 
                  getRiskColor={getRiskColor} 
                  setCurrentView={setCurrentView} 
                  setSelectedProject={setSelectedProject} 
                />;
      case 'project-detail':
        return <ProjectDetailView 
                  selectedProject={selectedProject} 
                  setCurrentView={setCurrentView} 
                  getRiskColor={getRiskColor}
                />;
      // ... other cases for other views
      default:
        return <HomeView 
                  setCurrentView={setCurrentView} 
                  credits={150} // Example, pass the actual state
                  notifications={[]} // Example, pass the actual state
                />;
    }
  };

  return (
    <div className="relative">
      {renderView()}
      
      {/* Cara AI Assistant Button and Chat component */}
      <button onClick={() => setShowCara(!showCara)} /* ... */ >
        <Bot className="w-6 h-6 text-white" />
      </button>
      {/* <CaraChat /> */}
    </div>
  );
};

export default BlueCarbon;
