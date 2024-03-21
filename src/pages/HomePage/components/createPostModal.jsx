import React, { useState } from 'react';
import FormValidation from '../../../components/formValidation';

const CreatePostModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpen} className="p-1 bg-blue-500 hover:bg-blue-700 text-white rounded">
                Create a New Post
            </button>
            {open && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <div className="relative bg-white rounded-lg p-8 max-w-md w-full">
                            <FormValidation />
                            <button onClick={handleClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePostModal;
