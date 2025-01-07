import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Galeria.module.css';


function Galeria() {
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get('titulo');
  const texto = searchParams.get('texto');
  const imagenes = searchParams.get('imagenes')?.split(',');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [zoomScale, setZoomScale] = useState(1);

  if (!titulo || !texto || !imagenes) return <div>No se encontraron imágenes</div>;

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomScale(1); // Resetear el zoom cuando se cierra el modal
  };

  const zoomIn = () => {
    setZoomScale(prevScale => prevScale + 0.2);
  };

  const zoomOut = () => {
    setZoomScale(prevScale => (prevScale > 0.2 ? prevScale - 0.2 : 0.2));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className={styles.galeriaContainer}>
      <h1 className={styles.galeriaTitle}>{titulo}</h1>
      <p className={styles.galeriaText}>{texto}</p>

      <div className={styles.carouselContainer}>
        <button onClick={prevImage} className={`${styles.carouselButton} ${styles.prev}`}>←</button>

        <div className={styles.carouselImageContainer} onClick={() => openModal(imagenes[currentImageIndex])}>
          <img
            src={`assets/img/${imagenes[currentImageIndex]}`}
            alt={`Imagen ${currentImageIndex + 1}`}
            className={`${styles.carouselImage} ${styles.zoomable}`}
          />
        </div>

        <button onClick={nextImage} className={`${styles.carouselButton} ${styles.next}`}>→</button>
      </div>

      <div className={styles.imageIndicator}>
        {imagenes.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicatorDot} ${currentImageIndex === index ? styles.active : ''}`}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageContainer}>
              <img
                src={`assets/img/${modalImage}`}
                alt="Modal"
                className={styles.modalImage}
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>
            <div className={styles.zoomControls}>
              <button onClick={zoomIn} className={styles.zoomButton}>+</button>
              <button onClick={zoomOut} className={styles.zoomButton}>-</button>
            </div>
            <button className={styles.closeModalButton} onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Galeria;
