import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { CartProvider } from "./providers/CartProvider";

import styles from "~/styles/app.css";
import fontStyles from "~/styles/fonts.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: fontStyles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Vera Verto | Plants for better interior",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-wrapper pb-24">{children}</main>
    </CartProvider>
  );
}

export function ErrorBoundary({ error }: { error: { message: {} } }) {
  return (
    <Document>
      <Layout>
        <div className="text-red-500">
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
}
