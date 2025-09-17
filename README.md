Vitta Web

Vitta Web é uma plataforma de saúde digital que facilita o acesso a consultas, triagens e monitoramento remoto. Foi construída com React + TailwindCSS, com foco em acessibilidade, usabilidade e uma interface limpa.

🧪 Funcionalidades

Tela de agendamento de saúde digital com informações sobre como funciona, primeiro acesso e tutorial em PDF.

Página de FAQ com busca por palavra-chave.

Página de ajuda / suporte onde o usuário pode enviar feedback/imagens (print) do problema.

Monitoramento diário: pressão arterial, glicemia (se aplicável), respiração, batimentos.

Página de notificações com alertas de consulta.

Triagem “marcar no boneco” + triagem textual com perguntas.

Página de “Integrantes” mostrando quem fez o projeto (foto, RA, links de LinkedIn e GitHub).

🎨 Tecnologias

React

React Router (pra navegação entre páginas)

TailwindCSS para estilização utilitária

JavaScript / TypeScript (se você já estiver usando TS ou quiser)

Estrutura de componentes (Navbar, Footer, etc)

🚀 Como rodar o projeto localmente

Tenha Node.js instalado.

Clone este repositório.

git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto


Instale as dependências:

npm install


ou

yarn


Rode em modo de desenvolvimento:

npm run dev


ou

yarn dev


Abra o navegador em http://localhost:3000 (ou porta que o React informar).

✅ Boas práticas implementadas

Uso de formulários com validação básica: todos os campos obrigatórios devem ser preenchidos; se tiver diabetes, campo de glicemia aparece; mensagens de erro e sucesso.

Feedback visual ao usuário (mensagem, aviso, redirecionamento).

Layout responsivo: adaptação para telas menores.

Uso de TailwindCSS para estilização utilitária — evitando CSS rígido e repetido.

Componentes reutilizáveis (Navbar, Footer, Cards, etc).

💡 Possíveis melhorias futuras

Melhor validação nos campos numéricos (ex: limites válidos para pressão, glicemia, etc).

Adicionar ícones ou animações mais suaves nos cards de integrantes.

Melhorar experiência móvel: menu estilo “hamburger” para Navbar, otimizações de layout para celulares.

Dark mode

Internacionalização / múltiplos idiomas

🗂 Estrutura de pastas sugerida
/
├── public/
│   └── assets estáticos (imagens, pdfs, favicon, etc)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── outros componentes pequenos (Card, Botão, etc)
│   ├── pages/
│   │   ├── AgendarTele.jsx
│   │   ├── Monitoramento.jsx
│   │   ├── Triagem.jsx
│   │   ├── Triagemd.jsx
│   │   └── outras páginas
│   ├── routes/ ou App.jsx (configuração de rotas)
│   ├── styles/ (Tailwind config, etc)
│   └── utils/ (helpers, validações, etc)
├── tailwind.config.js
├── package.json
└── README.md

📋 Scripts úteis

npm run dev — inicia servidor de desenvolvimento

npm run build — cria versão de produção otimizada

npm run preview — ver versão de produção localmente (se estiver configurado)

⚙ Configurações do Tailwind específicas

Cores personalizadas no tailwind.config.js (por exemplo: roxo do site, tons usados)

Adicionar animações personalizadas, como fade, efeito pop de bolinha no triagem, etc.

Responsividade com breakpoints Tailwind (sm, md, lg, xl)

📌 Detalhes visuais / identidade

Logotipo: images/vittahc (1).png

Slogan usado: “Saúde que se conecta com você.”

Cores principais: roxo, branco, tons neutros + gradientes nos elementos “hero”.

Estilo de botões arredondados, sombras suaves, efeitos de hover/brilho.