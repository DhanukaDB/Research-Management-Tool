import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';
import Nav from './components/nav/Nav';
import Admin from './components/Admin/AdminHome';
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
          <Route exact path="/submission" element={<DocumentSubmission />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;