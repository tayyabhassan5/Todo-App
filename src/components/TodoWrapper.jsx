import { routes } from '../Routes/Routes';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal'

const TodoWrapper = ({ children, title, handleView }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOptionChange = (event) => {

        const selectedOption = event.target.value;

        if (selectedOption === "home") {
            navigate(routes.home);
        } else if (selectedOption === "pending") {
            navigate(routes.pending)
        } else if (selectedOption === "completed") {
            navigate(routes.completed)
        }
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="flex items-center bg-custom-purple flex-col">           
                <div className="lg:px-48 min-w-[1000px] flex bg-custom-purple min-h-screen max-w-full flex-col rounded overflow-hidden text-lg">
                    <div className="font-bold mt-4 text-2xl text-white text-center">{title}</div>
                    <div className="flex mb-4 justify-between w-full w-auto">
                        <select
                            className="text-white bg-custom-purple rounded p-1"
                            onChange={handleOptionChange}
                            value=""
                        >
                            <option value="" disabled hidden>Todo Status</option>
                            <option value="home">All</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>

                        <div className="space-x-2 mt-[10px] cursor-pointer text-white" size="lg">
                            <FontAwesomeIcon icon={faTh}
                                title="Display Grid View"
                                onClick={() => { handleView("grid") }}
                            />
                            <FontAwesomeIcon icon={faList}
                                title="Display List View"
                                onClick={() => { handleView("list") }}
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                title="Create Post"
                                onClick={handleOpenModal}
                                size="lg" />
                        </div>
                    </div>
                    {children}
                
            </div>

            {isModalOpen && <CreatePostModal mode="create" handleClose={handleCloseModal} />}
        </div>
    );
};

export default TodoWrapper;
