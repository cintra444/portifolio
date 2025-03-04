/* global emailjs */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ver-mais').forEach(button => {
        button.addEventListener('click', () => {
            let paragraph = button.previousElementSibling;
            paragraph.classList.toggle('show-more');
            button.textContent = paragraph.classList.contains('show-more') ? '[-]' : '[+]';
        });
    });
});

function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
   navbar.classList.toggle("responsive");
}


//função do email

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        const templateParams = {
            from_name: nome,
            from_email: email,
            message: mensagem
        };

        console.log("parametros enviados: ", templateParams);

        emailjs.send("service_0vp9zkg","template_qxcsrp2", templateParams)
            .then(function(response) {
                console.log("Resposta do EmailJS:", response)
                alert('Mensagem enviada com sucesso!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
            });
        });
    
