document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");
  const toggleBtn = document.getElementById("theme-toggle");
  const navLinks = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));

  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      navList.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    document.addEventListener("click", (e) => {
      if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
        navList.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  }

  navLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 85,
          behavior: "smooth",
        });
      }

      if (window.innerWidth <= 768 && navList) {
        navList.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  const sections = Array.from(document.querySelectorAll("section[id]"));
  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isCurrent);
    });
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const mensagem = document.getElementById("mensagem").value;
      const formStatus = document.getElementById("form-status");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = "Por favor, insira um e-mail válido.";
        formStatus.className = "error";
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
      }

      const templateParams = {
        from_name: nome,
        from_email: email,
        message: mensagem,
      };

      emailjs
        .send("service_0vp9zkg", "template_qxcsrp2", templateParams)
        .then(() => {
          formStatus.textContent = "Mensagem enviada com sucesso!";
          formStatus.className = "success";
          contactForm.reset();
        })
        .catch((error) => {
          formStatus.textContent = "Erro ao enviar mensagem. Tente novamente.";
          formStatus.className = "error";
          console.error("Erro:", error);
        })
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });

          setTimeout(() => {
            formStatus.textContent = "";
            formStatus.className = "";
          }, 5000);
        });
    });
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  function openModal(githubUrl) {
    const modal = document.getElementById("repositoryModal");
    const githubLink = document.getElementById("github-link");

    githubLink.href = githubUrl;
    modal.style.display = "flex";
    document.body.classList.add("modal-open");

    setTimeout(() => modal.classList.add("active"), 10);
    document.getElementById("github-username").focus();
  }

  function closeModal() {
    const modal = document.getElementById("repositoryModal");
    modal.classList.remove("active");

    setTimeout(() => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }, 300);
  }

  document.getElementById("repositoryModal")?.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  function addUser() {
    const username = document.getElementById("github-username").value.trim();

    if (!username) {
      alert("Por favor, insira um nome de usuário válido.");
      return;
    }

    const templateParams = {
      from_name: username,
      subject: "Adicionar como colaborador",
      message: `Por favor, adicione o usuário ${username} como colaborador nos repositórios privados.`,
    };

    emailjs
      .send("service_0vp9zkg", "template_qxcsrp2", templateParams)
      .then(() => {
        alert(`Solicitação para adicionar ${username} foi enviada com sucesso!`);
        closeModal();
      })
      .catch((error) => {
        alert("Erro ao enviar solicitação. Tente novamente.");
        console.error("Erro:", error);
      });
  }

  window.addUser = addUser;

  function abrirLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = src;
    lightbox.style.display = "flex";
    lightbox.focus();
  }

  window.abrirLightbox = abrirLightbox;
  window.fecharLightbox = fecharLightbox;

  function fecharLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else if (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.style.transform = isDark ? "rotate(180deg)" : "rotate(0)";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      fecharLightbox();
    }
  });

  const revealItems = document.querySelectorAll("#home .content, #works .content, #about .about-content, #contact .formulario, section h2");
  revealItems.forEach((item) => item.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }
});

