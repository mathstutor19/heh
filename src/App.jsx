import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ForInvestors from './pages/ForInvestors/ForInvestors';
import HehNews from './pages/HehNews/HehNews';
import HehFoundation from './pages/HehFoundation/HehFoundation';
import ReceivedInvitation from './pages/ReceivedInvitation/ReceivedInvitation';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/for-investors" element={<ForInvestors />} />
          <Route path="/heh-news" element={<HehNews />} />
          <Route path="/heh-foundation" element={<HehFoundation />} />
          <Route path="/received-invitation" element={<ReceivedInvitation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
