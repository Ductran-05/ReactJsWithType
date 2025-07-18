import { useState } from "react";
import TodoData from "./todo.data"
import TodoInput from "./todo.input"

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const TodoList = () => {
    const [listTodo, setListTodo] = useState<ITodo[]>([])
    const handleAddTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo])
    }
    const handleDeleteTodo = (id: number) => {
        setListTodo(listTodo.filter((todo) => todo.id !== id))
    }
    return (
        <div style={{
            width: "600px",
            margin: "50 auto",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "15px",
        }}>
            <div
                style={{
                    padding: "10px 0",
                    borderBottomWidth: "1",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#ccc"
                }}>My Todo List:</div>
            <br />
            <TodoInput name="todo"
                handleAddTodo={handleAddTodo} />
            <TodoData todos={listTodo}
                handleDeleteTodo={handleDeleteTodo} />
        </div>
    )
}

export default TodoList