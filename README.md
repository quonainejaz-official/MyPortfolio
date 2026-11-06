# Quonain Ejaz - Portfolio

**GitHub Repository:** [https://github.com/quonainejaz-official/MyPortfolio](https://github.com/quonainejaz-official/MyPortfolio)

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

### SSR (optional)

```bash
npm run dev:ssr   # http://localhost:4173
npm run build:ssr # dist/client + dist/server
npm start         # production SSR server
```

## Contact Form (Web3Forms)

The contact form posts to [Web3Forms](https://web3forms.com/) — no OAuth, no
server, and no tokens that expire.

1. Get a free access key at https://web3forms.com/ (enter the inbox that should
   receive the messages; the key is emailed to you).
2. Copy `.env.example` to `.env` and set:

   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
   ```

3. On Vercel: **Project Settings → Environment Variables** → add
   `VITE_WEB3FORMS_ACCESS_KEY` with the same value, then **redeploy**. Vite
   inlines env values at build time, so a rebuild is required for changes.

Without the key the form shows “Email service is not configured”.

## Deploy (Vercel)

`vercel.json` builds the static SPA from `dist/client`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client"
}
```
