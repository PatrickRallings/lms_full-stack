import React, {useState} from 'react';
import UserService from "../services/UserService";

function AddUserForm() {

    const [user, setUser] = useState({
            firstName: "firstNamePlaceholder",
            lastName: "lastNamePlaceholder",
            username: "usernamePlaceholder",
            email: "emailPlaceholder",
            password: "passwordPlaceholder"
        }
    );

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const saveUser = () => {
        console.log("saveUser function initiated - DevTest")
        UserService.saveUser(user)
    }

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div
                className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden border-4 border-b-cfh-dark-red">
                <div className="md:flex w-full">
                    <div className="hidden md:flex w-1/2 bg-white py-10 px-10 justify-center">
                        <img className="my-auto justify-center text-center items-center"
                             id="a87032b8-5b37-4b7e-a4d9-4dbfbe394641" data-name="Layer 1"
                             src="https://3chxux42u1m943cnnj18o850-wpengine.netdna-ssl.com/wp-content/themes/cfh/assets/img/logo.svg"
                             width="63%"
                             alt="Carolina Fintech Hub Logo"/>
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-cfh-dark-red">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-cfh-light-orange">REGISTER</h1>
                            <p className="text-cfh-light-orange">Enter your information to register</p>
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs text-cfh-light-orange font-semi-bold px-1">First
                                        name</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        </div>
                                        <input
                                            name="firstName"
                                            value={user.firstName}
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="John"/>
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1 text-cfh-light-orange">Last
                                        name</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        </div>
                                        <input
                                            name="lastName"
                                            value={user.lastName}
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Smith"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label htmlFor=""
                                           className="text-xs font-semibold px-1 text-cfh-light-orange">Email</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            </div>
                                        <input
                                            name="email"
                                            value={user.email}
                                            onChange={(e) => handleChange(e)}
                                            type="email"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="johnsmith@example.com"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label htmlFor=""
                                           className="text-xs font-semibold px-1 text-cfh-light-orange">Password</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        </div>
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={(e) => handleChange(e)}
                                            type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="************"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        onClick={saveUser}
                                        className="block w-full max-w-xs mx-auto bg-cfh-light-orange hover:bg-cfh-dark-red focus:bg-indigo-700 text-indigo-50 rounded-lg px-3 py-3 font-semibold">REGISTER
                                        NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUserForm;