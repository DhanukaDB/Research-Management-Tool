import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Admin from './components/Admin/AdminHome';
import Chat from './pages/chat/Chat';
import AddmarksDocs from './pages/evaluations/AddmarksDocs'
import EvaluationsHome from './pages/evaluations/EvaluationsHome'
import EvaluationDocs from './pages/evaluations/EvaluationDocs'
import EvaluationPres from './pages/evaluations/EvaluationPres'
import EvaluationTopics from './pages/evaluations/EvaluationTopics'
import MarkingUploading from './components/MarkingSchemesUploading/MarkingUploading';
import FilesList from './components/MarkingSchemesUploading/FilesList';
import DocumentSubmission from './components/DocumentSubmission';
import CreateChatGroups from './pages/chat/CreateChatGroups';
import Addmarkspresentation from './pages/evaluations/Addmarkspresentation';
import GiveFeedbackTopics from './pages/evaluations/GiveFeedbackTopics'
import ReqCosupervisor from './pages/reqCosuperisor/ReqCosupervisor'
import Cosupervisorsreq from './pages/reqCosuperisor/Cosupervisorsreq'
import AcceptRejectTopics from './pages/evaluations/AcceptRejectTopics'
import TopicAccept from './pages/evaluations/TopicAccept'
import DocumentSubmission from './components/DocumentSubmission';
import GroupRegistrationForm from './components/GroupRegistrationForm';

import StudentSignup from './pages/Sign/StudentSignup' ;
import StudentSignin from './pages/Sign/StudentSignin';
import StaffSignup from './pages/Sign/StaffSignup';
import StaffSignin from './pages/Sign/StaffSignin';
import AdminSignin from './pages/Sign/AdminSignin';
import StaffList from './pages/screens/Stafflist';
import StudentList from './pages/screens/StudentList';
import StaffHome from './pages/screens/StaffHome';
import Supervisor from './pages/screens/SupervisorHome';
import PannelMember from './pages/screens/PannelMemberHome';
import UserData from './pages/screens/UserData';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} ></Route>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
          <Route exact path="/chat" element={<Chat />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/AddmarksDocs" element={<AddmarksDocs />} />
          <Route path="/EvaluationsHome" element={<EvaluationsHome />} />
          <Route path="/EvaluationDocs" element={<EvaluationDocs />} />
          <Route path="/EvaluationPres" element={<EvaluationPres />} />
          <Route path="/EvaluationTopics" element={<EvaluationTopics />} />
          <Route path="/MarkingUploading" element={<MarkingUploading />} />
          <Route path="/FilesList" element={<FilesList />} />
          <Route exact path="/submission" element={<DocumentSubmission />} ></Route>
          <Route path="/group" element={<CreateChatGroups />} />
          <Route path="/FilesList" element={<FilesList />} />
          <Route path="/Addmarkspresentation" element={<Addmarkspresentation />} />
          <Route path="/GiveFeedbackTopics" element={<GiveFeedbackTopics />} />
          <Route path="/ReqCosupervisor/:id" element={<ReqCosupervisor />} />
          <Route path="/Cosupervisorsreq" element={<Cosupervisorsreq />} />

          <Route path="/AcceptRejectTopics/:id" element={<AcceptRejectTopics />} />

          <Route path="/TopicAccept" element={<TopicAccept />} />
          <Route exact path="/groupreg" element={<GroupRegistrationForm />} ></Route>


          <Route exact path="/studentsignup" element={<StudentSignup />} ></Route>
          <Route exact path="/studentsignin" element={<StudentSignin />} ></Route>
          <Route exact path="/staffsignup" element={<StaffSignup />} ></Route>
          <Route exact path="/staffsignin" element={<StaffSignin />} ></Route>
          <Route exact path="/adminsignin" element={<AdminSignin />} ></Route>

          <Route exact path="/stafflist" element={<StaffList />} ></Route>
          <Route exact path="/studentlist" element={<StudentList />} ></Route>
          <Route exact path="/staffhome" element={<StaffHome />} ></Route>
          <Route exact path="/pannelmember" element={<PannelMember />} ></Route>
          <Route exact path="/supervisor" element={<Supervisor />} ></Route>
          <Route exact path="/users" element={<UserData />} ></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;


