document.addEventListener('DOMContentLoaded', () => {
  // Menu Hamburguer
  const mobileMenu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');
  
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !mobileMenu.contains(e.target)) {
      navList.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
  
  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (window.innerWidth <= 768) {
          navList.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      }
    });
  });
  
  // Envio de formulário de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
      const formStatus = document.getElementById('form-status');
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = "Por favor, insira um e-mail válido.";
        formStatus.className = 'error';
        formStatus.style.position = 'static';
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
      }
      
      const templateParams = {
        from_name: nome,
        from_email: email,
        message: mensagem,
      };
      
      emailjs.send("service_0vp9zkg", "template_qxcsrp2", templateParams)
        .then(() => {
          formStatus.textContent = "Mensagem enviada com sucesso!";
          formStatus.className = 'success';
          formStatus.style.position = 'static';
          contactForm.reset();
        })
        .catch((error) => {
          formStatus.textContent = "Erro ao enviar mensagem. Tente novamente.";
          formStatus.className = 'error';
          formStatus.style.position = 'static';
          console.error("Erro:", error);
        })
        .finally(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          
          // Rolagem suave para o status
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          
          // Resetar status após 5 segundos
          setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
            formStatus.style.position = 'absolute';
            formStatus.style.left = '-999px';
          }, 5000);
        });
    });
  }
  
  // Modal de repositório
  function openModal(githubUrl) {
    const modal = document.getElementById("repositoryModal");
    const githubLink = document.getElementById("github-link");
    
    githubLink.href = githubUrl;
    modal.style.display = "flex";
    document.body.classList.add('modal-open');
    
    // Animação de entrada
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
    
    document.getElementById("github-username").focus();
  }
  
  function closeModal() {
    const modal = document.getElementById("repositoryModal");
    modal.classList.remove('active');
    
    setTimeout(() => {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }, 300);
  }
  
  // Fechar modal ao clicar fora
  document.getElementById("repositoryModal").addEventListener('click', function(e) {
    if (e.target === this) {
      closeModal();
    }
  });
  
  // Adicionar usuário como colaborador
  function addUser() {
    const username = document.getElementById("github-username").value.trim();
    const formStatus = document.getElementById("form-status");
    
    if (!username) {
      alert("Por favor, insira um nome de usuário válido.");
      return;
    }
    
    const templateParams = {
      from_name: username,
      subject: "Adicionar como colaborador",
      message: `Por favor, adicione o usuário ${username} como colaborador nos repositórios privados.`,
    };
    
    emailjs.send("service_0vp9zkg", "template_qxcsrp2", templateParams)
      .then(() => {
        alert(`Solicitação para adicionar ${username} foi enviada com sucesso!`);
        closeModal();
      })
      .catch((error) => {
        alert("Erro ao enviar solicitação. Tente novamente.");
        console.error("Erro:", error);
      });
  }
  
  /// Função para abrir o lightbox
function abrirLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  lightboxImg.src = src;
  lightbox.style.display = "flex";
  lightbox.focus();
  
}

// Função para fechar o lightbox
function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
  
  // Dark mode toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Animação do ícone
    toggleBtn.style.transform = isDark ? 'rotate(180deg)' : 'rotate(0)';
  });
  
  // Fechar modais com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      fecharLightbox();
    }
  });
  
  // Carregamento suave das imagens
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  }
});