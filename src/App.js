import { useEffect, useReducer } from "react";

import ToDoList from "./components/ToDoList/ToDoList";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoMessage from "./components/ToDoMessage/ToDoMessage";
import Modal from "./components/Modal/Modal";

import { defaultState, reducer } from "./state/state";

import "./App.css";

function App() {

  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(state.toDos));
  }, [state.toDos]);

  return (
    <div className="App">
      {state.isModalShown && (
        <Modal dispatch={dispatch} deleteId={state.deleteId} />
      )}

      <ToDoForm dispatch={dispatch} toDos={state.toDos} />
      
      {state.toDos.length === 0 ? (
        <ToDoMessage />
      ) : (
        <ToDoList
          toDos={
            state.toggleIsCompleted
              ? state.toDos.filter((toDo) => !toDo.isCompleted)
              : state.toDos
          }
          dispatch={dispatch}
        />
      )}
    </div>
  );
}

export default App;
