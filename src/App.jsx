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
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'whatsapp':
        return <WhatsAppView />;
      case 'instagram':
        return <SocialView type="instagram" />;
      case 'tiktok':
        return <SocialView type="tiktok" />;
      case 'google':
        return <GoogleView />;
      default:
        return <WhatsAppView />;
    }
  };

  return (
    <DeviceFrame isMobileView={isMobile}>
      <TopNav activeTab={activeTab} onTabChange={setActiveTab} isMobile={isMobile} />
      {renderContent()}
    </DeviceFrame>
  );
}

export default App;
