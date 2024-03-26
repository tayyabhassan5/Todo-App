import React, { useEffect } from "react";
import TodoComponent from "../../components/TodoComponent";
import CreatePostModal from "./components/CreatePostModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTodoData from "../../hooks/useTodo";
import { routes } from '../../Routes/Routes'
import TodoWrapper from "../../components/TodoWrapper";

const HomePage = () => {

    const navigate = useNavigate();

    const { todo, error, isLoading } = useTodoData();

    const todos = useSelector(state => state.todos.todos);

    const handleCompleted = () => {
        navigate(routes.completed);
    }

    const handlePending = () => {
        navigate(routes.pending);
    }



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <TodoWrapper title="Todo List" handleRouting={handleCompleted} handlePending={handlePending}>
                <CreatePostModal />
                <TodoComponent todos={todos} />
            </TodoWrapper>
        </>


    );
};

export default HomePage;
