import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, User, Grid, Play, Search, PlusSquare, Menu, Music2, Share2, MoreVertical, CheckCircle, ArrowLeft, Lock } from 'lucide-react';
import styles from './SocialView.module.css';

import logoImg from '../assets/logo_ef.png';
import storefrontImg from '../assets/ig_storefront_ef_1773875229503.png';
import kitchenImg from '../assets/ig_lifestyle_kitchen_ef_1773875246385.png';
import truckImg from '../assets/ig_delivery_truck_ef_1773875262841.png';
import ovenImg from '../assets/ig_product_oven_detail_ef_1773875352427.png';
import washerImg from '../assets/ig_product_washer_silver_ef_1773875371877.png';

import fridgeImg from '../assets/products/fridge.png';
import hoodImg from '../assets/products/hood.png';
import coffeeImg from '../assets/products/coffee.png';
import acImg from '../assets/products/ac.png';

const SocialView = ({ type }) => {
  const [view, setView] = useState('grid');
  const isTikTok = type === 'tiktok';

  const posts = [
    { id: 1, img: kitchenImg, user: 'electrofoxccs', likes: '85.4k', comments: '1.2k', caption: 'Transformando hogares con lo mejor de KitchenAid. 🏠💎 #Electrofox #Luxury #KitchenDesign', music: 'Sonido original - Electrofoxccs' },
    { id: 2, img: storefrontImg, user: 'electrofoxccs', likes: '42.1k', comments: '850', caption: '¡Nueva sede en Las Mercedes! Te esperamos con la mejor tecnología. 📍🦊 #Caracas #Ventas', music: 'Electrofox Vibes - Official' },
    { id: 3, img: fridgeImg, user: 'electrofoxccs', likes: '120k', comments: '3.4k', caption: 'El frío perfecto tiene nombre: Samsung French Door EF. ❄️💎 #LíneaBlanca #Tecnología', music: 'Cold as Ice - Remix' },
  ];

  const gridPosts = [
    { id: 1, img: storefrontImg }, { id: 2, img: kitchenImg }, { id: 3, img: truckImg },
    { id: 4, img: ovenImg }, { id: 5, img: washerImg }, { id: 6, img: fridgeImg },
    { id: 7, img: hoodImg }, { id: 8, img: coffeeImg }, { id: 9, img: acImg },
  ];

  if (isTikTok) {
    return (
      <div className={`${styles.tiktokContainer} fade-in`}>
        <div className={styles.tkHeaderProfile}>
          <ArrowLeft size={24} />
          <span className={styles.tkUsername}>Electrofox CCS <CheckCircle size={14} fill="#20D5EC" color="black" /></span>
          <Share2 size={24} />
        </div>

        <div className={styles.tkContentScroll}>
          <div className={styles.tkProfileHeader}>
            <div className={styles.tkAvatarWrapper}>
               <img src={logoImg} alt="logo" className={styles.tkAvatarLarge} />
            </div>
            <span className={styles.tkAtName}>@electrofoxccs</span>
            
            <div className={styles.tkStats}>
               <div className={styles.tkStat}><strong>450</strong><span>Siguiendo</span></div>
               <div className={styles.tkStat}><strong>1.2M</strong><span>Seguidores</span></div>
               <div className={styles.tkStat}><strong>12.4M</strong><span>Me gusta</span></div>
            </div>

            <div className={styles.tkBio}>
               <p>Líderes en Línea Blanca & Lujo en Vzla 💎🦊</p>
               <p>📍 Las Mercedes, Caracas</p>
               <a href="https://electrofoxccs.com">electrofoxccs.com</a>
            </div>

            <div className={styles.tkActionsProfile}>
              <button className={styles.tkBtnFollow}>Seguir</button>
              <button className={styles.tkBtnIcon}><MessageCircle size={20} /></button>
              <button className={styles.tkBtnIcon}><User size={20} /></button>
            </div>
          </div>

          <div className={styles.tkTabs}>
            <div className={`${styles.tkTabItem} ${view === 'grid' ? styles.tkActiveTab : ''}`} onClick={() => setView('grid')}><Grid size={22} /></div>
            <div className={styles.tkTabItem}><Lock size={20} /></div>
            <div className={styles.tkTabItem}><Bookmark size={20} /></div>
            <div className={styles.tkTabItem}><Heart size={20} /></div>
          </div>

          <div className={styles.tkGrid}>
            {gridPosts.map(p => (
              <div key={p.id} className={styles.tkGridItem}>
                <img src={p.img} alt="post" />
                <div className={styles.tkGridOverlay}><Play size={12} fill="white" /> 154k</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tkFooter}>
           <div className={styles.tkTabFooter} onClick={() => setView('feed')}><Play size={24} /><span>Inicio</span></div>
           <div className={styles.tkTabFooter}><User size={24} /><span>Amigos</span></div>
           <div className={styles.tkPlus}><div className={styles.plusBox}>+</div></div>
           <div className={styles.tkTabFooter}><MessageCircle size={24} /><span>Bandeja</span></div>
           <div className={styles.tkTabFooter}><User size={24} color="#fe2c55" /><span>Perfil</span></div>
        </div>
      </div>
    );
  }

  // Instagram remains as is but with fluid style
  return (
    <div className={`${styles.igContainer} fade-in`}>
      <div className={styles.igHeader}>
        <span className={styles.igUsername}>electrofoxccs <CheckCircle size={14} fill="#0095f6" color="white" /></span>
        <div className={styles.igHeaderIcons}><PlusSquare size={22} /><Menu size={22} /></div>
      </div>

      <div className={styles.igContentScroll}>
        <div className={styles.igProfileInfo}>
          <div className={styles.igAvatarLarge}>
            <div className={styles.inner}><img src={logoImg} alt="Logo" /></div>
          </div>
          <div className={styles.igStats}>
            <div className={styles.stat}><strong>124</strong><span>Posts</span></div>
            <div className={styles.stat}><strong>15.2k</strong><span>Seguid.</span></div>
            <div className={styles.stat}><strong>450</strong><span>Siguien.</span></div>
          </div>
        </div>

        <div className={styles.igBio}>
          <span className={styles.fullName}>Electrofox CCS 🦊✨</span>
          <span className={styles.category}>Tienda de electrodomésticos</span>
          <p>💎 Líderes en Línea Blanca & Lujo en Vzla.<br/>📍 Las Mercedes, Caracas.<br/>🚚 Envíos a todo el país.</p>
          <a href="https://electrofoxccs.com" target="_blank" rel="noreferrer">electrofoxccs.com</a>
        </div>

        <div className={styles.igActionBtns}>
          <button className={styles.igBtnMain}>Seguir</button>
          <button className={styles.igBtn}>Mensaje</button>
          <button className={styles.igBtn}><User size={16} /></button>
        </div>

        <div className={styles.igTabs}>
          <div className={`${styles.igTab} ${view === 'grid' ? styles.activeTab : ''}`} onClick={() => setView('grid')}><Grid size={22} /></div>
          <div className={`${styles.igTab} ${view === 'feed' ? styles.activeTab : ''}`} onClick={() => setView('feed')}><Play size={22} /></div>
        </div>

        {view === 'grid' ? (
          <div className={styles.igGrid}>
            {gridPosts.map(p => (
              <div key={p.id} className={styles.gridItem}><img src={p.img} alt="p" /></div>
            ))}
          </div>
        ) : (
          <div className={styles.igFeed}>
             {posts.map(p => (
               <div key={p.id} style={{ marginBottom: '20px' }}>
                 <div style={{ padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={logoImg} alt="av" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                    <span style={{ fontWeight: '700', fontSize: '0.85rem' }}>{p.user}</span>
                 </div>
                 <img src={p.img} alt="post" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
                 <div style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '8px' }}><Heart size={24} /><MessageCircle size={24} /><Send size={24} /></div>
                    <p style={{ fontSize: '0.85rem' }}><strong>{p.user}</strong> {p.caption}</p>
                 </div>
               </div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialView;
