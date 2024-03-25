import TodoComponent from "../../components/TodoComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TodoWrapper from "../../components/TodoWrapper";
import {routes} from '../../Routes/Routes'

const PendingTask = () => {
    const navigate = useNavigate();

    const pendingTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === false || todo.completed === "false"));

   

    const handleCompleted = () => {
        navigate(routes.completed);
    }

    return (
        <>
        <TodoWrapper title="Pending Tasks" handleRouting={handleCompleted}>
            <TodoComponent todos={pendingTasks} />
        </TodoWrapper>

        </>
    );
};

export default PendingTask;
