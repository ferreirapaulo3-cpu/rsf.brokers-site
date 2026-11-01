# RSF | Brokers — pré-visualização

## Requisitos

- Node.js ≥ 18.18 (recomendado 20 LTS ou 22 LTS).

## Instalar

```bash
npm install
```

(gera automaticamente o Prisma Client via `postinstall` — normal, demora poucos segundos.)

## Pré-visualizar (mais rápido)

```bash
npm run dev
```

Abre em `http://localhost:3000`.

## Pré-visualizar em modo produção (mais fiel ao que vai para a VPS)

```bash
npm run build
npm run start
```

Abre em `http://localhost:3000`.

## Formulários (Pedir Orçamento / Contacto)

Sem as variáveis de ambiente de SMTP configuradas (ver `.env.example`), o envio de email
falha de forma controlada — a página mostra um erro claro, nunca finge sucesso. Para testar
o envio real, criar um ficheiro `.env` com `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`, etc.,
conforme `.env.example`.

## Notas

- Este ZIP não inclui `node_modules` — `npm install` reconstrói tudo a partir de
  `package.json` + `package-lock.json`.
- Configuração de alojamento (VPS, reverse proxy, HTTPS) e scripts de produção já estão
  corrigidos neste estado do projeto; não foi alterada nesta entrega.
