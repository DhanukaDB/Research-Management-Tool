import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import Home from "./components/Home";
import StudentSignup from './pages/Student/studentSignup';

const App = () => {
  return (

   
      <Router>  
        <main> 
         <Switch>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/studentsignup" element={<StudentSignup />} ></Route>
        </Switch>
        </main>
      </Router>
        
   

  );
}

export default App;