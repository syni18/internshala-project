import './App.css';
import { useUserContext } from "./StateProvider";
import Login from './login/Login'
import Home from './home/Home'
import Profile from './profile/Profile'
import Todo from  './todocal/Todo'
import Setting from './setting/Setting'
import SignUp from './login/SignUp';
import Auth from './login/Auth';
import ForgotPaswd from './profile/ForgotPaswd';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  const { user } = useUserContext();
  
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Auth />
        ) : (
          <Routes>
            <Route path='/auth' element={<Auth/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<ForgotPaswd/>} />
            <Route path="/home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="todo" element={<Todo/>} />
            <Route path="setting" element={<Setting />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
