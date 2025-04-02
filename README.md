<h1 align="center">Trabalho - Arquitetura Cloud</h1>

<p align="center">
  API simples construída com <strong>Node.js</strong> e <strong>Express</strong> para gerenciamento de bonecas,
  containerizada com <strong>Docker</strong> como parte da disciplina de Arquitetura Cloud.
</p>

---

##  Funcionalidades

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

## Como executar o projeto

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


## Autora

Rayani Sayuri  
📚 1º Trabalho da disciplina **Arquitetura Cloud - 2025**


---
