import TodoComponent from '../../components/todocomponent';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const CompletedTask = () => {
    const doneTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === true|| todo.completed==="true"))
    const navigate=useNavigate();
   const handleHome=()=>{
    navigate('/')
   }



   const handlePending = () => {
    navigate('/pending');
}


    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-gray-900 w-[600px] flex flex-col items-center justify-center rounded overflow-hidden shadow-lg italic text-lg font-bold">
                <div className="items-center text-center text-white">Completed tasks</div>
                <div className="flex p-2">
                    <button className="bg-blue-500 text-white rounded p-1" onClick={handleHome}>Home Page</button>
                    <button className="bg-red-500 p-1 rounded text-white mr-10" onClick={handlePending}>Pending tasks</button>
                </div>
                <TodoComponent todos={doneTasks} />
            </div>

        </div>
    );
}

export default CompletedTask;
