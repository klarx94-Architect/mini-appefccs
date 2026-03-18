import React from 'react';
import styles from './TopNav.module.css';

import iconWA from '../assets/icons/icon_wa_official_1773875288095.png';
import iconIG from '../assets/icons/icon_ig_official_1773875300253.png';
import iconTK from '../assets/icons/icon_tk_official_1773875311453.png';
import iconG from '../assets/icons/icon_g_official_q_1773875325498.png';

const TopNav = ({ activeTab, onTabChange, isMobile }) => {
  const tabs = [
    { id: 'whatsapp', icon: iconWA, label: 'WhatsApp' },
    { id: 'instagram', icon: iconIG, label: 'Instagram' },
    { id: 'tiktok', icon: iconTK, label: 'TikTok' },
    { id: 'google', icon: iconG, label: 'Google' },
  ];

  return (
    <div className={`${styles.navContainer} ${isMobile ? styles.mobileNav : ''}`}>
      <div className={styles.navBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.navItem} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => onTabChange(tab.id)}
            title={tab.label}
          >
            <img src={tab.icon} alt={tab.label} className={styles.iconImg} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
