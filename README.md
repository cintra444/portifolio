# Portfólio | Eber Cintra

Portfólio profissional de **Eber Cintra**, Desenvolvedor Full Stack, com foco em projetos web e mobile.

## Visão geral

Este projeto é um site estático que apresenta:
- Perfil profissional e stack técnica
- Projetos com links de aplicação e repositório
- Resumo de trajetória e diferenciais
- Formulário de contato com envio via EmailJS

## Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- EmailJS
- Font Awesome

## Funcionalidades principais

- Navegação fixa com scroll suave
- Menu responsivo para mobile
- Tema claro/escuro com persistência no `localStorage`
- Seção `Works` com cards de projetos
- Lightbox para imagens
- Modal para solicitação de acesso a repositórios privados
- Formulário de contato com validação e feedback visual

## Estrutura do projeto

```text
portifolio/
|-- index.html
|-- style.css
|-- script.js
|-- aplicacao.html
|-- como-executar.html
|-- README.md
`-- assets/
```

## Como rodar localmente

1. Clone ou baixe o projeto.
2. Abra a pasta no terminal.
3. Escolha uma opção:

**Opção A: abrir direto no navegador**
- Execute `index.html`.

**Opção B: servidor local (recomendado)**
```bash
npx serve .
```
ou
```bash
python -m http.server 8000
```

4. Acesse no navegador:
- `http://localhost:3000` (ou porta exibida)

## Configuração do formulário (EmailJS)

Se quiser reutilizar este portfólio com sua própria conta:

1. Crie conta em [EmailJS](https://www.emailjs.com/)
2. Crie um `Service` e um `Template`
3. Atualize a chave pública em `index.html` (`emailjs.init(...)`)
4. Atualize IDs de serviço/template em `script.js`

## Projetos em destaque

- Escribo
- Fruttyoog (API)
- FruttyoogApp
- Petrópolis Participa (API e Front)
- Gerenciador de Eventos (API e Front)
- PopCornHub
- Caso-Corunas
- Concessionária (Java)

## Publicação

Checklist rápido antes de publicar:
- Preencher `og:url` com a URL final do site
- Garantir `og:image` com URL absoluta
- Revisar links externos e repositórios
- Rodar teste de qualidade no Lighthouse

## Contato

- Email: **cintra.eber@gmail.com**
- GitHub: [github.com/cintra444](https://github.com/cintra444)
- LinkedIn: [linkedin.com/in/ebercintra](https://www.linkedin.com/in/ebercintra/)
- WhatsApp: **(22) 98835-5740**

CV disponível em `assets/eber_curriculo_.pdf`.

## Licença

© 2025 Eber Cintra. Todos os direitos reservados.
