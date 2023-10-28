import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import Adminlogin from './Adminlogin';
import Login from './Login';
import Nqs from './Nqs';
import Home from './Home';

import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ChakraProvider>
    <BrowserRouter>

<Routes>


{/*<Route exact path='/'  element={<Home/>}/>*/}
<Route path='/' element={<Login/>}/>


<Route path='/auth' element={<Nqs/>}/>

</Routes>


</BrowserRouter>
  {/* <App /> */}
      {/* <Adminlogin/> */}
      {/* <Login/> */}
      {/* <Nqs/> */}
      {/* <Home/> */}
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
