import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, User, Grid, Play, Search, PlusSquare, Menu, Music2, Share2, MoreVertical } from 'lucide-react';
import styles from './SocialView.module.css';

import logoImg from '../assets/logo_ef.png';
import storefrontImg from '../assets/ig_storefront_ef_1773875229503.png';
import kitchenImg from '../assets/ig_lifestyle_kitchen_ef_1773875246385.png';
import truckImg from '../assets/ig_delivery_truck_ef_1773875262841.png';
import ovenImg from '../assets/ig_product_oven_detail_ef_1773875352427.png';
import washerImg from '../assets/ig_product_washer_silver_ef_1773875371877.png';

// Fallback products from assets/products
import fridgeImg from '../assets/products/fridge.png';
import hoodImg from '../assets/products/hood.png';
import coffeeImg from '../assets/products/coffee.png';
import acImg from '../assets/products/ac.png';

const SocialView = ({ type }) => {
  const [view, setView] = useState('grid'); // 'grid' or 'feed' for Instagram
  const isTikTok = type === 'tiktok';

  const igPosts = [
    { id: 1, img: storefrontImg, likes: '1.2k', caption: 'Nuestra nueva sede en Caracas. ¡Te esperamos! 📍✨' },
    { id: 2, img: kitchenImg, likes: '850', caption: 'Espacios que inspiran. Línea blanca de lujo. 🏠💎' },
    { id: 3, img: truckImg, likes: '420', caption: 'Despachos inmediatos a todo el país. 🚚💨' },
    { id: 4, img: ovenImg, likes: '630', caption: 'Precisión digital en cada receta con Electrofox. 🥧🔥' },
    { id: 5, img: washerImg, likes: '510', caption: 'Silencio y eficiencia en tu lavandería. 🧼✨' },
    { id: 6, img: fridgeImg, likes: '2.1k', caption: 'El centro de tu cocina: Samsung French Door EF. ❄️' },
    { id: 7, img: hoodImg, likes: '340', caption: 'Diseño industrial para chefs en casa. 🌫️' },
    { id: 8, img: coffeeImg, likes: '1.5k', caption: 'Despierta con la tecnología Espresso Master. ☕' },
    { id: 9, img: acImg, likes: '980', caption: 'Confort total con control inteligente. ❄️📱' },
  ];

  if (isTikTok) {
    return (
      <div className={`${styles.tiktokContainer} fade-in`}>
        <div className={styles.tkHeader}>
          <span>Siguiendo</span>
          <span className={styles.active}>Para ti</span>
          <Search size={22} className={styles.tkSearch} />
        </div>

        <div className={styles.tkFeed}>
          <div className={styles.tkVideo}>
             <img src={kitchenImg} alt="video thumb" className={styles.tkBg} />
             <div className={styles.tkOverlay}>
               <div className={styles.tkInfo}>
                 <span className={styles.tkUser}>@electrofoxccs</span>
                 <p className={styles.tkCaption}>Transformando hogares con lo mejor de KitchenAid. 🏠💎 #Electrofox #Luxury</p>
                 <div className={styles.tkMusic}>
                   <Music2 size={14} /> <span>Sonido original - Electrofoxccs</span>
                 </div>
               </div>
               
               <div className={styles.tkActions}>
                 <div className={styles.tkAvatar}>
                    <img src={logoImg} alt="avatar" />
                    <div className={styles.plus}>+</div>
                 </div>
                 <div className={styles.tkAction}>
                    <Heart size={32} fill="white" />
                    <span>85.4k</span>
                 </div>
                 <div className={styles.tkAction}>
                    <MessageCircle size={32} fill="white" />
                    <span>1.2k</span>
                 </div>
                 <div className={styles.tkAction}>
                    <Bookmark size={32} fill="white" />
                    <span>4k</span>
                 </div>
                 <div className={styles.tkAction}>
                    <Share2 size={32} fill="white" />
                    <span>12.5k</span>
                 </div>
                 <div className={styles.tkDisc}>
                    <img src={logoImg} alt="disc" />
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className={styles.tkFooter}>
           <div className={styles.tkTab}><Play fill="white" size={24} /><span>Inicio</span></div>
           <div className={styles.tkTab}><User size={24} /><span>Amigos</span></div>
           <div className={styles.tkPlus}><div className={styles.plusBox}>+</div></div>
           <div className={styles.tkTab}><MessageCircle size={24} /><span>Bandeja</span></div>
           <div className={styles.tkTab}><User size={24} /><span>Perfil</span></div>
        </div>
      </div>
    );
  }

  // Instagram View
  return (
    <div className={`${styles.igContainer} fade-in`}>
      <div className={styles.igHeader}>
        <span className={styles.igUsername}>electrofoxccs</span>
        <div className={styles.igHeaderIcons}>
          <PlusSquare size={24} />
          <Menu size={24} />
        </div>
      </div>

      <div className={styles.igProfileInfo}>
        <div className={styles.igAvatarLarge}>
           <img src={logoImg} alt="Profile" />
        </div>
        <div className={styles.igStats}>
          <div className={styles.stat}><strong>124</strong><span>Posts</span></div>
          <div className={styles.stat}><strong>15.2k</strong><span>Foll.</span></div>
          <div className={styles.stat}><strong>450</strong><span>Sig.</span></div>
        </div>
      </div>

      <div className={styles.igBio}>
        <span className={styles.fullName}>Electrofox CCS 🦊✨</span>
        <span className={styles.category}>Tienda de electrodomésticos</span>
        <p>Líderes en Línea Blanca & Tecnología de Lujo en Venezuela. 🇻🇪</p>
        <a href="#link">electrofoxccs.com</a>
      </div>

      <div className={styles.igActionBtns}>
        <button className={styles.igBtnMain}>Seguir</button>
        <button className={styles.igBtn}>Mensaje</button>
        <button className={styles.igBtn}>Ventas</button>
      </div>

      <div className={styles.igTabs}>
        <div className={`${styles.igTab} ${view === 'grid' ? styles.activeTab : ''}`} onClick={() => setView('grid')}>
          <Grid size={22} />
        </div>
        <div className={`${styles.igTab} ${view === 'feed' ? styles.activeTab : ''}`} onClick={() => setView('feed')}>
          <Play size={22} />
        </div>
        <div className={styles.igTab}><User size={22} /></div>
      </div>

      {view === 'grid' ? (
        <div className={styles.igGrid}>
          {igPosts.map(post => (
            <div key={post.id} className={styles.gridItem} onClick={() => setView('feed')}>
              <img src={post.img} alt="post" />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.igFeed}>
          {igPosts.map(post => (
            <div key={post.id} className={styles.post}>
              <div className={styles.postHeader}>
                <div className={styles.miniAvatar}><img src={logoImg} alt="av" /></div>
                <span className={styles.postUser}>electrofoxccs</span>
                <MoreVertical size={16} className={styles.dots} />
              </div>
              <div className={styles.postMedia}>
                <img src={post.img} alt="media" />
              </div>
              <div className={styles.postActions}>
                <div className={styles.actionsLeft}>
                  <Heart size={24} />
                  <MessageCircle size={24} />
                  <Send size={24} />
                </div>
                <Bookmark size={24} />
              </div>
              <div className={styles.postBody}>
                <strong>{post.likes} likes</strong>
                <p><strong>electrofoxccs</strong> {post.caption}</p>
                <span className={styles.timeTag}>Hace 2 horas</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialView;
