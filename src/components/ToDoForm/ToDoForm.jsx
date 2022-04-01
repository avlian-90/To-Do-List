import { useState } from 'react';
import { ACTION_TYPES } from '../../state/state';

import checked from '../../assets/checked.svg';
import unchecked from '../../assets/unchecked.svg';

function ToDoForm({dispatch, toDos}) {

   const [task, setTask] = useState(''); 
   const [isValid, setIsValid] = useState(true);
   const [isChecked, setIsChecked] = useState(false);

   const onInputChange = (e) => {
       if(e.target.value.length > 54) {
           setIsValid(false);
       } else {
        setIsValid(true);
        setTask(e.target.value);
       }
   }

   const onCheck = () => {
       setIsChecked(!isChecked);
       dispatch({type: ACTION_TYPES.TOGGLE_COMPLETED});
   }

   const onFormSubmit = (e) => {
        if(isValid && task.length !== 0) {
            e.preventDefault();
            setIsValid(true);
            dispatch({ type: ACTION_TYPES.ADD_TASK, task: task });
            setTask('');
        } 
   }
    return (
        <>
            {toDos.length !== 0 && <div className="header">
                <label>
                    {isChecked ? <img src={checked} onClick={onCheck} alt="icon"/> : <img src={unchecked} onClick={onCheck} alt="icon" />}
                    <span className="hide">Hide completed</span>
                </label>
            </div>}
            <div className={toDos.length === 0 ? "todoform1" : "todoform2"}>
                <form onSubmit={onFormSubmit}>
                    <p>Task</p>
                    <div className="baseline">
                        <input type='text' value={task} onChange={onInputChange} placeholder="Write here" className={isValid ? "valid" : "invalid"} />
                        <button>Add</button>
                    </div>
                    {!isValid && <p className="error">Task content can contain max 54 characters</p>}
                </form>
            </div>
        </>
    )
}

export default ToDoForm;