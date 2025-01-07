import React, { useState } from "react";
import styles from "./Proyectos.module.css";
import CardsProyectos from "./cards/CardsProyecto";
import Modal from 'react-modal';
import DetallesProyectos from './detallesProyectos/DetallesProyectos'; 
Modal.setAppElement('#root');

function Proyectos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Desarrollo Web");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); 

  const proyectos = {
    "Desarrollo Web": [
      { titulo: "Proyecto HTML/CSS", texto: "Landing Page creativa.", imagenes: ["img1.jpg", "img2.jpg"] },
      { titulo: "React App", texto: "Aplicación con React y Redux.", imagenes: ["img3.jpg", "img4.jpg"] },
    ],
    "Arquitectura Backend": [
      { titulo: "API REST", texto: "API construida con Node.js y Express.", imagenes: ["img5.jpg", "img6.jpg"] },
      { titulo: "Microservicios", texto: "Arquitectura escalable con Docker.", imagenes: ["img7.jpg", "img8.jpg"] },
    ],
    "Plataformas Personalizadas": [
      { titulo: "Proyecto WordPress", texto: "Web corporativa en WordPress.", imagenes: ["Tienda.png"] },
      { titulo: "E-commerce Lolilo", texto: "Tienda online con WooCommerce.", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", tecnologias: ["WordPress","WooCommerce","WP Forms","Elementor","Blocksy Companion","Happy Elementor Addons","Blocksy"], link:"https://github.com/EmitaQuiel/Lolilo",imagenes: ["InicioLolilo_Corto.png","InicioLolilo.png", "TiendaLolilo.png", "CarritoLolilo.png", "FinalizarCompraLolilo.png", "RecibidoLolilo.png", "ContactoLolilo.png"] },
    ],
  };

  const proyectosFiltrados = proyectos[categoriaSeleccionada];

  const handleCategoriaChange = (categoria) => {
    if (categoria !== categoriaSeleccionada) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCategoriaSeleccionada(categoria);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const openModal = (proyecto) => {
    if (!proyecto || !Array.isArray(proyecto.imagenes) || proyecto.imagenes.length === 0) {
      console.error("El proyecto no tiene imágenes válidas.");
      return;
    }
    setProyectoSeleccionado(proyecto);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
    setProyectoSeleccionado(null);
  };

  return (
    <div className={styles.containerProyectos}>
      <div className={styles.containerTitulos}>
        {Object.keys(proyectos).map((categoria) => (
          <div
            key={categoria}
            className={`${styles.titulos} ${categoriaSeleccionada === categoria ? styles.active : ""}`}
            onClick={() => handleCategoriaChange(categoria)}
          >
            <p>{categoria}</p>
          </div>
        ))}
      </div>

      <div className={styles.containerInfo}>
        <h2>
          Proyectos Innovadores en Desarrollo Web, Backend<br /> y Soluciones
          Personalizadas para Impulsar el Éxito Digital
        </h2>
        <p>
          Descubre cómo mis proyectos combinan creatividad, tecnología avanzada
          y<br /> soluciones eficientes para ofrecer experiencias digitales únicas y de
          alto rendimiento.
        </p>
      </div>

      <div className={`${styles.containerCards} ${isTransitioning ? styles.hidden : ""}`}>
        {proyectosFiltrados.map((proyecto, index) => (
          <CardsProyectos
            key={index}
            titulo={proyecto.titulo}
            texto={proyecto.texto}
            onClick={() => openModal(proyecto)} // Al hacer clic, abrir el modal
          />
        ))}
      </div>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  className={styles.modal}
  overlayClassName={styles.overlay}
  contentLabel="Detalles del Proyecto"
>

        <DetallesProyectos
          proyecto={proyectoSeleccionado}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}

export default Proyectos;
