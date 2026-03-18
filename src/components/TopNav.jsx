import React from 'react';
import { MessageCircle, Instagram, Globe, Music } from 'lucide-react';
import styles from './TopNav.module.css';

const TopNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'whatsapp', icon: <MessageCircle size={20} />, label: 'WA' },
    { id: 'instagram', icon: <Instagram size={20} />, label: 'IG' },
    { id: 'tiktok', icon: <Music size={20} />, label: 'TK' },
    { id: 'google', icon: <Globe size={20} />, label: 'G' },
  ];

  return (
    <div className={styles.navContainer}>
      <div className={styles.navBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.navItem} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
            title={tab.label}
          >
            {tab.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
