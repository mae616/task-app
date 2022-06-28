import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/test" element={<Test1 />} />
        <Route path="/test1" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
