// Criar uma descrição do seu projeto

// Clonar o repository
git clone https://github.com/SayuriObana/Trabalho-cloud.git

// Abrir a pasta do projeto
cd trabalho-cloud

// Construir a imagem Docker
 docker build -t api .      

// Rodar imagem
 docker run -p 3000:3000 api
