import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route,Routes,useParams,BrowserRouter,Link } from 'react-router-dom';
import {Header} from './components/header'
import { Provider } from 'react-redux';
import { store } from './components/store';
import { MessageList } from './components/main';
import { Profile } from './components/profiles';
import { Gists,GGistsmgv } from './components/gists/gists';
import { Gistsmgv } from './components/gists/gistmgv.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store);
root.render(
  <React.StrictMode>  
    <Provider store={store}>
    <BrowserRouter>
   <Header></Header>
    <Routes>
    <Route path='/' element={<h1>Welcome to Supermessanger</h1>}></Route>
       <Route path='/chat/*' element={<MessageList/>}></Route>
       <Route path='/gists' element={<Gists/>}></Route>
       <Route path='/gistmgv' element={<Gistsmgv/>}></Route>
       <Route path='*' element={<h1>Page not found</h1>}></Route>    
       <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
   </Provider>  
  </React.StrictMode>
);


reportWebVitals();
