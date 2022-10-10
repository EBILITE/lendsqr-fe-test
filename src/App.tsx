import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import User from './Pages/User/User';
import UserDetails from './Pages/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='Dashboard' element={<Dashboard />} >
          <Route index element={<User/>}/>
          <Route path='details' element={<UserDetails/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
