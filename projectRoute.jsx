import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Adduser from "./components/Adduser";
import Showuser from "./components/Showuser";
import Pagenotfound from "./components/Pagenotfound";

const routeValue = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="adduser" element={<Adduser />} />
        <Route path="showuser" element={<Showuser />} />
        <Route path="*" element={<Pagenotfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routeValue;
