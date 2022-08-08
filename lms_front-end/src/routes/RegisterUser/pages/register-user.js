import RegisterUserForm from "../components/RegisterUserForm"

const RegisterUser = () => {
    return (
        <div className={"page-container"}>
            <div className={"register-container"}>
                <div className={"container-heading"}>
                    <span>Create CFH Account</span>
                </div>
                <div className={"register-form-body"}>
                    <RegisterUserForm/>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;