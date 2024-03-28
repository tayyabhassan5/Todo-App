import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice';
import { useSnackbar } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import ListView from './ListView';
import GridView from './GridView';
import CreatePostModal from './CreatePostModal';

const TodoComponent = ({ todos, view }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id,setId]=useState();
    const [title,setTitle]=useState();
    const [completed,setCompleted]=useState()
    const { enqueueSnackbar } = useSnackbar();

    const handleToggleComplete = (id, completed) => {
        dispatch(toggleComplete(id));
        const message = completed ? 'Task moved to pending!' : 'Task moved to complete!';
        showSnackBar({ message, variant: 'default' });
    };
    const handleEdit=(id,title,completed)=>{
        setIsModalOpen(true)
        console.log("In completed of handleEdit",completed)
        
        setId(id);
        setTitle(title);
        setCompleted(completed)
        //dispatch(editTodo(id,title));
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        showSnackBar({message:'Todo Deleted Successfully',variant:'success'})
    };

    const showSnackBar = ({ message, variant }) => {
        enqueueSnackbar(message, { variant });
    };

    return (
        <div className="space-y-2">
            {view === 'list' ? (
                <ListView todos={todos} 
                    handleToggleComplete={handleToggleComplete} 
                    handleEdit={handleEdit}              
                    handleDelete={handleDelete} 
                />
            ) : (
                <GridView todos={todos} 
                    handleToggleComplete={handleToggleComplete}
                    handleEdit={handleEdit}                     
                    handleDelete={handleDelete} 
                />
            )}
            {isModalOpen && <CreatePostModal mode="edit" id={id} title={title} completed={completed} handleClose={handleCloseModal} />}
        </div>
    );
};

export default TodoComponent;
