<h2 data-importer="text" align="left">📘 Atividade Prática 2 - N2</h2>

<h3 data-importer="text" align="left">👨‍💻 Discentes</h3>

<p data-importer="text" align="left">● Renan de Souza Stockler Morais (2025015820)<br>● João Pedro Gonçalves Sabino de Oliveira (2025013361)</p>

<hr>

<h2 data-importer="text" align="left">📄 Regra de Negócio Adicionada</h2>

<p data-importer="text" align="left">● Validação de nota do filme: a nota do filme deve ser um valor no intervalo [1,5]. Fizemos isso com o intuito de deixar o projeto mais próximo de uma aplicação real.</p>

<hr>

<h2 data-importer="text" align="left">💻 Como Executar o Projeto</h2>

<h3 data-importer="text" align="left">1. Clonar o Repositório</h3>

<p data-importer="text" align="left">1.1 git clone https://github.com/renanmoraiss/ATV2_N2_XDES03.git<br>1.2 Abrir a pasta raiz ("ATV2_N2_XDES03") no VS Code</p>

<h3 data-importer="text" align="left">2. Configurar o Backend</h3>

<p data-importer="text" align="left">2.1 No terminal do VS Code: <br>- cd backend<br>- npm install<br>2.2 Criar o arquivo .env na raiz da pasta backend e colocar: <br>- DATABASE_URL = "file:./app.db"<br>- JWT_SECRET = "sua chave secreta"<br>2.3 No terminal, sincronizar o Prisma com o BD:<br>- npx prisma db push</p>

<h3 data-importer="text" align="left">3. Configurar o Frontend</h3>

<p data-importer="text" align="left">3.1 No terminal do VS Code:<br>- cd ..<br>- cd frontend/my-app<br>- npm install<br>3.2 Criar o arquivo .env.local na pasta frontend/my-app e colocar:<br>- NEXT_PUBLIC_API_URL = "http://localhost:3001"</p>