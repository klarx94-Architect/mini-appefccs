import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, User, Box } from 'lucide-react';
import styles from './SocialView.module.css';
import logoImg from '../assets/logo_ef.png';

const SocialView = ({ type }) => {
  const isTikTok = type === 'tiktok';
  
  const posts = [
    { id: 1, user: 'electrofoxccs', likes: '1.2k', caption: 'La elegancia del Samsung French Door en tu cocina. 💎 #Electrofox #LuxuryKitchen' },
    { id: 2, user: 'electrofoxccs', likes: '850', caption: 'Potencia y silencio con nuestra nueva campana KitchenAid. 🌫️✨' },
    { id: 3, user: 'electrofoxccs', likes: '2.4k', caption: '¿Café? Solo con la mejor tecnología. ☕🔥' },
  ];

  return (
    <div className={`${styles.container} ${isTikTok ? styles.tiktokBg : ''} fade-in`}>
      <div className={styles.header}>
        <span className={styles.username}>electrofoxccs</span>
        <div className={styles.headerIcons}>
          <Box size={20} />
          <User size={20} />
        </div>
      </div>

      <div className={styles.feed}>
        {posts.map(post => (
          <div key={post.id} className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.avatar}>
                <img src={logoImg} alt="logo" />
              </div>
              <span className={styles.postUser}>{post.user}</span>
            </div>
            
            <div className={styles.postMedia}>
               <div className={styles.placeholder}>
                 <span>CONTENIDO COMERCIAL</span>
                 <small>Simulación de {type === 'tiktok' ? 'Reel/Video' : 'Post'}</small>
               </div>
            </div>

            <div className={styles.postActions}>
              <div className={styles.actionLeft}>
                <Heart size={24} />
                <MessageCircle size={24} />
                <Send size={24} />
              </div>
              <Bookmark size={24} />
            </div>

            <div className={styles.postBody}>
              <span className={styles.likes}>{post.likes} likes</span>
              <p className={styles.caption}>
                <strong>{post.user}</strong> {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialView;
