require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // Permite que o servidor entenda requisições em JSON

// Rota de Teste (Health Check)
app.get('/', (req, res) => {
    res.json({ message: 'API SmartPath operando com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});