// Criar uma descrição do seu projeto

git clone https://github.com/SayuriObana/Trabalho-cloud.git

cd trabalho-cloud

 docker build -t api .      

 docker run -p 3000:3000 api
