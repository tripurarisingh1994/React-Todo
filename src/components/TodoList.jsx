function TodoList({ todo, deleteItemHandler }) {

    function deleteItem(id) {
        deleteItemHandler(id)
    }

    return (
        <>
            {todo.length > 0 && todo.map(item =>
            (<div className="row" key={item.id}>
                <div className="col-6">
                    {item.todoTitle}
                </div>
                <div className="col-4">
                    {item.dueDate}
                </div>
                <div className="col-2">
                    <button type="button" onClick={() => deleteItem(item.id)} className="btn btn-danger">Delete</button>
                </div>
            </div>)
            )}
        </>);
}

export default TodoList;