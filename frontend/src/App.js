import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';
import Nav from './components/nav/Nav';
import Admin from './components/Admin/AdminHome';

import AddmarksDocs from './pages/evaluations/AddmarksDocs'
import EvaluationsHome from './pages/evaluations/EvaluationsHome'
import EvaluationDocs from './pages/evaluations/EvaluationDocs'
import EvaluationPres from './pages/evaluations/EvaluationPres'
import EvaluationTopics from './pages/evaluations/EvaluationTopics'
import MarkingUploading from './components/MarkingSchemesUploading/MarkingUploading';
import FilesList from './components/MarkingSchemesUploading/FilesList';
import Addmarkspresentation from './pages/evaluations/Addmarkspresentation';

import DocumentSubmission from'./components/DocumentSubmission';


const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
          <Route path="/chat" element={<Chat />} />
          <Route path="/AddmarksDocs" element={<AddmarksDocs />} />
          <Route path="/EvaluationsHome" element={<EvaluationsHome />} />
          <Route path="/EvaluationDocs" element={<EvaluationDocs />} />
          <Route path="/EvaluationPres" element={<EvaluationPres />} />
          <Route path="/EvaluationTopics" element={<EvaluationTopics />} />
          <Route path="/MarkingUploading" element={<MarkingUploading />} />
          <Route path="/FilesList" element={<FilesList />} />
          <Route path="/Addmarkspresentation" element={<Addmarkspresentation />} />

          <Route exact path="/submission" element={<DocumentSubmission />} ></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;