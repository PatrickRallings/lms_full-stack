import NavbarAuthorizedUser from "./navigation/Navbar-AuthorizedUser";
import {Outlet} from "react-router-dom"

function App() {
    return (
        <>
            <NavbarAuthorizedUser/>
            <Outlet/>
        </>
    );
}

export default App;
