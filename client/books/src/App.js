import {
  BrowserRouter,Routes,Route
} from "react-router-dom"
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import './App.css';


function App() {
  return (
    <div className="App">
  <BrowserRouter >
  <Routes className='app'>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/update" element={<Update/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
