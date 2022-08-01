import RegisterUserForm from "../components/forms/RegisterUserForm"

function RegisterPage() {
    return (
        <div className={"page-container"}>
            <div id={"register-page-container"}>
                    <RegisterUserForm />
            </div>
        </div>
    );
}

export default RegisterPage;