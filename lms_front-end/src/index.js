import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/css/index.css"
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateCoursePage from "./routes/CreateCourse/CreateCoursePage";
import RegisterUserPage from "./routes/RegisterUser/RegisterUserPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes >
          <Route path="/" element={<App />}>
              <Route path="CreateCoursePage" element={<CreateCoursePage />}/>
              <Route path="RegisterUserPage" element={<RegisterUserPage />}/>
          </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
