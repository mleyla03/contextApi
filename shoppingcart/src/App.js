
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Header from "./components/Header/Header";
import Favorite from "./pages/Favorite/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
