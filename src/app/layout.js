import "./globals.css";

export const metadata = {
  title: "FISS Dashboard",
  description: "Micro Loan Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}