import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Switch, Router, Route } from "react-router-dom";
import Home from "./components/Home";
import StudentSignup from './pages/Student/studentSignup';
import Chat from './pages/chat/Chat';
import Admin from './components/Admin/AdminHome';
import AddmarksDocs from './pages/evaluations/AddmarksDocs'
import EvaluationsHome from './pages/evaluations/EvaluationsHome'
import EvaluationDocs from './pages/evaluations/EvaluationDocs'
import EvaluationPres from './pages/evaluations/EvaluationPres'
import EvaluationTopics from './pages/evaluations/EvaluationTopics'
import MarkingUploading from './components/MarkingSchemesUploading/MarkingUploading';
import FilesList from './components/MarkingSchemesUploading/FilesList';

import DocumentSubmission from'./components/DocumentSubmission';

const App = () => {
  return (

   
      <Router>  
        <main> 
         <Switch>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/studentsignup" element={<StudentSignup />} ></Route>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
          <Route path="/chat" element={<Chat />} />
          <Route path="/AddmarksDocs" element={<AddmarksDocs />} />
          <Route path="/EvaluationsHome" element={<EvaluationsHome />} />
          <Route path="/EvaluationDocs" element={<EvaluationDocs />} />
          <Route path="/EvaluationPres" element={<EvaluationPres />} />
          <Route path="/EvaluationTopics" element={<EvaluationTopics />} />
          <Route path="/MarkingUploading" element={<MarkingUploading />} />
          <Route path="/FilesList" element={<FilesList />} />
          <Route exact path="/submission" element={<DocumentSubmission />} ></Route>
        </Switch>
        </main>
      </Router>
        
   

  );
}

export default App;