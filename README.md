# Letter API docs - Express + Swagger UI

Express (TypeScript) server that serves Swagger UI for the 124-endpoint API.

## Run on your computer
    npm install
    npm run dev
Open http://localhost:3000/api-docs   (raw spec: /api-docs.json, health: /health)

## Deploy on Render
Option A - Web Service, Language = Node
- Root Directory: leave empty
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Environment variable (optional): `API_BASE_URL` = your backend URL, e.g. https://your-backend.onrender.com/api/v1

Option B - Web Service, Language = Docker
- Root Directory: leave empty (the Dockerfile is in the project root)
- Add the same environment variable if needed

Render sets PORT automatically. Open https://<your-service>.onrender.com/api-docs

## Try it out
1. Your backend must allow CORS from this docs site.
2. Call AUTH-02 login, copy access_token, click Authorize, paste it.

## Update the docs
Replace src/docs/openapi.json, push to GitHub, Render redeploys.

## Use inside your own backend instead
Copy src/docs/ into your project and call `setupSwagger(app)`.
