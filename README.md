# FISS Dashboard

A modern banking dashboard built with Next.js 16 and Tailwind CSS 4. It includes a responsive login experience, a shared dashboard shell with sidebar navigation, and separate pages for overview, transactions, reports, ledgers, customers, employees, and loan management.

## Features

- Next.js App Router project structure
- Responsive dashboard layout with sidebar navigation
- Login page with a split marketing and form layout that stacks on mobile
- Overview cards with hover interactions and quick actions
- Transactions table with search and filters
- Reports and ledgers pages for financial tracking
- Micro/premium loan pages with tabular record views
- Customer and employee data pages with add-item modals
- Tailwind CSS styling

## Included Pages

- `/login` — responsive sign-in page with marketing panel and form
- `/dashboard/overview` — summary cards, actions, and recent transactions
- `/dashboard/transactions` — searchable transaction list with a create modal
- `/dashboard/reports` — report listing and filtering
- `/dashboard/ledgers` — ledger entries and account totals
- `/dashboard/customers` — customer list with a new-customer modal
- `/dashboard/employees` — employee list with a new-employee modal
- `/dashboard/micro-loans` — loan records for smaller loans
- `/dashboard/premium-loans` — loan records for larger loans

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
- Data is provided from `src/lib/data.js` for demo purposes and powers the tables/cards across the app.
- Several pages use modal forms for creating records, but they are currently demo-only and do not persist to a database.
- The layout is designed to stay usable on mobile screens by collapsing the main dashboard content into stacked sections.

## Customization

To change sidebar items or routes, update:

- `src/components/dashboard/Sidebar.jsx`
- `src/app/dashboard/layout.jsx`
- `src/app/dashboard/reports/page.jsx`
- `src/app/dashboard/ledgers/page.jsx`

To update dashboard content or card values, edit:

- `src/lib/data.js`

## License

This project is for demo and internship use.
