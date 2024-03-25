import React, { useState } from 'react';
import FormValidation from '../../../components/FormValidation';
import ModalWrapper from '../../../components/ModalWrapper';

const CreatePostModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpen} className="p-1 bg-blue-500 hover:bg-blue-700 text-white rounded">
                Create Post
            </button>
            <ModalWrapper open={open} handleClose={handleClose}>
                <FormValidation />
            </ModalWrapper>
        </div>
    );
};

export default CreatePostModal;
