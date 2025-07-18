import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
interface IProps {
    name?: string
    handleAddTodo: (todo: ITodo) => void
}

const TodoInput = (props: IProps) => {
    const { handleAddTodo } = props
    const [todo, setTodo] = useState<string>("")
    const handleOnclick = () => {
        if (!todo) alert("Vui long nhap todo")
        handleAddTodo({ id: Date.now(), title: todo, isComplete: false })
        setTodo("")
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <input
                value={todo}
                onChange={onChange}
                type="text"
            />
            <button onClick={handleOnclick}>Add Todo</button>
        </div>
    );
};

export default TodoInput;
