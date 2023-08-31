# Aplicação Angular com Integração Firebase e Google Video Intelligence API 🚀

  O objetivo principal desta aplicação é aproveitar a API da Google para extrair informações relevantes de vídeos e exibi-las de maneira organizada, a fim de demonstrar o poder da Google API (Video intelligence). 🎥🔍

## Funcionalidades ✨

- **Integração com Firebase:** A aplicação utiliza o Firebase para autenticação de usuários, armazenamento de dados e hospedagem. 🔥👤

- **Google Video Intelligence API:** A aplicação faz uso da Google Video Intelligence API para analisar vídeos e extrair informações como detecção de objetos, detecção de rostos, reconhecimento de fala, entre outros. 📊🤖

- **Interface Amigável com Angular e Tailwind CSS:** A interface da aplicação foi desenvolvida com o framework Angular, oferecendo uma experiência de usuário suave e interativa. O Tailwind CSS foi utilizado para a estilização, garantindo um design moderno e responsivo. 💻🎨

## Configuração ⚙️

Antes de executar a aplicação, siga as etapas abaixo para configurar as integrações necessárias:

1. **Firebase Configuração:**
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Obtenha as credenciais de configuração (apiKey, authDomain, projectId, etc.).
   - Cole as credenciais no arquivo `src/environments/environment.ts`.

2. **Google Video Intelligence API Configuração:**
   - Crie um projeto na [Google Cloud Console](https://console.cloud.google.com/).
   - Habilite a Google Video Intelligence API para o projeto.
   - Gere uma chave de API e adicione-a ao código onde for necessário para fazer chamadas à API.

## Instalação 🛠️

Siga as etapas abaixo para instalar e executar a aplicação localmente:

1. Clone este repositório para o seu ambiente local.
2. Navegue até o diretório do projeto: `cd nome-do-diretorio`.
3. Instale as dependências: `npm install`.
4. Inicie a aplicação: `ng serve`.
5. Abra o navegador e acesse: `http://localhost:4200`.

## Uso 🚀

1. Na página inicial, faça login na aplicação utilizando as opções de autenticação fornecidas pelo Firebase.
2. Uma vez autenticado, você terá acesso à funcionalidade de upload de vídeos.
3. Após o upload de um vídeo, a aplicação utilizará a Google Video Intelligence API para analisar o vídeo e extrair informações relevantes.
4. As informações extraídas serão apresentadas de maneira organizada e visualmente agradável na interface da aplicação.

## Contribuição 🤝

Contribuições são bem-vindas! Se você encontrar algum problema, bug ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue neste repositório. Se desejar contribuir diretamente, faça um fork do repositório, crie um branch para suas alterações e, quando estiver pronto, abra um pull request explicando suas alterações.
 
