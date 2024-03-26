import { routes } from '../Routes/Routes'
import { useNavigate } from 'react-router-dom';

const TodoWrapper = ({ handleRouting, handlePending, children, title }) => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate(routes.home);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-black flex flex-col items-center justify-center rounded overflow-hidden shadow-lg text-lg ">
                <div className="items-center font-bold text-center text-white">{title}</div>
                <div className="flex p-2 justify-center md:justify-between w-full md:w-auto">
                    {title !== "Todo List" ?
                        <button className="bg-blue-500 text-white rounded p-1" onClick={handleHome}>Home Page</button>
                        : <button className="bg-red-500 text-white p-2 rounded" onClick={handlePending}>Pending Tasks</button>}
                    <button className={`p-1 rounded text-white ml-2 md:ml-10 ${title === "Completed Tasks" ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleRouting}>
                        {title === "Completed Tasks" ? "Pending Tasks" : "Completed Task"}
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default TodoWrapper