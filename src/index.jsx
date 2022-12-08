import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contacto from "./Routes/Contact";
import ContextProvider  from "./Components/utils/global.context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/contacto" element={<Contacto />} />


          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


