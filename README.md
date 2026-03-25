# My Couture Collection

A Next.js project built as part of the Meta React Development course on Qwasar.

## VS Code Extensions
- ESLint
- Prettier - Code Formatter
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native Snippets
- GitLens

## Challenges & Solutions
- **Colon in folder path** — renamed `Qwasar:School_Project` to `Qwasar-School_Project` to fix npm errors
- **npm permissions error** — used `sudo` to update npm globally
- **node_modules pushed to GitHub** — used `git reset --soft` to undo commits and repush without large files

## Project Structure
- `src/app/` — pages and routing using Next.js App Router
- `src/components/` — reusable UI, layout, and form components
- `src/lib/` — utilities, hooks, validation schemas and API logic
- `src/types/` — shared TypeScript type definitions
- `src/styles/` — global styles and design tokens

for some picture of architecture, version of node and npm, page at localhost:3000 

- [architecture project](image.png)
- [version of node and npm](imagecopy.png)
- [page localhost:3000](Pagereact.png)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
