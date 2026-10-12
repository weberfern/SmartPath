const db = require('./db');

// Função que cria as tabelas no banco de dados
const createTables = async () => {
    // Tabela de Usuários
    const usersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            gamification_level INTEGER DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    // Tabela de Metas
    const goalsTable = `
        CREATE TABLE IF NOT EXISTS goals (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            title VARCHAR(255) NOT NULL,
            target_amount DECIMAL(10, 2) NOT NULL,
            deadline_months INTEGER NOT NULL,
            investments_type VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;

    // Tabela de Histórico de Aportes
    const progressLogsTable = `
        CREATE TABLE IF NOT EXISTS progress_logs (
            id SERIAL PRIMARY KEY,
            goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
            amount DECIMAL(10, 2) NOT NULL,
            log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP   
        );
    `;

    try {
        console.log('Iniciando a criação das tabelas...');

        await db.query(usersTable);
        console.log('Tabela "users" verificada/criada com sucesso.');

        await db.query(goalsTable);
        console.log('Tabela "goals" verificada/criada com sucesso.');

        await db.query(progressLogsTable);
        console.log('Tabela "progress_logs" verificada/criada com sucesso.');

        console.log('Todas as tabelas configuradas com sucesso!');
        process.exit(0);
    } catch (error) {
        console.error('Erro ao criar as tabelas: ', error);
        process.exit(1);
    }
};

createTables();