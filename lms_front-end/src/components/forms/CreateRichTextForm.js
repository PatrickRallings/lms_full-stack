import { RichTextEditor} from '@mantine/rte';
import {useState} from "react";

const CreateRichTextForm = () => {
    let initialValue =
        "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

    const [value, setValue] = useState(initialValue);

    const onChange = () => {
        setValue(value);
        console.log(String(value));
    }

    return (
        <RichTextEditor value={value} onChange={onChange} />
    )
}
export default CreateRichTextForm;