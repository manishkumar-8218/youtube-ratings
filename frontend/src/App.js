import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/navbar';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import Aboutus from './pages/aboutUs'
import Error_404 from './pages/error_404';
import  Home from './pages/home'
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="*" element={<Error_404/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/about' element={<Aboutus/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
