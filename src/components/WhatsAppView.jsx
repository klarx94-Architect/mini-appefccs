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
    { id: 1, name: 'María González (Clienta)', message: '¡Perfecto! Agendemos la entrega para el lunes.', time: '10:15 am', unread: 1, active: true },
    { id: 2, name: 'Ingeniería Carlos', message: 'El manual de instalación ya está en su correo.', time: '09:30 am', unread: 0 },
    { id: 3, name: 'Elena R. - Ventas EF', message: '¿Recibió el presupuesto de la línea blanca?', time: 'Ayer', unread: 0 },
    { id: 4, name: 'Soporte Electrofox', message: 'Estamos validando su garantía de 5 años.', time: 'Ayer', unread: 2 },
  ];

  const products = [
    { id: 1, name: 'Samsung French Door EF', price: '$1,299.99', desc: 'Tecnología Twin Cooling Plus', img: fridgeImg },
    { id: 2, name: 'KitchenAid Pro EF', price: '$850.00', desc: 'Campana de lujo inox', img: hoodImg },
    { id: 3, name: 'Espresso Master EF', price: '$450.00', desc: '15 Bares de presión', img: coffeeImg },
    { id: 4, name: 'Split Inverter EF', price: '$599.00', desc: 'Ahorro energético A+++', img: acImg },
  ];

  if (view === 'catalog') {
    return (
      <div className={`${styles.catalogContainer} fade-in`}>
        <div className={styles.waHeader}>
          <button onClick={() => setView('chats')} className={styles.backBtn}><ArrowLeft size={22} /></button>
          <div className={styles.waHeaderInfo}><span className={styles.waTitle}>Catálogo Electrofox</span></div>
          <div className={styles.waHeaderIcons}><Search size={22} /><ShoppingBag size={22} /></div>
        </div>
        <div className={styles.catalogStickyHeader}>
           <div className={styles.catalogBrandRow}>
              <div className={styles.brandIcon}><img src={logoImg} alt="ef" /></div>
              <div className={styles.brandText}>
                 <h3>Electrofox Caracas</h3>
                 <p>Perfil de empresa • Línea Blanca</p>
              </div>
           </div>
           <button className={styles.waBtnAction}>Comprar por WhatsApp</button>
        </div>
        <div className={styles.catalogGrid}>
          {products.map(p => (
            <div key={p.id} className={styles.productCard}>
              <div className={styles.pImgBox}><img src={p.img} alt={p.name} /></div>
              <div className={styles.pInfo}>
                 <span className={styles.pPrice}>{p.price}</span>
                 <span className={styles.pName}>{p.name}</span>
                 <span className={styles.pDesc}>{p.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.waContainer} fade-in`}>
      <div className={styles.waStatusBar}>
         <span>10:15 am</span>
         <div className={styles.statusIcons}>
            <div className={styles.sig} />
            <div className={styles.wifi} />
            <div className={styles.bat} />
         </div>
      </div>
      <div className={styles.waHeader}>
        <span className={styles.waBrand}>WhatsApp Business</span>
        <div className={styles.waHeaderIcons}>
          <Camera size={22} />
          <Search size={22} />
          <MoreVertical size={22} />
        </div>
      </div>

      <div className={styles.waTabs}>
        <div className={styles.waTabIcon}><Store size={20} /></div>
        <div className={`${styles.waTab} ${styles.waActiveTab}`}>CHATS</div>
        <div className={styles.waTab}>ESTADOS</div>
        <div className={styles.waTab}>LLAMADAS</div>
      </div>

      <div className={styles.chatList}>
        {chats.map(chat => (
          <div key={chat.id} className={styles.chatItem}>
            <div className={`${styles.avatar} ${chat.active ? styles.activeAvatar : ''}`}>
              {chat.active ? <img src={logoImg} alt="av" className={styles.avImg} /> : <span>{chat.name[0]}</span>}
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

      <div className={styles.waFooter}>
         <button className={styles.catalogFab} onClick={() => setView('catalog')} title="Catálogo">
           <Store size={24} />
         </button>
         <button className={styles.mainFab}>
           <MessageSquare size={24} fill="white" />
         </button>
      </div>
    </div>
  );
};

export default WhatsAppView;
