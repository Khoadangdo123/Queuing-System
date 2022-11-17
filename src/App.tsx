import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"; 

import { app } from './config/firebase/firebase.config.js';

import Login from './views/Authentication/Login/index';
import { Main } from './views/Authentication/index';
import ForgotPassword from './views/Authentication/ForgotPassword/components/ForgotPassword';

function App() {

  // User Test
  // UserAccount: khoadodang1012@gmail.com
  // Password: tony45678

  // User Test
  // UserAccount: tonyfake123@gmail.com
  // PassWord: tonyhacker123

  // const clearInputs = () => {
  //   setEmail('');
  //   setPassword('');
  // }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
