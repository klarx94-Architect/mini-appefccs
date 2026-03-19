import React, { useState, useEffect } from 'react';
import DeviceFrame from './components/DeviceFrame';
import TopNav from './components/TopNav';
import WhatsAppView from './components/WhatsAppView';
import SocialView from './components/SocialView';
import GoogleView from './components/GoogleView';
import './styles/globals.css';

function App() {
  const [activeTab, setActiveTab] = useState('whatsapp');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'whatsapp': return <WhatsAppView />;
      case 'instagram': return <SocialView type="instagram" />;
      case 'tiktok': return <SocialView type="tiktok" />;
      case 'google': return <GoogleView />;
      default: return <WhatsAppView />;
    }
  };

  return (
    <div className="app-container">
      <DeviceFrame isMobileView={isMobile}>
        {/* FLUID LAYOUT: No fixed viewport or scales. Fills available space. */}
        <div className="main-layout">
          <TopNav activeTab={activeTab} onTabChange={setActiveTab} isMobile={isMobile} />
          <div className="app-body">
            {renderContent()}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

export default App;
