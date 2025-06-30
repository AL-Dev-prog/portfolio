  function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(id).classList.add("flex");
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove("flex");
    document.getElementById(id).classList.add("hidden");
  }

      window.addEventListener("scroll", () => {
      const nav = document.getElementById("navbar");
      const scrollProfile = document.getElementById("scrollProfile");
      const scrollBtn = document.getElementById("scrollToTopBtn");

      if (window.scrollY > 50) {
        nav.classList.add("sticky-nav");
        scrollBtn.style.display = "block";
      } else {
        nav.classList.remove("sticky-nav");
        scrollBtn.style.display = "none";
      }

      scrollProfile.classList.add("show");
      clearTimeout(window.hideProfileTimeout);
      window.hideProfileTimeout = setTimeout(() => {
        scrollProfile.classList.remove("show");
      }, 1000);
    });

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuIcon.textContent = mobileMenu.classList.contains("hidden") ? "menu" : "close";
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add("hidden");
        menuIcon.textContent = "menu";
      });
    });

    document.getElementById("scrollToTopBtn").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });