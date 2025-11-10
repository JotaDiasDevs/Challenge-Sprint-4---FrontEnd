# 🏢 Summit Consulting

Plataforma inovadora de gerenciamento e consultoria desenvolvida com React, TypeScript e Vite.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Executar](#-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Integrantes](#-integrantes)
- [Funcionalidades](#-funcionalidades)
- [API](#-api)
- [Deploy](#-deploy)
- [Links](#-links)

## 🚀 Tecnologias

- **React** 19.1.1
- **TypeScript** 5.9.3
- **Vite** 5.0.8
- **Tailwind CSS** 3.4.18
- **React Router DOM** 7.9.3
- **React Hook Form** 7.64.0

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/JotaDiasDevs/Challenge-Sprint-4---FrontEnd.git

# Entre no diretório
cd Challenge-Sprint-4---FrontEnd

# Instale as dependências
npm install
```

## 🏃 Executar

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# JSON Server (API local)
npm run json-server
```

## 📁 Estrutura do Projeto

```
Challenge-Sprint-4---FrontEnd/
├── api/                    # Endpoints da API (Vercel Serverless)
│   ├── usuarios.js
│   └── consultas.js
├── src/
│   ├── assets/             # Imagens e recursos estáticos
│   │   └── integrantes/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── auth/          # Componentes de autenticação
│   │   ├── common/        # Componentes comuns
│   │   └── layout/        # Componentes de layout
│   ├── config/            # Configurações
│   │   └── api.ts         # Configuração da API
│   ├── contexts/          # Contextos React
│   │   └── auth/          # Contexto de autenticação
│   ├── pages/             # Páginas da aplicação
│   │   ├── auth/          # Páginas de autenticação
│   │   ├── private/       # Páginas privadas (protegidas)
│   │   └── public/        # Páginas públicas
│   ├── services/          # Serviços
│   │   └── api/           # Serviços de API
│   ├── types/             # Tipos TypeScript
│   │   ├── auth/          # Tipos de autenticação
│   │   └── common/        # Tipos comuns
│   ├── utils/             # Utilitários
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── db.json                # Banco de dados JSON (local)
├── vercel.json            # Configuração do Vercel
└── package.json           # Dependências do projeto
```

## 👥 Integrantes

### João Victor Semente Dias
- **RM:** 562065
- **Turma:** 1TDSPY
- **GitHub:** [@JotaDiasDevs](https://github.com/JotaDiasDevs)

### Rodrigo Tiezzi
- **RM:** 562975
- **Turma:** 1TDSPY
- **GitHub:** [@rodrigotiezzi](https://github.com/rodrigotiezzi)

### Christian de Souza Freitas
- **RM:** 566098
- **Turma:** 1TDSPY
- **GitHub:** [@ChrisDeSousaFreitas](https://github.com/ChrisDeSousaFreitas)

## ✨ Funcionalidades

### Páginas Públicas
- ✅ **Home** - Página inicial com apresentação do projeto
- ✅ **Sobre** - Informações sobre a Summit Consulting
- ✅ **Integrantes** - Página com informações dos desenvolvedores
- ✅ **FAQ** - Perguntas frequentes
- ✅ **Contato** - Formulário de contato

### Páginas Privadas (Protegidas)
- ✅ **Dashboard** - Painel com estatísticas do sistema
- ✅ **Detalhes do Usuário** - Visualização completa dos dados do usuário
- ✅ **Detalhes da Consulta** - Informações detalhadas das consultas

### Recursos Técnicos
- ✅ **Rotas Estáticas e Dinâmicas** - Implementação com React Router
- ✅ **Tipos TypeScript Avançados** - Union Types e Intersection Types
- ✅ **Responsividade** - Layout adaptável para todos os dispositivos
- ✅ **Autenticação** - Sistema de login e proteção de rotas
- ✅ **Integração com API** - Consumo de API Java (GET, POST, PUT, DELETE)
- ✅ **Tratamento de Erros** - Gerenciamento robusto de erros da API

## 🔌 API

### Configuração
A aplicação consome a API desenvolvida em Java (Domain Drive Design). A URL da API pode ser configurada através da variável de ambiente `VITE_API_URL`.

### Endpoints Consumidos
- `GET /usuarios` - Lista todos os usuários
- `GET /usuarios/:id` - Busca usuário por ID
- `POST /usuarios` - Cria novo usuário
- `GET /consultas` - Lista todas as consultas
- `GET /consultas?usuarioId=:id` - Consultas por usuário
- `GET /consultas/:id` - Busca consulta por ID
- `POST /consultas` - Cria nova consulta

### Tratamento de Erros
A aplicação implementa tratamento robusto de erros com:
- Mensagens amigáveis ao usuário
- Timeout de requisições (10 segundos)
- Validação de respostas
- Fallback para erros de rede

## 🚀 Deploy

### Vercel
O projeto está configurado para deploy na Vercel. O arquivo `vercel.json` contém as configurações necessárias.

**URL do Deploy:**
```
[Adicionar URL do Vercel após o deploy]
```

### Variáveis de Ambiente
Para produção, configure:
```env
VITE_API_URL=https://clinica-api-production-1c4b.up.railway.app
VITE_API_TIMEOUT=10000
```

## 🔗 Links

### 📚 Repositório GitHub
🔗 [https://github.com/JotaDiasDevs/Challenge-Sprint-4---FrontEnd](https://github.com/JotaDiasDevs/Challenge-Sprint-4---FrontEnd)


### 🌐 Deploy Vercel
🔗 [Adicionar URL do Vercel após o deploy]

## 📝 Versionamento

O projeto utiliza Git/GitHub para versionamento. Todos os integrantes participaram ativamente:

- **Total de commits:** 21
- **Commits por integrante:**
  - João Victor Semente Dias: 6 commits
  - Rodrigo Tiezzi: 6 commits
  - Christian de Souza Freitas: 9 commits

## 🎯 Tipos TypeScript Implementados

### Union Types
```typescript
type StatusConsulta = 'agendada' | 'realizada' | 'cancelada'
type TipoUsuario = 'paciente' | 'medico'
type StatusUsuario = 'ativo' | 'inativo' | 'pendente'
```

### Intersection Types
```typescript
type UsuarioComPermissao = Usuario & {
  permissoes: string[]
  nivelAcesso: 'admin' | 'usuario' | 'visitante'
}

type ConsultaComUsuario = Consulta & {
  usuario: Usuario
  usuarioNome?: string
}
```

### Interfaces
```typescript
interface Usuario {
  id: string
  nome: string
  email: string
  tipo?: TipoUsuario
}

interface Consulta {
  id: string
  usuarioId: string
  data: string
  horario: string
  especialista: string
  especialidade: string
  status: StatusConsulta
}
```

## 📱 Responsividade

A aplicação é totalmente responsiva, utilizando Tailwind CSS com breakpoints:
- **xs** - Extra Small devices
- **sm** - Small devices (≥640px)
- **md** - Medium devices (≥768px)
- **lg** - Large devices (≥1024px)
- **xl** - Extra Large devices (≥1280px)

## 🎨 Estilização

Todo o projeto utiliza **apenas Tailwind CSS** para estilização, sem frameworks externos ou CDNs.

## 📄 Licença

Este projeto foi desenvolvido para o **Challenge Sprint 4 - FrontEnd** da FIAP.

---

**Desenvolvido com ❤️ pela equipe Summit Consulting - Turma 1TDSPY - FIAP**
