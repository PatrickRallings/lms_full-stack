import CreateRichTextForm from "../components/CreateRichTextForm";
import CreateCourseForm from "../components/CreateCourseForm";

const CreateCourse = () => {

    return (
        <div className={"page-container"}>
            <div className={"content-container"}>
                <div className={"container-heading"}>
                        <span>Create New Course</span>
                </div>
                <div className={"container-body"}>
                    <CreateCourseForm />
                </div>
            </div>
        </div>
    )
}

export default CreateCourse;