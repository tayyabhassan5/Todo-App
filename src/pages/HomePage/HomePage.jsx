import React, { useState } from "react";
import TodoComponent from "../../components/TodoComponent";
import CreatePostModal from "../../components/CreatePostModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTodoData from "../../hooks/useTodo";
import { routes } from '../../Routes/Routes'
import TodoWrapper from "../../components/TodoWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    const { todo, error, isLoading } = useTodoData();    
    const [view, setView] =useState("list")

    const todos = useSelector(state => state.todos.todos);

    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log(view)

    return (
        <>
            <TodoWrapper title="Todo List" handleView={(view)=>{setView(view)}} >
                           
                <TodoComponent todos={todos} view={view}/>            

            </TodoWrapper>

        </>


    );
};

export default HomePage;
