interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    handleDeleteTodo: (id: number) => void
}

const TodoData = (props: IProps) => {
    const { todos, handleDeleteTodo } = props;

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}
                    style={{
                        display: "flex", justifyContent: "space-between"
                    }}>
                    <div style={{ padding: "10px" }}>{todo.id}-{todo.title}</div>
                    <div>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                </div >
            ))}
        </>
    );
};

export default TodoData;
