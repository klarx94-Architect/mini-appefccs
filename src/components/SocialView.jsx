import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, User, Grid, Play, Search, PlusSquare, Menu, Music2, Share2, MoreVertical } from 'lucide-react';
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
    { id: 1, img: kitchenImg, user: '@electrofoxccs', likes: '85.4k', comments: '1.2k', caption: 'Transformando hogares con lo mejor de KitchenAid. 🏠💎 #Electrofox #Luxury', music: 'Sonido original - Electrofoxccs' },
    { id: 2, img: storefrontImg, user: '@electrofoxccs', likes: '42.1k', comments: '850', caption: '¡Nueva sede en Las Mercedes! Te esperamos con la mejor tecnología. 📍🦊', music: 'Electrofox Vibes - Official' },
    { id: 3, img: fridgeImg, user: '@electrofoxccs', likes: '120k', comments: '3.4k', caption: 'El frío perfecto tiene nombre: Samsung French Door EF. ❄️💎', music: 'Cold as Ice - Remix' },
    { id: 4, img: truckImg, user: '@electrofoxccs', likes: '15.6k', comments: '240', caption: 'Logística de primera para entregas seguras en toda Venezuela. 🚚💨', music: 'On the Road - Electro' },
  ];

  const igGridPosts = [
    { id: 1, img: storefrontImg }, { id: 2, img: kitchenImg }, { id: 3, img: truckImg },
    { id: 4, img: ovenImg }, { id: 5, img: washerImg }, { id: 6, img: fridgeImg },
    { id: 7, img: hoodImg }, { id: 8, img: coffeeImg }, { id: 9, img: acImg },
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
          {posts.map(post => (
            <div key={post.id} className={styles.tkSlide}>
               <img src={post.img} alt="video" className={styles.tkBg} />
               <div className={styles.tkOverlay}>
                 <div className={styles.tkInfo}>
                   <span className={styles.tkUser}>{post.user}</span>
                   <p className={styles.tkCaption}>{post.caption}</p>
                   <div className={styles.tkMusic}>
                     <Music2 size={14} /> <span>{post.music}</span>
                   </div>
                 </div>
                 
                 <div className={styles.tkActions}>
                   <div className={styles.tkAvatar}>
                      <img src={logoImg} alt="av" />
                      <div className={styles.plus}>+</div>
                   </div>
                   <div className={styles.tkAction}><Heart size={32} fill="white" /><span>{post.likes}</span></div>
                   <div className={styles.tkAction}><MessageCircle size={32} fill="white" /><span>{post.comments}</span></div>
                   <div className={styles.tkAction}><Bookmark size={32} fill="white" /><span>4k</span></div>
                   <div className={styles.tkAction}><Share2 size={32} fill="white" /><span>Share</span></div>
                   <div className={styles.tkDisc}><img src={logoImg} alt="disc" /></div>
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className={styles.tkFooter}>
           <div className={styles.tkTab}><Play fill="white" size={24} /><span>Inicio</span></div>
           <div className={styles.tkTab}><User size={24} /><span>Amigos</span></div>
           <div className={styles.tkPlus}><div className={styles.plusBox}>+</div></div>
           <div className={styles.tkTab}><MessageSquare size={24} /><span>Bandeja</span></div>
           <div className={styles.tkTab}><User size={24} /><span>Perfil</span></div>
        </div>
      </div>
    );
  }

  // Instagram remains similar but with cleaner spacing
  return (
    <div className={`${styles.igContainer} fade-in`}>
      <div className={styles.igHeader}>
        <span className={styles.igUsername}>electrofoxccs</span>
        <div className={styles.igHeaderIcons}><PlusSquare size={24} /><Menu size={24} /></div>
      </div>

      <div className={styles.igContentScroll}>
        <div className={styles.igProfileInfo}>
          <div className={styles.igAvatarLarge}><img src={logoImg} alt="Logo" /></div>
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
        </div>

        <div className={styles.igTabs}>
          <div className={`${styles.igTab} ${view === 'grid' ? styles.activeTab : ''}`} onClick={() => setView('grid')}><Grid size={22} /></div>
          <div className={`${styles.igTab} ${view === 'feed' ? styles.activeTab : ''}`} onClick={() => setView('feed')}><Play size={22} /></div>
        </div>

        {view === 'grid' ? (
          <div className={styles.igGrid}>
            {igGridPosts.map(p => (
              <div key={p.id} className={styles.gridItem} onClick={() => setView('feed')}><img src={p.img} alt="p" /></div>
            ))}
          </div>
        ) : (
          <div className={styles.igFeed}>
            {posts.map(p => (
              <div key={p.id} className={styles.post}>
                <div className={styles.postHeader}>
                  <div className={styles.miniAvatar}><img src={logoImg} alt="av" /></div>
                  <span className={styles.postUser}>electrofoxccs</span>
                  <MoreVertical size={16} />
                </div>
                <div className={styles.postMedia}><img src={p.img} alt="m" /></div>
                <div className={styles.postActions}>
                   <div className={styles.actionsLeft}><Heart size={24} /><MessageCircle size={24} /><Send size={24} /></div>
                   <Bookmark size={24} />
                </div>
                <div className={styles.postBody}>
                   <strong>{p.likes} likes</strong>
                   <p><strong>electrofoxccs</strong> {p.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Simple Lucide wrapper for TikTok footer consistency
const MessageSquare = ({ size }) => <MessageCircle size={size} />;

export default SocialView;
