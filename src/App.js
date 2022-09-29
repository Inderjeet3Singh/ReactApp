
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navbar/>}>

     <Route index element={<TextForm />} />
     <Route path='home' element={<TextForm />} />
     <Route path='about' element={<About />} />

     
     </Route>
    
  
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
