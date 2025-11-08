# 💉 Vitta Web | Saúde que se conecta com você

<div align="center">
  
  **Vitta Web** é uma plataforma inovadora de saúde digital que visa simplificar o acesso a agendamentos, triagens e, principalmente, o monitoramento remoto contínuo de pacientes.
  
  Desenvolvido com foco em **acessibilidade** e **usabilidade**, oferece uma interface limpa e intuitiva para uma experiência de saúde mais conectada.

  ---
  
  [![Tecnologia](https://img.shields.io/badge/Tecnologia-React%20%7C%20TailwindCSS-blueviolet?style=for-the-badge&logo=react&logoColor=cyan)](https://pt-br.reactjs.org/)
  [![Navegação](https://img.shields.io/badge/Roteamento-React%20Router%20DOM-orange?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main)
</div>

---

## ✨ Funcionalidades Principais

| Categoria | Funcionalidade | Detalhes |
| :--- | :--- | :--- |
| **Monitoramento** | 🩺 **Monitoramento Diário** | Registro de pressão arterial, glicemia (se aplicável), respiração e batimentos cardíacos. |
| **Interação** | 🚨 **Triagem Inteligente** | Triagem visual ("marcar no boneco") e textual com perguntas guiadas. |
| **Comunicação** | 🔔 **Notificações & Alertas** | Página dedicada a alertas de consultas, triagens pendentes e retornos médicos. |
| **Agendamento** | 📅 **Agendamento Digital** | Tela com informações de funcionamento, primeiro acesso e tutorial em PDF para teleconsultas. |
| **Suporte** | ❓ **FAQ e Ajuda** | Página de perguntas frequentes com busca por palavra-chave e formulário de suporte para envio de feedback/imagens (print). |
| **Identidade** | 🧑‍💻 **Integrantes** | Página de "Integrantes" com foto, RA e links de contato (LinkedIn, GitHub) dos desenvolvedores. |

---

## 💻 Stack Tecnológico

O projeto foi construído utilizando as seguintes tecnologias de desenvolvimento **Front-End**:

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca JavaScript para construção da interface de usuário. |
| **React Router DOM** | Gerenciamento de navegação entre as diferentes páginas da aplicação. |
| **Tailwind CSS** | Framework CSS utilitário focado em agilizar e padronizar a estilização. |
| **JavaScript / TypeScript** | Linguagens de programação base para a lógica da aplicação. |
| **Estrutura Modular** | Organização do código em componentes reutilizáveis (`Navbar`, `Footer`, `Cards`). |

---

## 📂 Estrutura do Projeto

A organização do código segue a estrutura padrão de projetos React/Vite com a divisão clara entre componentes reutilizáveis e páginas específicas:

VITTA-WEB/
├── node_modules/         # Dependências do projeto

├── public/               # Assets estáticos (imagens, etc.)

└── src/

├── assets/

│   └── css/

│       └── triagem.css

├── components/

│   ├── footer.tsx    # Componente de rodapé reutilizável

│   └── navbar.tsx    # Componente de navegação reutilizável

└── pages/            # Componentes de página (rotas da aplicação)

├── agendartele.tsx

├── ajuda.tsx

├── faq.tsx

├── homepage.tsx

├── integrantes.tsx

├── monitoramento.tsx

├── notificacoes.tsx

├── triagem.tsx

└── triagemd.tsx

├── App.css

├── App.tsx           # Componente principal / Roteamento

├── main.tsx          # Ponto de entrada (renderiza App)

└── vite-env.d.ts

├── index.html            # Arquivo HTML principal

├── package.json          # Metadados e lista de dependências

└── README.md


---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para instalar e executar o Vitta Web em seu ambiente de desenvolvimento.

### Pré-requisitos
* É necessário ter o **[Node.js](https://nodejs.org/)** instalado em sua máquina.
* O projeto utiliza o **Vite** para ambiente de desenvolvimento.

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/GabyBonfim/VITTA-WEB.git](https://github.com/GabyBonfim/VITTA-WEB.git)
    cd VITTA-WEB
    ```
    *(**DICA:** Utilizar o GitHub Desktop é uma ótima alternativa ao terminal!)*

2.  **Instale as dependências**
    ```bash
    npm install
    # ou
    yarn
    ```

3.  **Execute em modo de desenvolvimento**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

Abra seu navegador e acesse a URL que o terminal informar, geralmente: `http://localhost:5173` ou `http://localhost:3000`.

---

## ✅ Boas Práticas & Qualidade de Código

* **Validação de Formulários:** Uso de validação básica (campos obrigatórios, exibição condicional do campo de glicemia).
* **Feedback Visual:** Mensagens claras de erro/sucesso e lógica de redirecionamento após o envio de dados.
* **Layout Responsivo:** Adaptação da interface para garantir a usabilidade em diferentes tamanhos de tela (desktop e mobile).
* **Estilização Eficiente:** Uso de TailwindCSS para um sistema de design coeso e manutenível.
* **Componentização:** Estrutura baseada em componentes reutilizáveis (`Navbar`, `Footer`, `Cards`).

---

## 🎨 Detalhes Visuais & Identidade

* **Logotipo:** `images/logotipo-vitta.png`
* **Slogan:** “Saúde que se conecta com você.”
* **Cores Principais:** Roxo, branco, tons neutros, com destaque para gradientes nos elementos de destaque ("hero").
* **Estilo:** Botões arredondados, sombras suaves e efeitos de *hover* para feedback interativo.

---

## 💬 Contato e Feedback

Se você curtiu o projeto, ou encontrou algo que possa ser melhorado, **deixe seu feedback!**

| Nome | Função | E-mail |
| :--- | :--- | :--- |
| **Gabriely Bonfim** | DESIGN & DEV FRONT-END | `gabybonfim05@gmail.com` |
| **Mirelly Sousa** | DESIGN & DEV FRONT-END | `mirellysousa@gmail.com` |
| **Ruan Luca** | DEV BACK-END | `ruanlfc@gmail.com` |

---

## 🔗 Links Adicionais

| Descrição | Link |
| :--- | :--- |
| **Repositório do Projeto** | [GitHub - VITTA-WEB](https://github.com/GabyBonfim/VITTA-WEB.git) |
| **Vídeo de Apresentação sprint 4** | [Vídeo da Solução no YouTube](https://youtu.be/BzSB1DgoSYI) |
| **Projeto - Vercel** | [Deploy no Vercel](https://vitta-web.vercel.app/) |
| **Projeto - Render** | [Deploy no Vercel](https://vitta-web-backend.onrender.com) |
