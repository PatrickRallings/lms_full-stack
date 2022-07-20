import RegisterUserForm from "../forms/RegisterUserForm"
import Navbar from "../navigation/Navbar-UnauthorizedUser";

function RegisterPage() {
    return (
        <div className={"page-container"}>
            <Navbar />
            <div id={"register-page-container"}>
                    <RegisterUserForm />
            </div>
        </div>
    );
}

export default RegisterPage;