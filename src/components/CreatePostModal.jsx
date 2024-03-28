import React from 'react';
import FormValidation from './FormValidation';
import ModalWrapper from './ModalWrapper';

const CreatePostModal = ({ handleClose,mode,id,title,completed }) => {
    return (
        <ModalWrapper open={true} handleClose={handleClose}> 
            <FormValidation mode={mode} id={id} title={title} completed={completed} handleClose={handleClose}/>
        </ModalWrapper>
    );
};

export default CreatePostModal;