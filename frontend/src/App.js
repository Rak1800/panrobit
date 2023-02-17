
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/Signup';
import Home from './components/Home';
import EnterOtp from './components/EnterOtp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/enterotp' element={<EnterOtp />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
