import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landig/Landig";
import Favorites from "./Views/Favorites/Favorites";
import Detail from "./Views/Detail/Detail";
import Navbar from "./Views/Navbar/Navbar";
import About from "./Views/About/About";

function App() {
  const location = useLocation();
  // console.log(location);
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar></Navbar>}
      <Routes>
        <Route exact path="/" element={<Landing></Landing>} />
        <Route exact path="/home" element={<Home></Home>} />
        <Route exact path="/detail" element={<Detail></Detail>} />
        <Route exact path="/favorites" element={<Favorites></Favorites>} />
        <Route exact path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
