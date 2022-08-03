import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import setAdmin from './pages/Admin';
import './pages/Results';
import './pages/User';
import './pages/Admin.css';
import './pages/Results.css';
import { userInfo } from 'os';
import { useState,useRef } from 'react';
import "./dictionaryapi.json";
import  "react-router-dom";
import  "lodash";
import {useParams} from 'react-router-dom';
const Admin: any=setAdmin();


interface dictionary{
  word:string;
  meaning:string;
}



function App() {
  return (
  
    <div className=" Dictionary-App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the dictionary app. 
          <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dictionary is meaningfull;
        </a>
      </header>
    </div>
  );
}

export default App;
function useNavigate(): any {
  throw new Error('Dictionary is not implemented.');
}

