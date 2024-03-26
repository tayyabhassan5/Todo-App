import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from "../redux/todoSlice";
import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/outline';
import { useSnackbar } from 'notistack'; 

const TodoComponent = ({ todos }) => {

    const dispatch = useDispatch();
    const [hoveredId, setHoveredId] = useState(null);
    const { enqueueSnackbar } = useSnackbar(); 

    const handleToggleComplete = (id, completed) => {
        dispatch(toggleComplete(id));
        const message = completed ? 'Task moved to pending!' : 'Task moved to complete!';
        enqueueSnackbar(message, { 
            variant: "custom",        
            autoHideDuration: 2000,
        });
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        enqueueSnackbar('Todo Deleted successfully!', { 
            variant: "custom",        
            autoHideDuration: 2000,
        });
    };

    return (
        <div className="space-y-4">
            {todos.map((item) => (
                <div
                    key={item.id}
                    className={`mx-6 flex overflow-hidden bg-gray-400 justify-between shadow-lg p-2 bg-white rounded-full transition-transform duration-300 transform ${hoveredId === item.id ? 'hover:scale-110' : ''}`}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <div className="p-2 flex flex-col overflow-hidden">
                        {item.title}
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="inline-flex items-center cursor-pointer" >
                            <input type="checkbox" checked={item.completed} onChange={() => handleToggleComplete(item.id, item.completed)} className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>

                        <TrashIcon className="w-8 h-8 cursor-pointer text-red-600" onClick={() => handleDelete(item.id)} />

                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoComponent;
