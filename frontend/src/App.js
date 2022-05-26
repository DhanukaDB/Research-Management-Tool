import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (

   
    <Router>  

      <div>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
</Routes>
</div>   
</Router>
        
   

  );
}

export default App;