# 🛡️ SafeCall Bradesco - Prevenção contra Falsas Centrais

Projeto acadêmico desenvolvido para a disciplina de **Sistemas Distribuídos e Mobile** na **Universidade São Judas Tadeu (Campus Mooca)**, em parceria com o programa **Dual Bradesco**.

## 📝 Descrição do Projeto
O **SafeCall** é uma solução de segurança focada em combater golpes de engenharia social, especificamente o de "Falsas Centrais de Atendimento".

A aplicação consiste em uma API de *White List* que permite verificar se um número de telefone pertence oficialmente ao Bradesco, se já foi reportado como suspeito ou se ainda não existe na base.

## 🛠️ Stack Tecnológica
* **Ambiente:** Node.js
* **Framework:** Express
* **Linguagem:** JavaScript
* **Banco de Dados:** PostgreSQL
* **Containers:** Docker
* **Arquitetura:** REST API

## 📌 Rotas da API
```http
GET /health
```
Verifica se a API está online.

```http
GET /api/verify/:phone
```
Consulta o status de um número.

```http
POST /api/report
```
Registra uma denúncia de número suspeito.

```http
GET /api/reports
```
Lista as denúncias registradas.

## ⚙️ Como Executar (Ambiente de Desenvolvimento)
### Pré-requisitos
Antes de iniciar, é necessário ter instalado:
* **Node.js**
* **Docker Desktop**
* **Git**

### 1. Clone este repositório
```bash
git clone https://github.com/valterEduardoAndrade/Projeto-Bradesco.git
```

### 2. Acesse a pasta do projeto
```bash
cd Projeto-Bradesco
```

### 3. Inicie o banco de dados com Docker
```bash
docker compose up -d db
```

### 4. Instale as dependências do backend
```bash
cd backend
npm install
```

### 5. Inicie o servidor
```bash
npm run dev
```

Se estiver usando PowerShell e o `npm` for bloqueado, use:
```bash
npm.cmd run dev
```
