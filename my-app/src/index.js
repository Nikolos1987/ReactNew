import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,useParams,BrowserRouter,Link } from 'react-router-dom';
import {Header} from './components/header'
import { Test } from './components/test';
import { MessageList } from './components/main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
   <Header></Header>
    <Routes>
    <Route path='/' element={<h1>Welcome to Supermessanger</h1>}></Route>
       <Route path='/chat/*' element={<MessageList/>}></Route>
       <Route path='*' element={<h1>Page not found</h1>}></Route>
       <Route path='/test/:id' element={<Test/>}></Route>

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


reportWebVitals();
