import { useState } from "react";
import TodoList from "./TodoList";

function AddTodo() {

    /*
      [
       { todoText: '' date: ''},
       {},
       {}
      ]
    */


    const [todoText, setTodoText] = useState('');
    const [date, setDate] = useState('');

    const [todo, setTodo] = useState('');

    function onEnterTheTodo(e) {
        setTodoText(e.target.value);
    }

    function onEnterTheDate(e) {
        setDate(e.target.value);
    }

    function add() {

        console.log(todo)
        setTodo('updated')
        console.log(todo)
        // const _todo = [...todo];

        // // console.log(_todo)

        // const newTodoItem = { todoText, date }

        // const newTodo = [...todo, newTodoItem];

        // console.log(newTodo)

        // setTodo([...newTodo])

        // console.log(todo)

    }

    return (
        <>
            <div class="row">
                <div class="col-6">
                    <input type="text" placeholder="Enter todo here" onChange={onEnterTheTodo} />
                </div>
                <div class="col-4">
                    <input type="date" onChange={onEnterTheDate} />
                </div>
                <div class="col-2">
                    <button type="button" class="btn btn-success" onClick={add}>Add</button>
                </div>
            </div>

            <TodoList />
        </>
    )
}

export default AddTodo;