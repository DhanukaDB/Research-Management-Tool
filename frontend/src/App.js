import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
// import Chat from './pages/chat/Chat';
import Nav from './components/nav/Nav';
import Admin from './components/Admin/AdminHome';

// import AddmarksDocs from './pages/evaluations/AddmarksDocs'
// import EvaluationsHome from './pages/evaluations/EvaluationsHome'
// import EvaluationDocs from './pages/evaluations/EvaluationDocs'
// import EvaluationPres from './pages/evaluations/EvaluationPres'
// import EvaluationTopics from './pages/evaluations/EvaluationTopics'
// import MarkingUploading from './components/MarkingSchemesUploading/MarkingUploading';
// import FilesList from './components/MarkingSchemesUploading/FilesList';

   import DocumentSubmission from'./components/DocumentSubmission';
   import GroupRegistrationForm from './components/GroupRegistrationForm';
   import StudentUpoadList from './components/StudentUploadList';
   import StudentUpload from './components/StudentUpload';
   import SubmissionUploading from './components/AdminCreateSubmission/SubmissionUploading';
   import AdminSubList from './components/AdminCreateSubmission/AdminSubList';
   import AdminCreateTemplate from './components/Template/AdminCreateTemplate';
   import DownloadTemplate from './components/Template/DownloadTemplate';

import StudentSignup from './pages/Sign/StudentSignup' ;
import StudentSignin from './pages/Sign/StudentSignin';
import StaffSignup from './pages/Sign/StaffSignup';
import StaffSignin from './pages/Sign/StaffSignin';
import AdminSignin from './pages/Sign/AdminSignin';

import StaffList from './pages/screens/Stafflist';
import StudentList from './pages/screens/StudentList';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/AddmarksDocs" element={<AddmarksDocs />} /> */}
          {/* <Route path="/EvaluationsHome" element={<EvaluationsHome />} /> */}
          {/* <Route path="/EvaluationDocs" element={<EvaluationDocs />} /> */}
          {/* <Route path="/EvaluationPres" element={<EvaluationPres />} /> */}
          {/* <Route path="/EvaluationTopics" element={<EvaluationTopics />} /> */}
          {/* <Route path="/MarkingUploading" element={<MarkingUploading />} /> */}
          {/* <Route path="/FilesList" element={<FilesList />} /> */}

         
          <Route exact path="/submissions" element={<DocumentSubmission />} ></Route> 
          <Route exact path="/groupreg" element={<GroupRegistrationForm/>} ></Route>
          <Route exact path="/sUploadList" element={<StudentUpoadList/>} ></Route>
          <Route exact path="/studentUpload" element={<StudentUpload/>} ></Route>
          <Route path="/SubmissionUploading" element={<SubmissionUploading/>} />
          <Route path="/AdminSubList" element={<AdminSubList />} /> 
          <Route path="/downloadTemp" element={<DownloadTemplate/>} />
          <Route path="/createTemp" element={<AdminCreateTemplate />} />  
          
          <Route exact path="/studentsignup" element={<StudentSignup />} ></Route>
          <Route exact path="/studentsignin" element={<StudentSignin />} ></Route>
          <Route exact path="/staffsignup" element={<StaffSignup />} ></Route>
          <Route exact path="/staffsignin" element={<StaffSignin />} ></Route>
          <Route exact path="/adminsignin" element={<AdminSignin />} ></Route>

          <Route exact path="/stafflist" element={<StaffList />} ></Route>
          <Route exact path="/studentlist" element={<StudentList />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
   

 