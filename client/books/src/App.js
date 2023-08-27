import {
  BrowserRouter,Routes,Route
} from "react-router-dom"
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Update from "./Pages/Update";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/update" element={<Update/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
