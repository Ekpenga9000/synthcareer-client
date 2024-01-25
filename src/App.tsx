import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/authentication/Login';
import SignUp from './pages/authentication/SignUp';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/dashboard';
// import './App.scss'; 

const App:FC = ():ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
       <CssBaseline/>
      {/* <Dashboard/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
