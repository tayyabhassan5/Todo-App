import React, { useEffect } from "react";
import TodoComponent from "../../components/TodoComponent";
import CreatePostModal from "./components/CreatePostModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useTodoData from "../../hooks/useTodo";
import { routes } from '../../Routes/Routes'

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

    useEffect(() => {
        console.log("Todos:", todos);
    }, [todos]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-gray-900 sm:w-full md:max-w-[600px] w-full flex flex-col items-center justify-center rounded overflow-hidden shadow-lg text-lg font-bold">
                <div className="items-center italic text-white">todo list</div>
                <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto mt-2">
                    <div className="p-2 gap-2 flex">
                        <CreatePostModal />
                        <button className="p-1 bg-red-500 text-white rounded" onClick={handlePending}>Pending tasks</button>
                        <button className="p-1 bg-green-500 text-white rounded" onClick={handleCompleted}>Completed Tasks</button>
                    </div>
                </div>
                <TodoComponent todos={todos} />
            </div>
        </div>
    );
};
export default HomePage;
