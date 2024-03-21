import TodoComponent from "../../components/todocomponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const PendingTask = () => {
    const navigate=useNavigate();

    const pendingTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === false || todo.completed==="false"));
    console.log("donetasks",pendingTasks)

    const handleHome=()=>{
        navigate('/')
       }
    
       const handleCompleted= () => {
        navigate('/completed');
       }

    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-gray-900 w-[600px] flex flex-col items-center justify-center rounded overflow-hidden shadow-lg italic text-lg font-bold">
                <div className="items-center text-white">Pending tasks</div>
                <div className="flex">
                <button className="p-1 bg-blue-500 text-white rounded mr-10" onClick={handleHome}>Home Page</button>
                        <button className="p-1 bg-green-500 text-white rounded" onClick={handleCompleted}>Completed Tasks</button>
                        </div>
                
                <TodoComponent todos={pendingTasks}/>
            </div>
            
        </div>
    );
};

export default PendingTask;
