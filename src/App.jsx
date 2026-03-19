import React, { useState, useEffect, useRef } from 'react';
import DeviceFrame from './components/DeviceFrame';
import TopNav from './components/TopNav';
import WhatsAppView from './components/WhatsAppView';
import SocialView from './components/SocialView';
import GoogleView from './components/GoogleView';
import './styles/globals.css';

function App() {
  const [activeTab, setActiveTab] = useState('whatsapp');
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);

      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        
        // Virtual Viewport: 375 x 812 (iPhone Standard)
        const virtualWidth = 375;
        const virtualHeight = 812;

        const scaleX = parentWidth / virtualWidth;
        const scaleY = parentHeight / virtualHeight;
        
        // Use the smaller scale to fit perfectly
        const newScale = Math.min(scaleX, scaleY, 1.2); // Limit max scale for desktop
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        <div className="scaling-wrapper" style={{ transform: `scale(${isMobile ? 1 : scale})` }}>
          <div className="virtual-viewport" ref={containerRef}>
            <div className="main-layout">
              <TopNav activeTab={activeTab} onTabChange={setActiveTab} isMobile={isMobile} />
              <div className="app-body">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

export default App;
