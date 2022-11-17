import React, { useEffect, useState } from 'react';

import "@fontsource/nunito";

import { Route } from 'react-router-dom';

import Login from './Login/index';

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"; 
import ForgotPassword from './ForgotPassword/components/ForgotPassword';
import MainContent from '../Dashboard/index';


export const Main = () => {

  const [user, setUser] = useState < {} | null >("");

  const authListener = () => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  })

	return (
    <div>
			{
        user ? (
          <>
            <MainContent  />
          </>
        ) : (
          <>  
						<Login />
            {/* <MainContent /> */}
          </>
        )
      }
		</div>
	)
}