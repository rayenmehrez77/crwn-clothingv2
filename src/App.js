import Home from "./routes/Home/Home";
import Navbar from "./routes/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/Shop/Shop";
import Authentication from "./routes/Authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
