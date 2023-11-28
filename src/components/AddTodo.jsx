import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function AddTodo() {

    const [todoTitle, setTodoTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        return () => {
            setTodoTitle('')
            setDueDate('')
        }
    }, [todo])

    function onEnterTheTodo(e) {
        setTodoTitle(e.target.value);
    }

    function onEnterTheDate(e) {
        setDueDate(e.target.value);
    }

    function add() {
        const id = todo.length + 1;

        const newTodoItem = { id, todoTitle, dueDate }

        const newTodo = [...todo, newTodoItem];

        setTodo(newTodo)

    }

    function deleteTodoItemHandler(id) {

        const idx = todo.findIndex(item => item.id === id)

        if (idx > -1) {
            todo.splice(idx, 1);
        }
        const newTodo = [...todo]

        setTodo(newTodo);

    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <input type="text" value={todoTitle} placeholder="Enter Todo Title here" onChange={onEnterTheTodo} />
                </div>
                <div className="col-4">
                    <input type="date" value={dueDate} onChange={onEnterTheDate} />
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-success" onClick={add}>Add</button>
                </div>
            </div>

            <TodoList todo={todo} deleteItemHandler={deleteTodoItemHandler} />
        </>
    )
}

export default AddTodo;