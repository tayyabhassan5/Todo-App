import TodoComponent from '../../components/TodoComponent';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import TodoWrapper from '../../components/TodoWrapper';
import {routes} from '../../Routes/Routes'

const CompletedTask = () => {
    const doneTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === true || todo.completed === "true"));
    console.log(doneTasks);
    const navigate = useNavigate();

    const handlePending = () => {
        navigate(routes.pending);
    }

    return (
        <>
            <TodoWrapper title="Completed Tasks" handleRouting={handlePending} >
                <TodoComponent todos={doneTasks} />
               
            </TodoWrapper>
        </>

    );
}

export default CompletedTask;
