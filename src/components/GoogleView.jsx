import React from 'react';
import { Star, MapPin, Phone, Globe, Share2, Search, MoreHorizontal, ShoppingCart } from 'lucide-react';
import styles from './GoogleView.module.css';

import fridgeImg from '../assets/products/fridge.png';
import hoodImg from '../assets/products/hood.png';

const GoogleView = () => {
  return (
    <div className={`${styles.container} fade-in`}>
      <div className={styles.searchBar}>
        <Search size={16} color="#4285F4" />
        <span className={styles.searchText}>electrofoxccs</span>
      </div>

      <div className={styles.content}>
        <div className={styles.profileCard}>
          <h2 className={styles.title}>Electrofox - Líderes en Línea Blanca</h2>
          <div className={styles.ratingRow}>
            <span className={styles.ratingScore}>5.0</span>
            <div className={styles.stars}>
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />)}
            </div>
            <span className={styles.reviews}>(1.2k reseñas)</span>
          </div>
          <span className={styles.category}>Tienda de electrodomésticos en Caracas</span>
          
          <div className={styles.actionButtons}>
            <div className={styles.actionItem}><Phone size={20} color="#1A73E8" fill="#1A73E8" /><span>Llamar</span></div>
            <div className={styles.actionItem}><MapPin size={20} color="#1A73E8" /><span>Cómo llegar</span></div>
            <div className={styles.actionItem}><Globe size={20} color="#1A73E8" /><span>Sitio Web</span></div>
            <div className={styles.actionItem}><Share2 size={20} color="#1A73E8" /><span>Compartir</span></div>
          </div>
        </div>

        <div className={styles.shoppingSection}>
          <div className={styles.sectionHeader}>
            <h3>Productos de Electrofox</h3>
          </div>
          <div className={styles.shoppingGrid}>
            <div className={styles.shopItem}>
              <img src={fridgeImg} alt="product" />
              <span className={styles.shopPrice}>$1,299.99</span>
            </div>
            <div className={styles.shopItem}>
              <img src={hoodImg} alt="product" />
              <span className={styles.shopPrice}>$850.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleView;
