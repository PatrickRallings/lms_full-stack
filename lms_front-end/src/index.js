import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/css/index.css"
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateCourse from "./routes/CreateCourse/pages/create-course";
import RegisterUser from "./routes/RegisterUser/pages/register-user";
import ViewAllCourses from "./routes/ViewCourse/pages/view-all-courses";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="create-course" element={<CreateCourse/>}>
                        <Route path="view-all-courses" element={<ViewAllCourses/>}/>
                    </Route>
                    <Route path="register-user" element={<RegisterUser/>}/>
                    <Route path="view-all-courses" element={<ViewAllCourses/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
