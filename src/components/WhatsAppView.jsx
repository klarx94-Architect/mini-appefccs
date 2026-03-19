import React, { useState } from 'react';
import { Camera, Search, MoreVertical, MessageSquare, Phone, Video, Search as SearchIcon, ArrowLeft, ShoppingBag } from 'lucide-react';
import styles from './WhatsAppView.module.css';
import logoImg from '../assets/logo_ef.png';

// Import images for products from previous turns
import fridgeImg from '../assets/products/fridge.png';
import ovenImg from '../assets/products/oven.png';
import washerImg from '../assets/products/washer.png';
import hoodImg from '../assets/products/hood.png';
import coffeeImg from '../assets/products/coffee.png';
import acImg from '../assets/products/ac.png';

const WhatsAppView = () => {
  const [activeTab, setActiveTab] = useState('CHATS');
  const [showCatalog, setShowCatalog] = useState(false);

  const chats = [
    { id: 1, name: 'Ingeniería Carlos 🦊', msg: 'Excelente, el catálogo está impecable.', time: '10:45 AM', unread: 2, active: true },
    { id: 2, name: 'Soporte Electrofox', msg: 'Su pedido #8841 va en camino.', time: '9:30 AM', unread: 0, active: false },
    { id: 3, name: 'Ventas Las Mercedes', msg: 'Tenemos stock del Samsung French Door.', time: 'Ayer', unread: 0, active: false },
    { id: 4, name: 'Electrofox CCS (Grupo)', msg: 'Admin: Promo de semana activa.', time: 'Ayer', unread: 0, active: false },
    { id: 5, name: 'Daniel (Instalaciones)', msg: 'Confirmado para las 3pm.', time: 'Lunes', unread: 0, active: false },
  ];

  const products = [
    { id: 1, name: 'Samsung French Door EF', price: '$1,299', img: fridgeImg },
    { id: 2, name: 'Horno Empotrable KitchenAid', price: '$850', img: ovenImg },
    { id: 3, name: 'Lavadora Carga Frontal Silver', price: '$950', img: washerImg },
    { id: 4, name: 'Campana de Lujo Pro', price: '$450', img: hoodImg },
    { id: 5, name: 'Cafetera Espresso Premium', price: '$320', img: coffeeImg },
    { id: 6, name: 'Aire Acondicionado 12k BTU', price: '$380', img: acImg },
  ];

  if (showCatalog) {
    return (
      <div className={`${styles.waContainer} fade-in`}>
        <div className={styles.waStatusBar}>
           <span>10:53</span>
           <div className={styles.statusIcons}>
             <Video size={12} /> <SearchIcon size={12} /> <div className={styles.bat} />
           </div>
        </div>
        <div className={styles.waHeader} style={{ background: '#008069', padding: '12px 15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <ArrowLeft onClick={() => setShowCatalog(false)} size={20} />
            <span className={styles.waBrand}>Catálogo Electrofox</span>
          </div>
          <div className={styles.waHeaderIcons}><Share2 size={20} /><MoreVertical size={20} /></div>
        </div>
        
        <div className={styles.catalogStickyHeader}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div className={styles.brandIcon}><img src={logoImg} alt="Logo" /></div>
             <div>
               <div style={{ fontWeight: '700', fontSize: '1rem' }}>Electrofox CCS 🦊</div>
               <div style={{ fontSize: '0.8rem', color: '#667781' }}>Cuenta de empresa oficial</div>
             </div>
          </div>
          <button className={styles.waBtnAction}>Contactar por WhatsApp</button>
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
      <div className={styles.waStatusBar}>
         <span>10:53</span>
         <div className={styles.statusIcons}>
           <Video size={12} /> <SearchIcon size={12} /> <div className={styles.bat} />
         </div>
      </div>
      
      <div className={styles.waHeader}>
        <span className={styles.waBrand}>WhatsApp Business</span>
        <div className={styles.waHeaderIcons}>
          <Camera size={20} /> <Search size={20} /> <MoreVertical size={20} />
        </div>
      </div>

      <div className={styles.waTabs}>
        <div className={styles.waTabIcon}><User size={20} /></div>
        {['CHATS', 'ESTADOS', 'LLAMADAS'].map(tab => (
          <div 
            key={tab} 
            className={`${styles.waTab} ${activeTab === tab ? styles.waActiveTab : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className={styles.chatList}>
        {chats.map(chat => (
          <div key={chat.id} className={styles.chatItem}>
             <div className={`${styles.avatar} ${chat.active ? styles.activeAvatar : ''}`}>
               <img src={logoImg} alt="av" className={styles.avImg} />
             </div>
             <div className={styles.chatMid}>
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                 <span className={styles.chatName}>{chat.name}</span>
                 <span style={{ fontSize: '0.75rem', color: chat.unread > 0 ? '#25d366' : '#667781' }}>{chat.time}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
                 <p className={styles.chatMsg}>{chat.msg}</p>
                 {chat.unread > 0 && <span className={styles.unreadCount}>{chat.unread}</span>}
               </div>
             </div>
          </div>
        ))}
      </div>

      <div className={styles.waFooter}>
         <div className={styles.catalogFab} onClick={() => setShowCatalog(true)}>
           <ShoppingBag size={24} />
         </div>
         <div className={styles.mainFab}>
           <MessageSquare size={24} color="white" fill="white" />
         </div>
      </div>
    </div>
  );
};

const Share2 = ({ size }) => <Send size={size} />;

export default WhatsAppView;
