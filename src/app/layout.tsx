import { Inter } from "next/font/google";
import ReduxProvider from "../../lib/provider/Provider";
import "./globals.css";
import { Layout } from "../../lib/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beauty Check",
  description: "Generated by me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ margin: 0, padding: 0, backgroundColor: "#000000" }}
      >
        <ReduxProvider>
          <div id="portal"></div>
          <Layout>
            {children}
            <ToastContainer />
          </Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
