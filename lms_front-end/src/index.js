import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/index.css"
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateCoursePage from "./pages/CreateCoursePage";
import RegisterPage from "./pages/RegisterPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes >
          <Route path="/" element={<App />}>
              <Route path="CreateCoursePage" element={<CreateCoursePage />}/>
              <Route path="RegisterPage" element={<RegisterPage />}/>
          </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
