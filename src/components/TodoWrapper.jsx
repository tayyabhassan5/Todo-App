import {routes} from '../Routes/Routes'
import { useNavigate } from 'react-router-dom';

const TodoWrapper = ({  handleRouting, children, title }) => {
    const navigate=useNavigate()
    const handleHome = () => {
        navigate(routes.home);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-gray-900 md:w-[600px] w-full flex flex-col items-center justify-center rounded overflow-hidden shadow-lg italic text-lg font-bold">
                <div className="items-center text-center text-white">{title}</div>
                <div className="flex p-2 justify-center md:justify-between w-full md:w-auto">
                    <button className="bg-blue-500 text-white rounded p-1" onClick={handleHome}>Home Page</button>
                    <button className={`p-1 rounded text-white ml-2 md:ml-10 ${title ==="Completed Tasks" ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleRouting}>
                        {title==="Completed Tasks"?"Pending Tasks":"Completed Task"}
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default TodoWrapper