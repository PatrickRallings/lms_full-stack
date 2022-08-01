import RegisterUserForm from "../components/forms/RegisterUserForm"
import Navbar from "../components/navigation/Navbar-UnauthorizedUser";
import CreateRichTextForm from "../components/forms/CreateRichTextForm";

function RegisterPage() {
    return (
        <div className={"page-container"}>
            <Navbar />
            <div id={"register-page-container"}>
                    {/*<RegisterUserForm />*/}
                    <CreateRichTextForm />
            </div>
        </div>
    );
}

export default RegisterPage;