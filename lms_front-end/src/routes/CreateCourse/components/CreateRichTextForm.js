import { RichTextEditor} from '@mantine/rte';
import {useState} from "react";
import Button from "@mui/material/Button";
import {CFHMaterialsUITheme} from "../../../themes/CFH-materialsUITheme";
import {ThemeProvider} from "@mui/material";

const CreateRichTextForm = () => {

    const [value, onChange] = useState("");

    return (
        <ThemeProvider theme={CFHMaterialsUITheme}>
            <div className={"flex-column-center"}>
                <div className={"flex-row-center"}>
                    <RichTextEditor
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div className={"flex-row-center"}>
                    <Button variant={"outlined"} >Add</Button>
                </div>
            </div>
        </ThemeProvider>

    );
}

export default CreateRichTextForm;