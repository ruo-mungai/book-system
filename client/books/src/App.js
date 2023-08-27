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
    <Route path="/" element={<Add/>}/>
    <Route path="/" element={<Update/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
