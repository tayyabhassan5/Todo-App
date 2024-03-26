import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import api from "../utils/api";

const fetchTodo = async () => {
    try {
        const response = await api.get('/todos');

        if (response.ok) {
            const data = response.data.slice(0, 10);
            return data;
        } else {
            throw new Error('Failed to fetch todos');
        }
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
}

const useTodoData = () => {
    const dispatch = useDispatch();

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
    }, [todo, dispatch]);

    return { todo, error, isLoading };
}

export default useTodoData;
