import React, { useState } from 'react';
import { Search, MoreVertical, Camera, MessageSquare, Phone, Store, ArrowLeft, ShoppingBag, Send, Paperclip, Smile } from 'lucide-react';
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
    { id: 1, name: 'María Gonzalez (Leads)', message: '¡Hola! ¿Tienen la campana KitchenAid disponible?', time: '10:15', unread: 1, active: true },
    { id: 2, name: 'Ingeniería Carlos', message: 'Gracias por la asesoría, el refrigerador es increíble.', time: '09:30', unread: 0 },
    { id: 3, name: 'Elena R. Ventas', message: '¿A qué hora entregan hoy?', time: 'Ayer', unread: 0 },
    { id: 4, name: 'Luis M. Soporte', message: 'Envíame el catálogo de aires acondicionados por favor.', time: 'Ayer', unread: 2 },
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
      <div className={`${styles.gContainer} fade-in`}>
        <div className={styles.waHeader}>
          <button onClick={() => setView('chats')} className={styles.backBtn}><ArrowLeft size={20} /></button>
          <div className={styles.waHeaderInfo}><span className={styles.waTitle}>Catálogo Electrofox</span></div>
          <div className={styles.waHeaderIcons}><Search size={22} /><ShoppingBag size={22} /></div>
        </div>
        <div className={styles.catalogBanner}>
          <div className={styles.bannerLogo}><img src={logoImg} alt="logo" /></div>
          <h3>Electrofox Caracas</h3>
          <p>Líderes en Línea Blanca de Lujo</p>
        </div>
        <div className={styles.catalogGrid}>
          {products.map(p => (
            <div key={p.id} className={styles.productCard}>
              <div className={styles.pImgBox}><img src={p.img} alt={p.name} /></div>
              <div className={styles.pInfo}>
                 <span className={styles.pPrice}>{p.price}</span>
                 <span className={styles.pName}>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.waContainer} fade-in`}>
      <div className={styles.waHeader}>
        <span className={styles.waBrand}>WhatsApp Business</span>
        <div className={styles.waHeaderIcons}>
          <Camera size={22} />
          <Search size={22} />
          <MoreVertical size={22} />
        </div>
      </div>

      <div className={styles.waTabs}>
        <div className={styles.waTab}><Store size={20} /></div>
        <div className={`${styles.waTab} ${styles.waActiveTab}`}>CHATS</div>
        <div className={styles.waTab}>ESTADOS</div>
        <div className={styles.waTab}>LLAMADAS</div>
      </div>

      <div className={styles.chatList}>
        {chats.map(chat => (
          <div key={chat.id} className={styles.chatItem}>
            <div className={`${styles.avatar} ${chat.active ? styles.activeAvatar : ''}`}>
              {chat.name[0]}
            </div>
            <div className={styles.chatMid}>
               <div className={styles.chatTop}>
                  <span className={styles.chatName}>{chat.name}</span>
                  <span className={`${styles.chatTime} ${chat.unread > 0 ? styles.activeTime : ''}`}>{chat.time}</span>
               </div>
               <div className={styles.chatBottom}>
                  <p className={styles.chatMsg}>{chat.message}</p>
                  {chat.unread > 0 && <span className={styles.unreadCount}>{chat.unread}</span>}
               </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.catalogFab} onClick={() => setView('catalog')}>
        <Store size={26} />
      </button>

      <button className={styles.mainFab}>
        <MessageSquare size={26} fill="white" />
      </button>
    </div>
  );
};

export default WhatsAppView;
