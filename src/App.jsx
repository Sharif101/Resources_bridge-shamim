import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="light"
        />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
