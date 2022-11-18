import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './components/welcomeView';
import Login from './components/loginView';
/* import Register from './components/registerView'; */
import Channels from './components/channelsView';
import Channel from './components/channelView';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/channels/*" element={<Channels/>}>
          <Route path=":idChat" element={<Channel/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
