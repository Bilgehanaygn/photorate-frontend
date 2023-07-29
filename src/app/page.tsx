"use client";
import { ToastContainer } from "react-toastify";
import { Layout } from "../../lib/layout/Layout";
import { Private } from "../../lib/private/Private";

const App = function () {
  return (
    <div>
      <Layout>Home</Layout>
      <ToastContainer />
    </div>
  );
};

export default App;
