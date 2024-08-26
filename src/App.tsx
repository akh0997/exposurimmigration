import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import RouterPath from "./routes/RoouterPath";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={1000} hideProgressBar={false} />
      <RouterPath />
    </div>
  );
}

export default App;
