import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import Books from "./Pages/Home";
import Update from "./Pages/Update";
import "./Style.css"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
