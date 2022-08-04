import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CourseImageList from "./CourseImageList";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'transparent',
    outline: 0
};

export default function ImageModal({imageSourceFromClick}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div>
                <Button variant={"outlined"} onClick={handleOpen}>Select Preview Image</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CourseImageList modalClicked={handleClose} imageSourceFromClick={imageSourceFromClick} />
                    </Box>
                </Modal>
        </div>
    );
}
