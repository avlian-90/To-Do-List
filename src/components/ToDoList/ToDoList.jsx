import ToDoItem from '../../components/ToDoItem/ToDoItem';

function ToDoList({ toDos, dispatch }) {
    return (
        <div className="todoContainer">
            {toDos.map(toDo => <ToDoItem key={toDo.id} toDo={toDo} dispatch={dispatch} />)}
        </div>
    )
}

export default ToDoList;