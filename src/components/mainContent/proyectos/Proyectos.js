import React, { useState, useEffect, useRef } from "react";
import styles from "./Proyectos.module.css";
import CardsProyectos from "./cards/CardsProyecto";
import Modal from "react-modal";
import DetallesProyectos from "./detallesProyectos/DetallesProyectos";
Modal.setAppElement("#root");

function Proyectos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Desarrollo Web");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null); 

  const proyectos = {
    

    "Arquitectura Backend": [
      { titulo: "Proyecto Estudiantil", texto: "Sistema de matricula en C#.", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["C#","phpMyAdmin","MySQL","XAMPP","Guna FrameWork"], link:"https://github.com/EmitaQuiel/Matricula-Estudiantil",imagenes: ["InicioMatriculaCorta.jpg","InicioMatricula.jpg", "AnadirMatricula.jpg", "MatriculaPsicologia.jpg", "MatriculaIngenieria.jpg" , "MatriculaEducacion.jpg", "MatriculaComunicacion.jpg", "MatriculaActualizar.jpg", "MatriculaBuscar.jpg","AgradecimientoMatricula.jpg","MatriculaEliminar.jpg","MatriculaMontos.jpg"] },

      { titulo: "E-commerce Poko Palace", texto: "E-commerce en Java.",  descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["Java Web Services","Tailwind","MySQL","XAMPP","Bootstrap","HTML & CSS"], link:"https://github.com/EmitaQuiel/Poko_Palace",imagenes: ["InicioPokoPalaceCorto.png", "InicioPokoPalace.png", "ProductosPokoPalace.jpg", "CarritoPokoPalace.jpg" , "FormularioClientePokoPalace.jpg", "ResumenCompraPokoPalace.jpg", "RegistroPokoPalace.jpg","HistorialCompraPokoPalace.jpg"] },

      { titulo: "Sistema de Venta", texto: "Software de ventas para tienda.",  descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["C#","SQL SERVER","Guna Framework"], link:"https://github.com/EmitaQuiel/SistemaVentas",imagenes: ["BienvenidaVentasCorto.jpg", "InicioVentas.jpg","CargaVentas.jpg","BienvenidaVentas.jpg", "UsuariosVentas.jpg","MantenimientoCategoriaVentas.jpg", "MantenimientoProductoVentas.jpg","MantenimientoNegocioVentas.jpg","ComprasRegistrar.jpg","DetalleCompra.jpg","DetalleVentaVentas.jpg","ClientesVentas.jpg","ProveedoresVentas.jpg","ReporteVentas.jpg","ReporteCompras.jpg","EMPLEADOS.jpg"] },

      { titulo: "Sistema Abaca", texto: "Sistema de mantenimiento de empresa.",  descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["C#",".NET","Entity FrameWork","Bootstrap", "Razor","HTML & CSS"], link:"https://github.com/EmitaQuiel/SistemaVentas",imagenes: ["SesionAbacaCorto.png","SesionAbaca.png", "InicioAbaca.png","MantenimientoAgricultores.png","MantenimientoEmpleados.png","AgregarAgricultor.png","AgregarEmpleado.png","RegistroEmpleados.png","AgregarFactura.png","MantenimientoFactura.png"] },

      { titulo: "Base de datos", texto: "Base de datos con funcionalidades.",  descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["MySQL","Views","Functions","Stored Procedures"], link:"https://github.com/EmitaQuiel/PreEntrega_Comision47375_SQL",imagenes: ["MYSQL.png","Diagrama Entidad-Relacion.png"] },
    ],
    
    "Desarrollo Web": [
      { titulo: "E-commerce Lolilo", texto: "Tienda online con WooCommerce.", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias: ["WordPress","WooCommerce","WP Forms","Elementor","Blocksy Companion","Happy Elementor Addons","Blocksy"], link:"https://github.com/EmitaQuiel/Lolilo",imagenes: ["InicioLolilo_Corto.png","InicioLolilo.png", "TiendaLolilo.png", "CarritoLolilo.png", "FinalizarCompraLolilo.png", "RecibidoLolilo.png", "ContactoLolilo.png"] },

      { titulo: "Cafeteria SweetMatch", texto: "Pagina Informativa con WordPress.", descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias:["WordPress","Blocksy Companion","Happy Elementor Addons","Blocksy"] ,link:"https://github.com/EmitaQuiel/SweetMatcha", imagenes: ["InicioCortoSweet.png","InicioSweet.png"] },

      { titulo: "Heladeria Milu", texto: "Pagina Informativa con WordPress.", descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias:["WordPress","Blocksy Companion","Happy Elementor Addons","Blocksy"] ,link:"https://github.com/EmitaQuiel/Milu", imagenes: ["InicioMiluCorto.png","InicioMilu.png"] },

      { titulo: "Raices de Oro", texto: "Menu de restaurante.", descripcion:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.", tecnologias:["WordPress","Elementor","Happy Elementor Addons","Blocksy", "WP Forms", "Amelia","Kaya QR Code Generator"] ,link:"http://raicesdeoro.getenjoyment.net/", imagenes: ["InicioRaicesOroCorto.png","InicioRaicesOro.png","MenuRaicesOro.png","ReservaRaicesOro.png","ContactoRaicesOro.png"] },

    ],
  };

  const proyectosFiltrados = proyectos[categoriaSeleccionada];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
    setProyectoSeleccionado(proyecto);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section id="Proyectos">
      <div
      ref={containerRef}
      className={`${styles.containerProyectos} ${isVisible ? styles.visible : styles.hidden}`}
    >
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
          Proyectos Innovadores en Desarrollo Web, Backend<br /> y Soluciones Personalizadas para Impulsar el Éxito
          Digital
        </h2>
        <p>
          Descubre cómo mis proyectos combinan creatividad, tecnología avanzada<br /> y soluciones eficientes para
          ofrecer experiencias digitales únicas y de alto rendimiento.
        </p>
      </div>

      <div className={`${styles.containerCards} ${isTransitioning ? styles.hidden : ""}`}>
        {proyectosFiltrados.map((proyecto, index) => (
          <CardsProyectos key={index} titulo={proyecto.titulo} texto={proyecto.texto} onClick={() => openModal(proyecto)} />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Detalles del Proyecto"
      >
        <DetallesProyectos proyecto={proyectoSeleccionado} closeModal={closeModal} />
      </Modal>
    </div>
    </section>
  );
}

export default Proyectos;
