import CreateRichTextForm from "../forms/CreateRichTextForm";
import Navbar from "../navigation/Navbar-UnauthorizedUser";
import RegisterUserForm from "../forms/RegisterUserForm";


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