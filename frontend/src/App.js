import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from './components/Admin/AdminHome';


const App = () => {
  return (

   
    <Router>  

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
</Routes>
<Routes>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
</Routes>
</div>   
</Router>
        
   

  );
}

export default App;