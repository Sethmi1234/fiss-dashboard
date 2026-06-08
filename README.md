# FISS Dashboard

A modern banking dashboard built with Next.js 16 and Tailwind CSS 4. This project includes a login page, nested dashboard routes, overview cards, transactions, customer and employee pages, and loan management screens.

## Features

- Next.js App Router project structure
- Responsive dashboard layout with sidebar navigation
- Login page with a split marketing and form layout
- Overview cards with hover interactions
- Transactions table and micro/premium loan pages
- Customer and employee data pages
- Tailwind CSS styling

## Project Structure

- `src/app/` — Next.js app routes and layouts
- `src/components/` — reusable UI components
- `src/lib/data.js` — hard-coded demo data used across dashboard pages
- `public/` — static assets such as logo and images

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```bash
http://localhost:3000
```

## Build & Production

Build the app for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Notes

- The dashboard uses client-side navigation with `next/link`.
- The login page currently redirects to `/dashboard` after submitting the form.
- Data is provided from `src/lib/data.js` for demo purposes.

## Customization

To change sidebar items or routes, update:

- `src/components/dashboard/Sidebar.jsx`
- `src/app/dashboard/layout.jsx`

To update dashboard content or card values, edit:

- `src/lib/data.js`

## License

This project is for demo and internship use.
