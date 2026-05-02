# Textus Gestão

Sistema web administrativo privado da Textus Acadêmico, com foco em gestão financeira, clientes, pedidos e documentos.

## Stack
- Next.js + TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL

## Configuração
1. Copie o ambiente:
```bash
cp .env.example .env
```
2. Instale dependências:
```bash
npm install
```
3. Gere client e rode migrations:
```bash
npm run prisma:generate
npm run prisma:migrate
```
4. Popule com usuários iniciais:
```bash
npm run prisma:seed
```
5. Execute:
```bash
npm run dev
```

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run prisma:migrate`
- `npm run prisma:generate`
- `npm run prisma:seed`

## Entregas MVP incluídas
- Estrutura base responsiva com sidebar e páginas de módulos.
- Modelagem Prisma completa com entidades: User, Client, Order, FinancialTransaction, Document, Category, ActivityLog, Payment e ServiceType.
- Seed com dois usuários internos (Administrador e Colaborador).
- Base pronta para autenticação, CRUD e relatórios.

## Próximos passos imediatos
- Conectar NextAuth com credenciais.
- Implementar APIs CRUD por módulo.
- Implementar upload seguro em armazenamento local/S3.
- Adicionar gráficos e exportação CSV.
