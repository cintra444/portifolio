# Portfólio - Eber Cintra

Site de portfólio profissional de **Eber Cintra**, Desenvolvedor Full Stack. Apresenta perfil, projetos, experiência e formulário de contato.

---

## Sobre o projeto

O portfólio é uma aplicação web estática (HTML, CSS e JavaScript) que reúne:

- **Home** – Apresentação e stack (Java, Spring Boot, React/React Native, APIs REST, PostgreSQL)
- **Works** – Projetos com descrição, tecnologias e links para aplicação/repositório
- **About** – Trajetória, formação e diferenciais
- **Contact** – Formulário de contato com envio via EmailJS

Inclui tema claro/escuro (persistido em `localStorage`), menu responsivo, lightbox para imagens dos projetos e modal para solicitar acesso a repositórios privados no GitHub.

---

## Tecnologias

- **HTML5**
- **CSS3** (variáveis, responsividade, tema claro/escuro)
- **JavaScript** (vanilla)
- **EmailJS** – envio de e-mails pelo formulário de contato
- **Font Awesome** – ícones

---

## Estrutura do projeto

```
portifolio/
├── index.html          # Página principal do portfólio
├── aplicacao.html      # Página "em desenvolvimento" para apps sem deploy
├── como-executar.html  # Instruções para executar o .jar (Concessionária)
├── style.css           # Estilos globais e responsivos
├── script.js           # Lógica (menu, formulário, modal, lightbox, tema)
├── README.md           # Esta documentação
└── assets/             # Imagens, logos, PDFs e arquivos dos projetos
    ├── logo.png
    ├── Perfil.png
    ├── eber_curriculo_.pdf
    ├── projeto_final.jar
    └── ... (imagens dos projetos)
```

---

## Funcionalidades

| Recurso | Descrição |
|--------|------------|
| **Navegação** | Menu fixo com links para Home, Works, About e Contact; scroll suave |
| **Menu mobile** | Menu hambúrguer em telas pequenas |
| **Tema claro/escuro** | Alternância por ícone na barra; preferência salva em `localStorage` |
| **Formulário de contato** | Envio via EmailJS com validação de e-mail e feedback de sucesso/erro |
| **Modal repositório** | Ao clicar em "Repository" de projeto privado, abre modal para informar usuário GitHub e solicitar acesso |
| **Lightbox** | Clique nas imagens dos projetos para ampliar |
| **Acessibilidade** | Uso de `aria-label`, `role`, `tabindex` e `aria-live` onde aplicável |

---

## Como executar localmente

1. **Requisitos:** Nenhum. Basta um navegador atual.

2. **Opção A – Abrir o arquivo**
   - Abra `index.html` diretamente no navegador (duplo clique ou arrastar para o navegador).

3. **Opção B – Servidor local (recomendado)**
   - Na pasta do projeto, suba um servidor HTTP. Exemplos:

   **Node.js (npx):**
   ```bash
   npx serve .
   ```

   **Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **VS Code:** Use a extensão "Live Server" e abra com "Go Live".

4. Acesse no navegador:
   - Arquivo direto: `file:///.../index.html`
   - Servidor: `http://localhost:3000` (ou porta informada)

---

## Páginas auxiliares

- **`aplicacao.html`** – Exibida quando o link "Aplicação" de um projeto ainda não tem deploy; informa que está em desenvolvimento.
- **`como-executar.html`** – Instruções para baixar e executar o `projeto_final.jar` (sistema Concessionária em Java), incluindo link para download do Java.

---

## Projetos em destaque (Works)

- **Escribo** – Gerador de plano de aula com API Gemini e Supabase
- **Fruttyoog** – API REST (Java/Spring Boot, JWT, PostgreSQL, Twilio, iText)
- **FruttyoogApp** – App React Native consumindo a API Fruttyoog
- **Petrópolis Participa** – API e site React para solicitação de serviços à prefeitura
- **Gerenciador de Eventos** – API e front React (desafio Neki)
- **PopCornHub** – App React Native com API de filmes
- **Caso-Corunas** – Jogo interativo (HTML/CSS/JS)
- **Concessionária** – Sistema Java (.jar) com instruções em `como-executar.html`

Cada projeto tem botões **Aplicação** e **Repository**; repositórios privados abrem o modal para solicitar acesso.

---

## Contato e redes

