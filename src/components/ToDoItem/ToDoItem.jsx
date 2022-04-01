import { ACTION_TYPES } from '../../state/state';

import deleteIcon from '../../assets/deleteIcon.svg';
import checked from '../../assets/checked.svg';
import unchecked from '../../assets/unchecked.svg';

function ToDoItem({ toDo, dispatch }) {

    const handleInputChange = (e) => {
        dispatch({ type: ACTION_TYPES.CHECK_TASK, newToDo: {...toDo, isCompleted: e.target.checked} })
    }
    
    const onDeleteBtn = () => {
        dispatch({ type: ACTION_TYPES.SHOW_MODAL, deleteId: toDo.id});
    }
    
    return (
        <div className={toDo.isCompleted ? "completed" : "uncompleted"}>
            <label>
                <input type='checkbox' className="hidden" checked={toDo.isCompleted} onChange={handleInputChange} /> 
                {toDo.isCompleted ? <img className="chbox" src={checked} alt="icon"/> : <img className="chbox" src={unchecked} alt="icon"/>}
            </label>
            <p>{toDo.task}</p>
            <img className="deleteBtn" src={deleteIcon} onClick={onDeleteBtn} alt="icon"/><hr/>
        </div>
    )
}

export default ToDoItem;