# 🚀 Projeto App Flow

Projeto base desenvolvido com **Node.js + TypeScript**, utilizando **tsup** para build e **tsx** para execução em ambiente de desenvolvimento.

## 📌 Tecnologias Utilizadas
<p align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/tsup-FF4154?style=for-the-badge" />
<img src="https://img.shields.io/badge/tsx-000000?style=for-the-badge" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />


</p>

---

* Node.js (>= 18) 
* TypeScript
* tsup
* tsx
* @types/node

---

## 📂 Estrutura do Projeto

```
projeto-app-flow/
│
├── src/                # Código fonte da aplicação
├── dist/               # Arquivos gerados após build
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Pré-requisitos

#### Antes de começar, você precisa ter instalado:

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)

* Node.js (versão 18 ou superior)
* npm

#### Para verificar:

```bash
node -v
npm -v
```

---

## 📥 Instalação

#### Clone o repositório:

```bash
git clone https://github.com/seu-usuario/projeto-app-flow.git
```

#### Acesse a pasta do projeto:

```bash
cd projeto-app-flow
```

#### Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto em Desenvolvimento

Para rodar o projeto com suporte a TypeScript diretamente:

```bash
npx tsx src/index.ts
```

Ou, se houver script configurado no `package.json`:

```bash
npm run dev
```

---

## 🏗️ Build do Projeto

Para gerar os arquivos compilados:

```bash
npx tsup
```

Ou:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta:

```
dist/
```

---

## 📦 Dependências de Desenvolvimento

* **TypeScript** — Tipagem estática
* **tsx** — Execução rápida de arquivos TypeScript
* **tsup** — Bundler rápido baseado em esbuild
* **@types/node** — Tipagens do Node.js

---

## 👨‍💻 Autor
Criado por DIO.me

Desenvolvido por Henrique.

---

## 🧰 Gerenciamento de Scripts e Ambientes

Este projeto adota uma organização estratégica de scripts no `package.json`, separando claramente os ambientes de desenvolvimento e produção.

```json
"scripts": {
  "start:dev": "tsx --env-file=.env src/server.ts",
  "start:watch": "tsx watch --env-file=.env src/server.ts",
  "dist": "tsup src",
  "start:dist": "npm run dist && --env-file=.env node/server.js"
}
```

---

## 🧰 Scripts Disponíveis

```bash
npm run start:dev     # Executa em modo desenvolvimento
npm run start:watch   # Executa com auto-reload
npm run build         # Gera build de produção
npm run start:dist    # Executa versão compilada
```

### 🔎 Estratégia aplicada

**1️⃣ Desenvolvimento isolado**

* Execução direta com `tsx`
* Suporte a variáveis de ambiente
* Ambiente rápido e produtivo

**2️⃣ Watch Mode**

* Hot reload automático
* Melhor experiência durante desenvolvimento

**3️⃣ Build otimizado**

* Utilização do `tsup` (baseado em esbuild)
* Geração de versão compilada em `/dist`
* Preparação para ambiente de produção

**4️⃣ Execução pós-build**

* Simulação de ambiente real
* Separação clara entre código fonte e código compilado
* Estrutura pronta para deploy (VPS, Docker, Cloud)

---

## 🎯 Boas Práticas Aplicadas

* Separação de ambientes (dev / build)
* Organização de fluxo de execução
* Uso de variáveis de ambiente
* Estrutura escalável para APIs ou microserviços
* Padronização de scripts seguindo convenções de mercado

---
