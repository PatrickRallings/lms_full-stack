import { RichTextEditor} from '@mantine/rte';
import {useState} from "react";

const CreateRichTextForm = () => {

    const [value, onChange] = useState("");

    return (
        <RichTextEditor
            value={value}
            onChange={onChange}
        />
    );
}
export default CreateRichTextForm;