const express = require('express');
const app = express();

app.use(express.json()); 

let bonecas = [];
let id = 1;


app.get('/boneca', (req, res) => {
    res.json(bonecas);
});

app.post('/boneca', (req, res) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório" });
    }

    const novoNome = { id: id++, nome };
    bonecas.push(novoNome);
    
    res.status(201).json(novoNome);
});

app.listen(3000, () =>{
    console.log("Rodando na Porta 3000")
})