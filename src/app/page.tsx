"use client";
import { ToastContainer } from "react-toastify";
import { Layout } from "../../lib/layout/Layout";

const App = function () {
  // app ilk acildiginde getLoggedInUser istegi attin, istek basarili sonuclandiysa dispatch(login()) yaptin
  // basarisizsa login pagee yonlendirdin.
  // App ancak globalState'te user var ise goruntulemeli
  // all implemented in private component

  return (
    <>
      <Layout>
        <div>dsadsadas</div>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;
