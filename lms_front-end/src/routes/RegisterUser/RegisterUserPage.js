import RegisterUserForm from "./components/RegisterUserForm"

function RegisterUserPage() {
    return (
        <div className={"page-container"}>
            <div id={"register-page-container"}>
                    <RegisterUserForm />
            </div>
        </div>
    );
}

export default RegisterUserPage;