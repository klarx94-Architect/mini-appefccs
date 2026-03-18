import React from 'react';
import styles from './DeviceFrame.module.css';

const DeviceFrame = ({ children, isMobileView }) => {
  if (isMobileView) {
    return <div className={styles.mobileEmbed}>{children}</div>;
  }

  return (
    <div className={styles.deviceContainer}>
      <div className={styles.bezel}>
        <div className={styles.notch}>
          <div className={styles.camera}></div>
          <div className={styles.speaker}></div>
        </div>
        <div className={styles.screen}>
          {children}
        </div>
        <div className={styles.homeIndicator}></div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default DeviceFrame;
