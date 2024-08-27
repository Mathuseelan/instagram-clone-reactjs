import { useSelector } from "react-redux";
import "./App.css";
import Authentication from "./Authentication/Authentication";
import Homepage from "./Homepage";
import { getAuth } from "./app/slices/authSlice";

function App() {
  const auth = useSelector(getAuth);

  return <div className="app">{auth ? <Homepage /> : <Authentication />}</div>;
}

export default App;
