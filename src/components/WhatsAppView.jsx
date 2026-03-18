import React, { useState } from 'react';
import { Search, MoreVertical, Camera, MessageSquare, Phone, Store, ArrowLeft, ShoppingBag } from 'lucide-react';
import styles from './WhatsAppView.module.css';

import fridgeImg from '../assets/products/fridge.png';
import hoodImg from '../assets/products/hood.png';
import coffeeImg from '../assets/products/coffee.png';
import acImg from '../assets/products/ac.png';
import ovenImg from '../assets/products/oven.png';
import washerImg from '../assets/products/washer.png';
import logoImg from '../assets/logo_ef.png';

const WhatsAppView = () => {
  const [view, setView] = useState('chats');

  const chats = [
    { id: 1, name: 'María G.', message: '¡Hola! ¿Tienen la campana KitchenAid disponible?', time: '10:15 AM', unread: 1 },
    { id: 2, name: 'Carlos Pérez', message: 'Gracias por la asesoría, el refrigerador es increíble.', time: '9:30 AM', unread: 0 },
    { id: 3, name: 'Elena R.', message: '¿A qué hora entregan hoy?', time: 'Ayer', unread: 0 },
    { id: 4, name: 'Luis M.', message: 'Envíame el catálogo de aires acondicionados por favor.', time: 'Ayer', unread: 2 },
  ];

  const products = [
    { id: 1, name: 'Samsung French Door EF', price: '$1,299.99', img: fridgeImg },
    { id: 2, name: 'KitchenAid Pro EF', price: '$850.00', img: hoodImg },
    { id: 3, name: 'Espresso Master EF', price: '$450.00', img: coffeeImg },
    { id: 4, name: 'Split Inverter EF', price: '$599.00', img: acImg },
    { id: 5, name: 'Digital Oven Luxury EF', price: '$720.00', img: ovenImg },
    { id: 6, name: 'Professional Washer EF', price: '$899.00', img: washerImg },
  ];

  if (view === 'catalog') {
    return (
      <div className={`${styles.container} fade-in`}>
        <div className={styles.header}>
          <button onClick={() => setView('chats')} className={styles.backBtn}>
            <ArrowLeft size={20} />
          </button>
          <div className={styles.headerInfo}>
            <span className={styles.title}>Catálogo Electrofox</span>
          </div>
          <Search size={20} />
          <ShoppingBag size={20} />
        </div>
        <div className={styles.catalogGrid}>
          {products.map(p => (
            <div key={p.id} className={styles.productCard}>
              <div className={styles.productImgBox}>
                <img src={p.img} alt={p.name} />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productPrice}>{p.price}</span>
                <span className={styles.productName}>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} fade-in`}>
      <div className={styles.header}>
        <span className={styles.brand}>WhatsApp Business</span>
        <div className={styles.headerIcons}>
          <Search size={20} />
          <MoreVertical size={20} />
        </div>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tab}><Camera size={18} /></div>
        <div className={`${styles.tab} ${styles.activeTab}`}>CHATS</div>
        <div className={styles.tab}>ESTADOS</div>
        <div className={styles.tab}>LLAMADAS</div>
      </div>

      <div className={styles.chatList}>
        {chats.map(chat => (
          <div key={chat.id} className={styles.chatItem}>
            <div className={styles.avatar}>
              {chat.name[0]}
            </div>
            <div className={styles.chatContent}>
              <div className={styles.chatTop}>
                <span className={styles.name}>{chat.name}</span>
                <span className={styles.time}>{chat.time}</span>
              </div>
              <div className={styles.chatBottom}>
                <span className={styles.message}>{chat.message}</span>
                {chat.unread > 0 && <span className={styles.unread}>{chat.unread}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.catalogBtn} onClick={() => setView('catalog')}>
        <Store size={24} />
      </button>

      <button className={styles.fab}>
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default WhatsAppView;
