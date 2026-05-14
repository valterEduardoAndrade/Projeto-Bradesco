# 🛡️ SafeCall Bradesco — Prevenção contra Falsas Centrais

Projeto acadêmico desenvolvido para a disciplina de **Sistemas Distribuídos e Mobile** na **Universidade São Judas Tadeu (Campus Mooca)**, em parceria com o programa **Dual Bradesco**.

## 📝 Descrição do Projeto
O **SafeCall** é uma solução de segurança focada em combater golpes de engenharia social, especificamente o de "Falsas Centrais de Atendimento". A aplicação consiste em uma API de *White List* que permite verificar em tempo real se um número de telefone ou canal de contato pertence oficialmente ao Bradesco ou se já foi reportado como fraude em diretrizes do Banco Central.

## 🛠️ Stack Tecnológica
* **Ambiente:** Node.js
* **Framework:** Express
* **Linguagem:** JavaScript
* **Banco de Dados:** PostgreSQL (Relacional)
* **Arquitetura:** REST API

## 📋 Requisitos de Sistemas Distribuídos
O projeto contempla os seguintes diferenciais técnicos exigidos:
- [x] **Controle de Versionamento:** Uso rigoroso de Git e GitHub.
- [ ] **Containers:** Implementação de Docker para o ambiente de banco de dados (Em breve).
- [ ] **Testes:** Validação de rotas via Postman.

## 📅 Cronograma de Entregas
* **Banco de Dados & Back-end:** 18/05/2026.
* **Front-end:** 25/05/2026.
* **Apresentação Final:** 15/06/2026.

## ⚙️ Como Executar (Ambiente de Desenvolvimento)
1. Clone este repositório:
   ```bash
   git clone https://github.com/valterEduardoAndrade/Projeto-Bradesco.git
   
2. Instale as dependências:

Bash
npm install

3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor:
   ```bash
   npm start
