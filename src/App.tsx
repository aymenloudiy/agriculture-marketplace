import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="outlet-content">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
