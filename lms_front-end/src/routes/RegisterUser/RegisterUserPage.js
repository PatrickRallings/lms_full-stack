import RegisterUserForm from "./components/RegisterUserForm"

function RegisterUserPage() {
    return (
        <div className={"page-container"}>
            <div className={"content-container"}>
                <div className={"container-heading"}>
                    <span>Create CFH Account</span>
                </div>
                <div className={"container-body"}>
                    <RegisterUserForm />
                </div>
            </div>
        </div>
    );
}

export default RegisterUserPage;