- **E-mail:** cintra.eber@gmail.com  
- **GitHub:** [cintra444](https://github.com/cintra444)  
- **LinkedIn:** [ebercintra](https://www.linkedin.com/in/ebercintra/)  
- **WhatsApp:** (22) 98835-5740  

CV em PDF disponível em `assets/eber_curriculo_.pdf` (link no rodapé do site).

---

## Configuração do formulário de contato (EmailJS)

O envio do formulário usa **EmailJS** (serviço e template configurados no código). Para usar em outro domínio/e-mail:

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/).
2. Configure um **Service** e um **Template** no painel.
3. Em `index.html`, ajuste o `emailjs.init('SEU_PUBLIC_KEY')`.
4. Em `script.js`, troque `"service_0vp9zkg"` e `"template_qxcsrp2"` pelo ID do seu serviço e do seu template.

---

## Como melhorar este portfólio

Sugestões práticas para evoluir o site (SEO, performance, acessibilidade e conteúdo).

### SEO e meta tags
- **Meta description** – Adicionar `<meta name="description" content="...">` no `<head>` para melhorar resultado em buscas. ✅ Já incluído.
- **Open Graph** – Incluir `og:title`, `og:description`, `og:image` e `og:url` para preview ao compartilhar (LinkedIn, WhatsApp, etc.). ✅ Já incluído. **Ao publicar o site**, preencha no `index.html` a URL completa em `og:url` e em `og:image` (ex.: `https://seusite.com/assets/Perfil.png`) para o preview funcionar ao compartilhar o link.
- **Favicon** – Adicionar `<link rel="icon" href="assets/favicon.ico">` (ou PNG) para identificação na aba do navegador. ✅ Usando `assets/logo.png`; pode trocar por um `favicon.ico` em `assets/` se preferir.
- **Título por seção** – Manter um único `<h1>` (já feito) e hierarquia correta de `h2`/`h3`.

### Performance
- **Fonte Poppins** – Carregar via Google Fonts (ou similar) para o texto usar Poppins de fato em vez só do fallback Arial.
- **Lazy loading** – Usar `loading="lazy"` nas imagens dos projetos (e opcionalmente `width`/`height` para evitar layout shift).
- **Imagens** – Comprimir PNG/JPG (TinyPNG, Squoosh) e considerar WebP para telas maiores.
- **Scripts** – Manter EmailJS e Font Awesome por CDN; evitar bloquear a renderização (scripts no final do `<body>` já ajudam).

### Acessibilidade
- **IDs únicos** – Não repetir `id` na página (ex.: um único `#form-status` para o formulário de contato e outro id para o modal).
- **Status do formulário** – Exibir a mensagem de sucesso/erro em área visível (abaixo do botão), não só para leitores de tela.
- **Preferência de tema** – Respeitar `prefers-color-scheme: dark` na primeira visita antes de aplicar tema salvo.
- **Lightbox** – Botão “Fechar” visível e foco preso dentro do lightbox até fechar (teclado: ESC já existe).
- **Contraste** – Garantir razão de contraste adequada (WCAG) nos textos e botões em tema claro e escuro.

### UX e conteúdo
- **Call to action** – Deixar o botão “Me Contrate” ou o formulário em evidência; considerar um CTA na seção Home.
- **Projetos** – Incluir 1–2 frases de resultado ou aprendizado por projeto (ex.: “Reduziu tempo de X” ou “Stack usada: …”).
- **Sobre** – Manter texto objetivo; opcional: linha do tempo ou “soft skills” em formato de lista ou ícones.
- **Contato** – Além do formulário, manter e-mail e WhatsApp visíveis (já no rodapé); considerar link direto para agendar conversa.

### Código e manutenção
- **Correção de texto** – Revisar nomes (ex.: “Escribo” em vez de “Escibro”) e descrições dos projetos.
- **Links externos** – Manter `target="_blank"` e `rel="noopener noreferrer"` em links que saem do site.
- **Validação** – Validar HTML (W3C) e testar com Lighthouse (Performance, Acessibilidade, SEO, Boas práticas).

### Ideias opcionais
- **Blog ou “Artigos”** – Seção com posts técnicos ou casos de estudo para demonstrar expertise.
- **Certificados** – Bloco ou link para certificados (Serratec, cursos, etc.).
- **Testemunhos** – Depoimentos de clientes ou colegas, se houver.
- **Analytics** – Google Analytics ou alternativa leve para entender visitas e comportamento (respeitando LGPD/cookies).

Parte dessas melhorias já foi aplicada no código (typo, IDs únicos, fonte Poppins, status do formulário visível, lazy loading nas imagens). O restante pode ser implementado aos poucos.

---

## Licença

© 2025 Eber Cintra. Todos os direitos reservados.
