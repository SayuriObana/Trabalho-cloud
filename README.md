<h1 align="center">Trabalho - Arquitetura Cloud</h1>

<p align="center">
  API simples construída com <strong>Node.js</strong> e <strong>Express</strong> para gerenciamento de bonecas 🎀,
  containerizada com <strong>Docker</strong> como parte da disciplina de Arquitetura Cloud.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square"/>
  <img src="https://img.shields.io/badge/docker-suportado-blue?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square"/>
</p>

---

## ✨ Tecnologias

- 🟢 Node.js
- ⚡ Express.js
- 🐳 Docker
- 💡 JavaScript

---

## 📌 Funcionalidades

| Método | Rota       | Descrição                            |
|--------|------------|----------------------------------------|
| GET    | `/boneca`  | Retorna todas as bonecas cadastradas   |
| POST   | `/boneca`  | Adiciona uma nova boneca à lista       |

### 🔽 Exemplo de requisição POST

```json
{
  "nome": "Boneca de Pano"
}
```

---

## 🚀 Como executar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/SayuriObana/Trabalho-cloud.git
```

### 2️⃣ Acesse a pasta do projeto
```bash
cd trabalho-cloud
```

### 3️⃣ Construa a imagem Docker
```bash
docker build -t api .
```

### 4️⃣ Execute o container
```bash
docker run -p 3000:3000 api
```

🔗 A aplicação estará disponível em:  
[http://localhost:3000/boneca](http://localhost:3000/boneca)

---

## 📁 Estrutura do Projeto

```
docker-ray/
├── src/
│   └── server.js
├── Dockerfile
├── package.json
└── README.md
```

---

## 👩‍💻 Autora

Feito com muito carinho por **Sayuri Obana** 💖  
📚 1º Trabalho da disciplina **Arquitetura Cloud - 2025**

---

## 📬 Contato

Contribuições, sugestões e dúvidas são sempre bem-vindas!  
Abra uma *issue* ou envie uma mensagem. ✉️😊
```

---
