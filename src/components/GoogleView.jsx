import React from 'react';
import { Star, MapPin, Phone, Globe, Share2, Search, MoreHorizontal, ShoppingCart, Clock, ShieldCheck, ChevronRight, Camera } from 'lucide-react';
import styles from './GoogleView.module.css';

import storefrontImg from '../assets/ig_storefront_ef_1773875229503.png';
import kitchenImg from '../assets/ig_lifestyle_kitchen_ef_1773875246385.png';
import fridgeImg from '../assets/products/fridge.png';
import hoodImg from '../assets/products/hood.png';
import washerImg from '../assets/products/washer.png';
import logoImg from '../assets/logo_ef.png';

const GoogleView = () => {
  const reviews = [
    { id: 1, name: 'Andrés Mendoza', rating: 5, comment: 'La mejor atención y los equipos son de otro nivel. El refrigerador French Door es una joya.', time: 'hace 2 semanas' },
    { id: 2, name: 'Beatriz Salas', rating: 5, comment: 'Excelente servicio post-venta. Instalaron mi cocina el mismo día. Muy recomendados.', time: 'hace 1 mes' },
  ];

  return (
    <div className={`${styles.gContainer} fade-in`}>
      <div className={styles.gSearchHeader}>
        <div className={styles.searchBar}>
          <Search size={18} color="#4285F4" />
          <span>electrofoxccs</span>
          <Camera size={18} color="#9aa0a6" />
        </div>
      </div>

      <div className={styles.gContent}>
        <div className={styles.mainInfo}>
          <div className={styles.titleRow}>
             <h1 className={styles.gTitle}>Electrofox - Líderes en Línea Blanca</h1>
             <div className={styles.gLogo}><img src={logoImg} alt="logo" /></div>
          </div>
          
          <div className={styles.ratingRow}>
            <span className={styles.ratingScore}>5.0</span>
            <div className={styles.stars}>
               {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FABB05" color="#FABB05" />)}
            </div>
            <span className={styles.reviewCount}>(1,248 reseñas)</span>
          </div>
          <span className={styles.category}>Tienda de electrodomésticos en Caracas</span>
          
          <div className={styles.quickActions}>
             <div className={styles.actionItem}><div className={styles.iconCircle}><Phone size={20} color="#1a73e8" fill="#1a73e8" /></div><span>Llamar</span></div>
             <div className={styles.actionItem}><div className={styles.iconCircle}><MapPin size={20} color="#1a73e8" /></div><span>Llegar</span></div>
             <div className={styles.actionItem}><div className={styles.iconCircle}><Globe size={20} color="#1a73e8" /></div><span>Sitio</span></div>
             <div className={styles.actionItem}><div className={styles.iconCircle}><Share2 size={20} color="#1a73e8" /></div><span>Compartir</span></div>
          </div>
        </div>

        <div className={styles.photoStrip}>
           <img src={storefrontImg} alt="store" />
           <img src={kitchenImg} alt="kitchen" />
           <img src={fridgeImg} alt="product" />
           <div className={styles.morePhotos}>+24</div>
        </div>

        <div className={styles.detailsList}>
           <div className={styles.detail}>
              <MapPin size={20} color="#9aa0a6" />
              <div className={styles.detailText}>
                 <span>Av. Principal de Las Mercedes, Caracas 1060, Miranda</span>
                 <small>Ver mapa</small>
              </div>
              <ChevronRight size={18} color="#dadce0" />
           </div>
           <div className={styles.detail}>
              <Clock size={20} color="#9aa0a6" />
              <div className={styles.detailText}>
                 <span className={styles.openNow}>Abierto ⋅ Cierra a las 19:00</span>
                 <small>Ver horarios</small>
              </div>
              <ChevronRight size={18} color="#dadce0" />
           </div>
           <div className={styles.detail}>
              <ShieldCheck size={20} color="#1e8e3e" />
              <div className={styles.detailText}>
                 <span className={styles.verified}>Negocio verificado por Electrofox</span>
              </div>
           </div>
        </div>

        <div className={styles.shoppingSection}>
           <div className={styles.sectionHeader}>
              <h3>Productos Destacados</h3>
              <span>Ver todos <ChevronRight size={14} /></span>
           </div>
           <div className={styles.productCarousel}>
              <div className={styles.shopCard}>
                 <img src={fridgeImg} alt="fr" />
                 <span className={styles.pPrice}>$1,299.99</span>
                 <span className={styles.pName}>Samsung French Door</span>
              </div>
              <div className={styles.shopCard}>
                 <img src={washerImg} alt="wa" />
                 <span className={styles.pPrice}>$899.00</span>
                 <span className={styles.pName}>Professional Washer</span>
              </div>
              <div className={styles.shopCard}>
                 <img src={hoodImg} alt="ho" />
                 <span className={styles.pPrice}>$850.00</span>
                 <span className={styles.pName}>KitchenAid Pro Hood</span>
              </div>
           </div>
        </div>

        <div className={styles.reviewsSection}>
           <div className={styles.sectionHeader}>
              <h3>Reseñas de clientes</h3>
              <button className={styles.gBtn}>Escribir reseña</button>
           </div>
           {reviews.map(r => (
             <div key={r.id} className={styles.reviewCard}>
                <div className={styles.rHeader}>
                   <div className={styles.rAvatar}>{r.name[0]}</div>
                   <div className={styles.rUser}>
                      <strong>{r.name}</strong>
                      <span>{r.time}</span>
                   </div>
                </div>
                <div className={styles.rStars}>
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#FABB05" color="#FABB05" />)}
                </div>
                <p className={styles.rComment}>{r.comment}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleView;
