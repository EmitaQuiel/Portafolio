import React from "react";
import Card from "./card/Card";

function Projects() {
  return (
    <div>
      <h1>Proyectos</h1>
      <div>
        <Card
          date="2022"
          title="Proyecto Estudiantil"
          link="https://github.com/EmitaQuiel/Matricula-Estudiantil"
          description="Sistema de gestión de matrículas desarrollado en C# para instituciones educativas con Guna Framework y MySQL."
          technologies={[
            "C#",
            "phpMyAdmin",
            "MySQL",
            "XAMPP",
            "Guna FrameWork",
          ]}
        />
        <Card
          date="2024"
          title="E-commerce Poko Palace"
          link="https://github.com/EmitaQuiel/Poko_Palace"
          description="Plataforma de e-commerce en Java con catálogo dinámico, carrito de compras y diseño responsive con Tailwind y Bootstrap."
          technologies={[
            "Java Web Services",
            "Tailwind",
            "MySQL",
            "XAMPP",
            "Bootstrap",
            "HTML & CSS",
          ]}
        />
        <Card
          date="2023"
          title="Sistema de Venta"
          link="https://github.com/EmitaQuiel/SistemaVentas"
          description="Software de ventas para tiendas desarrollado en C# con gestión de inventarios, clientes y reportes detallados en SQL Server."
          technologies={["C#", "SQL SERVER", "Guna Framework"]}
        />
        <Card
          date="2024"
          title="Sistema Abaca"
          link="https://github.com/EmitaQuiel/ProyectoAbaca"
          description="Sistema de mantenimiento para empresa agrícola con C#, .NET y Entity Framework para una gestión eficiente de datos."
          technologies={[
            "C#",
            ".NET",
            "Entity FrameWork",
            "Bootstrap",
            "Razor",
            "HTML & CSS",
          ]}
        />
        <Card
          date="2024"
          title="Base de datos"
          link="https://github.com/EmitaQuiel/PreEntrega_Comision47375_SQL"
          description="Base de datos relacional con vistas, funciones y procedimientos almacenados para optimizar consultas e integridad de datos."
          technologies={["MySQL", "Views", "Functions", "Stored Procedures"]}
        />
        <Card
          date="2025"
          title="DulceFlo"
          link="https://dulceflo.vercel.app/"
          description="Diseño de una landing page moderna para una floristería, destacando su catálogo de productos, servicios de entrega y contacto fácil con clientes."
          technologies={["HTML", "JavaScript", "CSS", "React"]}
        />
        <Card
          date="En Proceso"
          title="ArtGlass"
          link="https://github.com/EmitaQuiel/ArtGlass"
          description="Plataforma web para promocionar una exposición de arte, con galerías interactivas, información de los artistas y sistema de compra de entradas online."
          technologies={["HTML", "JavaScript", "CSS", "React"]}
        />
      </div>
    </div>
  );
}

export default Projects;
