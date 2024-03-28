import TodoComponent from "../../components/TodoComponent"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TodoWrapper from "../../components/TodoWrapper";
import { routes } from '../../Routes/Routes'
import { useState } from "react";


const PendingTask = () => {
    const navigate = useNavigate();
    const [view, setView] =useState("list")

    const pendingTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === false || todo.completed === "false"));


    return (
        <>
            <TodoWrapper title="Pending Tasks" handleView={(view)=>{setView(view)}}>
                <TodoComponent todos={pendingTasks} view={view}/>
            </TodoWrapper>
        </>
    );
};

export default PendingTask;
