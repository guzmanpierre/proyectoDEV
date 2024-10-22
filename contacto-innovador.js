document.addEventListener("DOMContentLoaded", function () {
  // Función para ajustar el ancho del header
  function adjustHeaderWidth() {
    const header = document.querySelector("header");
    const headerContent = document.querySelector(".header-content");
    const windowWidth = window.innerWidth;
    const contentWidth = headerContent.offsetWidth;

    if (windowWidth > contentWidth) {
      header.style.width = "100%";
    } else {
      header.style.width = contentWidth + "px";
    }
  }

  // Llamar a la función inicialmente y en cada redimensionamiento de la ventana
  window.addEventListener("load", adjustHeaderWidth);
  window.addEventListener("resize", adjustHeaderWidth);

  // Manejo de los elementos sociales
  const socialItems = document.querySelectorAll(".social-item");
  const contactSection = document.querySelector(".contact-section");
  const thankYouSection = document.querySelector(".thank-you-section");

  socialItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (this.classList.contains("email")) {
        e.preventDefault();
        showThankYouMessage();
      }
    });
  });

  function showThankYouMessage() {
    contactSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");

    // Reiniciar la animación del checkmark
    const checkmark = document.querySelector(".checkmark");
    checkmark.style.animation = "none";
    checkmark.offsetHeight; // Trigger reflow
    checkmark.style.animation = null;
  }

  // Animación de entrada para los elementos sociales
  function animateEntrance() {
    socialItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 100);
    });
  }

  // Configurar los estilos iniciales para la animación
  socialItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
  });

  // Ejecutar la animación después de un breve retraso
  setTimeout(animateEntrance, 300);

  // Manejar el menú de navegación en dispositivos móviles
  const menuToggle = document.createElement("button");
  menuToggle.textContent = "☰";
  menuToggle.className =
    "menu-toggle md:hidden text-white text-2xl focus:outline-none";
  document.querySelector("header .header-content").appendChild(menuToggle);

  const nav = document.querySelector("nav");
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("hidden");
    nav.classList.toggle("block");
  });

  // Asegurarse de que el menú se muestre correctamente en pantallas más grandes
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      nav.classList.remove("hidden");
      nav.classList.add("block");
    } else {
      nav.classList.add("hidden");
      nav.classList.remove("block");
    }
  });
});