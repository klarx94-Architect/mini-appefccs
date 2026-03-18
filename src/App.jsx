import React, { useState } from 'react';
import DeviceFrame from './components/DeviceFrame';
import TopNav from './components/TopNav';
import WhatsAppView from './components/WhatsAppView';
import SocialView from './components/SocialView';
import GoogleView from './components/GoogleView';
import './styles/globals.css';

function App() {
  const [activeTab, setActiveTab] = useState('whatsapp');

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
    <DeviceFrame>
      <TopNav activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </DeviceFrame>
  );
}

export default App;
