import Home from "./routes/Home/Home";
import Navbar from "./routes/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/Shop/Shop";
import SignIn from "./routes/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
