import NavbarAuthorizedUser from "./navigation/Navbar-AuthorizedUser";
import {Outlet} from "react-router-dom"
import {useEffect, useState} from "react";
import NavbarUnauthorizedUser from "./navigation/Navbar-UnauthorizedUser";
import { useNavigate } from "react-router-dom";

function App() {

    const [user, setUser] = useState(null)

    const history = useNavigate();

    useEffect(() => {
        const sessionStorageUser = sessionStorage.getItem("loggedUser");
        if (sessionStorageUser) {
            const foundUser = JSON.parse(sessionStorageUser);
            setUser(foundUser);
        }

    }, [history]);

    if (user != null) {
        return (
            <>
                <NavbarAuthorizedUser/>
                <Outlet/>
            </>
        );
    } else {
        return (
            <>
                <NavbarUnauthorizedUser/>
                <Outlet/>
            </>
        );
    }
}

export default App;
