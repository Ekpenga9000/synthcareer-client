import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import Dashboard from './pages/dashboard/dashboard';
// import './App.scss'; 

const App:FC = ():ReactElement => {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
