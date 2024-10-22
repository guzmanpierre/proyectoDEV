document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const contentArea = document.getElementById("detailed-content");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");
      updateContent(this);
    });
  });

  // Inicializar el contenido con la primera opción
  updateContent(options[0]);

  function updateContent(selectedOption) {
    const contentType = selectedOption.querySelector(".info .main").textContent;
    let content = "";

    switch (contentType) {
      case "Formación Académica":
        content = `
          <h3>Formación Académica</h3>
          <ul>
            <li>Licenciatura en Relaciones Comerciales / ESCA STO TOMAS</li>
            <li>Certificacion Google Cloud Master</li>
            <li>Certificación en Análisis de Datos, Google DataStudio  (2020)</li>
            <li>Certificación en Chatsbots FLOW XO</li>
          </ul>
        `;
        break;
      case "Experiencia Relevante":
        content = `
          <h3>Experiencia Relevante</h3>
          <ul>
            <li>Enlace y Apoyo Administrativo, Dirección de Educación Virtual del IPN (03/2023 - Presente)</li>
            <li>Analista de Datos, Dirección de Educación Superior del IPN (2022 - 2023)</li>
            <li>Supervisor de Obra, RENUEVA AS de CV (2019 - 2022)</li>
            <li>Desarrollador de Negocios y Proyectos LATAM, Auto-Acción México (2018 - 2019)</li>
            <li>Coordinador de Implementaciones CRM, Sector Automotriz México y LATAM (2014 - 2018)</li>
            <li>Consultor Elite Diamante Desarrollo de cuentas, NEXTEL DE MEXICO (2009 - 2013)</li>
          </ul>
        `;
        break;
      case "Skills Clave":
      default:
        content = `
          <h3>Habilidades Clave</h3>
          <ul>
            <li>Análisis de datos</li>
            <li>Gestión de proyectos</li>
            <li>Implementación de CRM</li>
            <li>Desarrollo de sistemas de seguimiento</li>
            <li>Coordinación de equipos</li>
            <li>Chatsbots</li>
            <li>Procesos y Certificacion de Atencion al Cliente</li>
          </ul>
        `;
        break;
    }

    contentArea.innerHTML = content;

    // Añadir una animación suave al cambiar el contenido
    contentArea.style.opacity = 0;
    setTimeout(() => {
      contentArea.style.opacity = 1;
    }, 50);
  }
});