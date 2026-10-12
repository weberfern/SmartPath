require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express'); // Framework para criar a API
const cors = require('cors'); // Permite que o frontend se comunique com o backend
const db = require('./db'); // Conexão com o banco de dados

const app = express(); // Instância do Express
const PORT = process.env.PORT || 3000; // Porta do servidor

// Middlewares
app.use(cors());
app.use(express.json()); // Permite que o servidor entenda requisições em JSON

// Rota de Teste (Health Check) - Verificar o status da API e do BD
app.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW() AS current_time');
        res.json({
            message: 'API SmartPath operando com sucesso!',
            database_time: result.rows[0].current_time
        });
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
        res.status(500).json({ message: 'Erro ao conectar com o banco de dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});