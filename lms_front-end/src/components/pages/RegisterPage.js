import RegisterUserForm from "../forms/RegisterUserForm"
import Navbar from "../navigation/Navbar-UnauthorizedUser";
import CreateRichTextForm from "../forms/CreateRichTextForm";

function RegisterPage() {
    return (
        <div className={"page-container"}>
            <Navbar />
            <div id={"register-page-container"}>
                    <RegisterUserForm />
                    <CreateRichTextForm />
            </div>
        </div>
    );
}

export default RegisterPage;