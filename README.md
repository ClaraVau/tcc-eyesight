# Eyesight — front + back em um serviço

```
frontend/   React + Vite (o build vai para frontend/dist)
backend/    Express + Prisma (também entrega frontend/dist)
render.yaml Deploy em um passo no Render
```

## Rodar local
```bash
cd backend  && cp .env.example .env && npm install && npx prisma db push && npm run dev     # API em :3333
cd frontend && npm install && npm run dev                                                  # site em :5173
```

## Ver o painel sem conta de anúncios
Cadastre-se pelo site, depois:
```bash
cd backend
npm run seed:demo -- --dry-run          # só mostra o que seria criado
npm run seed:demo -- --user <id>        # grava contas/campanhas/180 dias de métricas de exemplo
npm run seed:demo -- --user <id> --remove   # apaga só o que o script criou
```
Contas reais nunca são alteradas. Sem o seed, o botão "Ver com dados de exemplo" (`/demo`) mostra o painel sem back.

## Hospedar (Render)
1. Suba esta pasta para um repositório no GitHub.
2. Render → New → Blueprint → escolha o repositório (usa o `render.yaml`).
3. Preencha as variáveis. `FRONTEND_URL` e `BACKEND_URL` = endereço do serviço (ex.: `https://eyesight.onrender.com`). Não defina `VITE_API_URL`.
4. Rode uma vez `npx prisma db push` apontando para o banco (do seu computador, com o `.env` preenchido).
5. Nos painéis do Supabase, Meta e Google, cadastre o endereço do serviço (URLs de redirecionamento).
