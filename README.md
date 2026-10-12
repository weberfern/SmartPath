# SmartPath - Concierge Autônomo de Planejamento

## Fase 1: Fundações e Arquitetura do Projeto
Nesta etapa inicial, estruturamos a base da aplicação seguindo os princípios de separação de responsabilidades (Client-Server).

**Tecnologias e Princípios Aplicados:**
*   **Engenharia de Software (UFCA):** Estruturação do monorepo separando o ambiente `frontend` e `backend`, garantindo escalabilidade e facilidade de manutenção.
*   **Tópicos em Segurança da Informação (UFCA):** Criação imediata do `.gitignore` para isolar credenciais e pacotes não essenciais desde o primeiro commit, prevenindo vazamento de chaves de API.
*   **Desenvolvimento Web (Bootcamp Full Stack):** Setup do ambiente Backend com Node.js e inicialização do Frontend utilizando React (via Vite) para maior performance de build.

## Fase 2: Controle de Versão e Inicialização da API
Implementação do versionamento de código e configuração do servidor backend, estabelecendo a base para a comunicação do sistema.

**Tecnologias e Princípios Aplicados:**
*   **Git e GitHub (Desenvolvimento Full Stack):** Utilização de versionamento local para rastreabilidade e controle de alterações do projeto.
*   **Integração de Sistemas (UFCA):** Criação da base da API RESTful com Node.js e Express[cite: 1, 3], estabelecendo um endpoint de *Health Check* para o futuro consumo pelo frontend.
*   **Gerenciamento Ágil de Projetos (UFCA):** Foco em entregas incrementais, garantindo que o ciclo de desenvolvimento inicie com uma fundação funcional e documentada.

## Fase 3: Integração em Nuvem e Versionamento Remoto
Configuração do repositório remoto no GitHub para garantir a segurança do código, o histórico de alterações e preparar o terreno para futuras esteiras de CI/CD (Continuous Integration/Continuous Deployment).

**Tecnologias e Princípios Aplicados:**
*   **Git e GitHub (Desenvolvimento Full Stack):** Conexão do repositório local ao remoto, permitindo o armazenamento distribuído e a criação de uma vitrine pública para o portfólio.
*   **Desenvolvimento em Nuvem (UFCA):** Primeiros passos para a hospedagem do código fora do ambiente local, estruturando a base para futuros deploys da API e do Frontend.