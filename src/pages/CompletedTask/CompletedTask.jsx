import TodoComponent from '../../components/TodoComponent';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import TodoWrapper from '../../components/TodoWrapper';
import {routes} from '../../Routes/Routes'
import { useState } from 'react';
const CompletedTask = () => {
    const [view, setView] =useState("list")
    const doneTasks = useSelector(state => state.todos.todos.filter(todo => todo.completed === true || todo.completed === "true"));
    console.log(doneTasks);
    const navigate = useNavigate();


    return (
        <>
            <TodoWrapper title="Completed Tasks"  handleView={(view)=>{setView(view)}}>
                <TodoComponent todos={doneTasks} view={view} />
               
            </TodoWrapper>
        </>

    );
}

export default CompletedTask;
