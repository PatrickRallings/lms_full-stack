import CreateRichTextForm from "../components/forms/CreateRichTextForm";
import Navbar from "../components/navigation/Navbar-UnauthorizedUser";
import RegisterUserForm from "../components/forms/RegisterUserForm";


const CreateCoursePage = () => {

    return (
        <div className={"page-container"}>
            <Navbar />
            <div id={"create_course-page-container"}>
                <CreateRichTextForm />
            </div>
        </div>
    )
}

export default CreateCoursePage;