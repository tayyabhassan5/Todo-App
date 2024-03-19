import React, { useEffect } from "react";
import TodoComponent from "../components/todocomponent";
import CreatePostModal from "../components/createPostModal";
import { useQuery } from "react-query";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { addTodo } from "../redux/todoSlice";


const fetchTodo = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const data = response.data.slice(0, 10);
    return data;
}

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const completedTasks = useSelector(getCompletedTasks);
    // console.log("completedTaks",completedTasks);


    const { data: todo, error, isLoading } = useQuery("TodoData", fetchTodo);

    useEffect(() => {
        if (todo) {
            todo.forEach(item => {
                dispatch(addTodo({
                    id: item.id,
                    title: item.title,
                    completed: item.completed
                }));
            });
        }
    }, [todo]);

    const todos = useSelector(state => state.todos.todos);
    // const todos = useSelector(getCompletedTasks);
    // console.log(todos);


    const handleCompleted = () => {
        navigate('/completed');
    }

    const handlePending = () => {
        navigate('/pending');
    }

    useEffect(() => {
        console.log("Todos:", todos);
    }, [todos]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col items-center">
            <div className="p-2 bg-gray-900 w-[600px] flex flex-col items-center justify-center rounded overflow-hidden shadow-lg italic text-lg font-bold">
                <div className="items-center text-white">todo list</div>
                <div className="flex">
                    <div className="p-2 flex"><CreatePostModal />
                        <button className="p-1 bg-red-500 hover:bg-blue-700 text-white rounded" onClick={handlePending}>Pending tasks</button>
                        <button className="p-1 bg-green-500 hover:bg-blue-700 text-white rounded" onClick={handleCompleted}>Completed Tasks</button>
                    </div>
                </div>
                <TodoComponent todos={todos} />
            </div>
        </div>
    );
};

export default HomePage;
