import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Main from "./pages/main";
import SecondPage from "./pages/second";
import ThirdPageReact from "./pages/third";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
        <Route path="/third" element={<ThirdPageReact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
