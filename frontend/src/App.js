import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Admin from './components/Admin/AdminHome';
import Chat from './pages/chat/Chat';

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} ></Route>
          <Route exact path="/adminpanel" element={<Admin />} ></Route>
          <Route exact path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;