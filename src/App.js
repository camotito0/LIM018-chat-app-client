import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/welcomeView';
import Login from './components/loginView';
import Register from './components/registerView';
import Channels from './components/channelsView';
import Chat from './components/chatView';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/channels" element={<Channels/>}></Route>
        {/* <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/chat" element={<Chat/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
