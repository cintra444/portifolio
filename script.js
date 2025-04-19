//menu hamburguer
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


//função do email

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert("Digite um e-mail válido.");
  return;
}

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: mensagem,
    };

    console.log("parametros enviados: ", templateParams);

    emailjs.send("service_0vp9zkg", "template_qxcsrp2", templateParams).then(
      function (response) {
        console.log("Resposta do EmailJS:", response);
        alert("Mensagem enviada com sucesso!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert(
          "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
        );
      }
    );
  }); 
  

  
// Função para abrir o modal e definir o link do GitHub

function openModal(githubUrl) {
  document.getElementById("github-link").href = githubUrl;
  document.getElementById("repositoryModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("repositoryModal").style.display = "none";
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      fecharLightbox();
    }
  });
}



// Função email do modal
function addUser() {
  const username = document.getElementById("github-username").value;

  if (username) {
    // Parâmetros para o EmailJS
    const templateParams = {
      from_name: username, // Nome do usuário do GitHub
      subject: "Adicionar como colaborador",
      message: `Por favor, adicione o usuário ${username} como colaborador nos repositórios privados.`,
    };

    // Enviar o e-mail usando EmailJS
    emailjs.send("service_0vp9zkg", "template_qxcsrp2", templateParams).then(
      function (response) {
        alert(`Usuário ${username} foi enviado para o e-mail com sucesso!`);
        closeModal();
      },
      function (error) {
        alert(
          "Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde."
        );
        console.error("Erro:", error);
      }
    );
  } else {
    alert("Por favor, insira um nome de usuário válido.");
  }
}

//modal


// Função para abrir o lightbox

function abrirLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
