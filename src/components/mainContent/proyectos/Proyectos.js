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
      { titulo: "Proyecto Estudiantil", texto: "Sistema de matricula en C#.", descripcion: "Este proyecto consiste en un sistema de gestión de matrículas diseñado para instituciones educativas. Desarrollado en C#, el sistema permite a los administradores gestionar estudiantes, cursos, y procesos de inscripción de manera eficiente. Con una interfaz gráfica amigable gracias a Guna Framework, los usuarios pueden navegar fácilmente por las funcionalidades del sistema. Entre sus características principales destacan la creación, modificación, eliminación y búsqueda de matrículas. El sistema incluye validaciones para garantizar la integridad de los datos y utiliza MySQL como base de datos para almacenar de forma segura toda la información.", tecnologias: ["C#","phpMyAdmin","MySQL","XAMPP","Guna FrameWork"], link:"https://github.com/EmitaQuiel/Matricula-Estudiantil",imagenes: ["InicioMatriculaCorta.jpg","InicioMatricula.jpg", "AnadirMatricula.jpg", "MatriculaPsicologia.jpg", "MatriculaIngenieria.jpg" , "MatriculaEducacion.jpg", "MatriculaComunicacion.jpg", "MatriculaActualizar.jpg", "MatriculaBuscar.jpg","AgradecimientoMatricula.jpg","MatriculaEliminar.jpg","MatriculaMontos.jpg"] },

      { titulo: "E-commerce Poko Palace", texto: "E-commerce en Java.",  descripcion: "Este proyecto es una plataforma de comercio electrónico construida en Java, diseñada para ofrecer una experiencia de compra completa. Poko Palace cuenta con un catálogo de productos dinámico, gestión de inventarios, carrito de compras, y un sistema de registro de usuarios y clientes. El diseño visual se implementó utilizando Tailwind y Bootstrap, asegurando un diseño moderno, limpio y adaptable a cualquier dispositivo. Además, el sistema utiliza MySQL como base de datos y ofrece integración con servidores locales a través de XAMPP.", tecnologias: ["Java Web Services","Tailwind","MySQL","XAMPP","Bootstrap","HTML & CSS"], link:"https://github.com/EmitaQuiel/Poko_Palace",imagenes: ["InicioPokoPalaceCorto.png", "InicioPokoPalace.png", "ProductosPokoPalace.jpg", "CarritoPokoPalace.jpg" , "FormularioClientePokoPalace.jpg", "ResumenCompraPokoPalace.jpg", "RegistroPokoPalace.jpg","HistorialCompraPokoPalace.jpg"] },

      { titulo: "Sistema de Venta", texto: "Software de ventas para tienda.",  descripcion: " Este software está diseñado específicamente para pequeñas y medianas tiendas. Desarrollado en C#, permite gestionar ventas, compras, inventarios, clientes, proveedores y empleados. El sistema está respaldado por una base de datos robusta en SQL Server, que garantiza un almacenamiento seguro y eficiente de los datos. Gracias a su interfaz gráfica, creada con Guna Framework, el sistema ofrece una experiencia intuitiva y profesional. Además, incluye reportes detallados de ventas y compras para una mejor toma de decisiones empresariales.", tecnologias: ["C#","SQL SERVER","Guna Framework"], link:"https://github.com/EmitaQuiel/SistemaVentas",imagenes: ["BienvenidaVentasCorto.jpg", "InicioVentas.jpg","CargaVentas.jpg","BienvenidaVentas.jpg", "UsuariosVentas.jpg","MantenimientoCategoriaVentas.jpg", "MantenimientoProductoVentas.jpg","MantenimientoNegocioVentas.jpg","ComprasRegistrar.jpg","DetalleCompra.jpg","DetalleVentaVentas.jpg","ClientesVentas.jpg","ProveedoresVentas.jpg","ReporteVentas.jpg","ReporteCompras.jpg","EMPLEADOS.jpg"] },

      { titulo: "Sistema Abaca", texto: "Sistema de mantenimiento de empresa.",  descripcion: "Este proyecto está diseñado para el mantenimiento y la gestión de una empresa agrícola. Permite administrar datos de agricultores, empleados y facturas, facilitando un flujo de trabajo eficiente. El sistema fue desarrollado utilizando tecnologías modernas como .NET, con integración de Entity Framework para el manejo dinámico de datos y Bootstrap para un diseño responsivo y atractivo. Además, incluye funcionalidades avanzadas como validación de datos y manejo de transacciones.", tecnologias: ["C#",".NET","Entity FrameWork","Bootstrap", "Razor","HTML & CSS"], link:"https://github.com/EmitaQuiel/SistemaVentas",imagenes: ["SesionAbacaCorto.png","SesionAbaca.png", "InicioAbaca.png","MantenimientoAgricultores.png","MantenimientoEmpleados.png","AgregarAgricultor.png","AgregarEmpleado.png","RegistroEmpleados.png","AgregarFactura.png","MantenimientoFactura.png"] },

      { titulo: "Base de datos", texto: "Base de datos con funcionalidades.",  descripcion: "Este proyecto consiste en la creación de una base de datos relacional que incorpora funcionalidades avanzadas como vistas, funciones y procedimientos almacenados. Diseñado para optimizar consultas y garantizar la integridad de los datos, el proyecto incluye un modelo de datos bien estructurado basado en un diagrama entidad-relación.", tecnologias: ["MySQL","Views","Functions","Stored Procedures"], link:"https://github.com/EmitaQuiel/PreEntrega_Comision47375_SQL",imagenes: ["MYSQL.png","Diagrama Entidad-Relacion.png"] },
    ],
    
    "Desarrollo Web": [
      { titulo: "E-commerce Lolilo", texto: "Tienda online con WooCommerce.", descripcion: "Tienda en línea completamente funcional desarrollada con WooCommerce en WordPress. Este proyecto se centra en ofrecer una experiencia de compra ágil y visualmente atractiva. Incluye integración de plugins como WP Forms para formularios personalizados y Elementor para diseños responsivos.", tecnologias: ["WordPress","WooCommerce","WP Forms","Elementor","Blocksy Companion","Happy Elementor Addons","Blocksy"], link:"https://github.com/EmitaQuiel/Lolilo",imagenes: ["InicioLolilo_Corto.png","InicioLolilo.png", "TiendaLolilo.png", "CarritoLolilo.png", "FinalizarCompraLolilo.png", "RecibidoLolilo.png", "ContactoLolilo.png"] },

      { titulo: "Cafeteria SweetMatch", texto: "Pagina Informativa con WordPress.", descripcion:" Página web informativa para una cafetería, diseñada para resaltar sus productos y servicios. Utiliza herramientas avanzadas como Blocksy Companion y Happy Elementor Addons para optimizar la estética y funcionalidad.", tecnologias:["WordPress","Blocksy Companion","Happy Elementor Addons","Blocksy"] ,link:"https://github.com/EmitaQuiel/SweetMatcha", imagenes: ["InicioCortoSweet.png","InicioSweet.png"] },

      { titulo: "Heladeria Milu", texto: "Pagina Informativa con WordPress.", descripcion:"Proyecto web que proporciona información sobre la heladería. Incluye un diseño limpio y responsive, adaptado para atraer clientes.", tecnologias:["WordPress","Blocksy Companion","Happy Elementor Addons","Blocksy"] ,link:"https://github.com/EmitaQuiel/Milu", imagenes: ["InicioMiluCorto.png","InicioMilu.png"] },

      { titulo: "Raices de Oro", texto: "Menu de restaurante.", descripcion:"Página web para un restaurante que incluye un menú interactivo, sistema de reservas y generación de QR para facilitar el acceso a la información. Desarrollado con Elementor y plugins especializados.", tecnologias:["WordPress","Elementor","Happy Elementor Addons","Blocksy", "WP Forms", "Amelia","Kaya QR Code Generator"] ,link:"http://raicesdeoro.getenjoyment.net/", imagenes: ["InicioRaicesOroCorto.png","InicioRaicesOro.png","MenuRaicesOro.png","ReservaRaicesOro.png","ContactoRaicesOro.png"] },
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
