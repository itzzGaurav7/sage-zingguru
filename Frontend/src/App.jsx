import Dashboard from './pages/Dashboard.jsx';
import Landing from './pages/Landing';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CareerPathApp from './components/Question/CareerPath.jsx';
import Whiteboard from './components/Excal/WhiteBoard.jsx';
import './index.css';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Landing />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/store" element={<h1>Store</h1>} />
          <Route path="/career" element={<CareerPathApp />} />
          <Route path="/whiteboard" element={<Whiteboard />} />
         
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
