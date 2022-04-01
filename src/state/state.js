const ACTION_TYPES = {
  ADD_TASK: "ADD_TASK",
  CHECK_TASK: "CHECK_TASK",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  SHOW_MODAL: "SHOW_MODAL",
  DELETE_TASK: "DELETE_TASK",
  HIDE_MODAL: "HIDE_MODAL",
};
  
const defaultState = {
  toDos: JSON.parse(localStorage.getItem('toDos')) || [],
  toggleIsCompleted: false,
  isModalShown: false,
  deleteId: null,
};
  
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK: {
      return {
        ...state,
        toDos: [
          {
            id: Math.random(),
            task: action.task,
            isCompleted: false,
          },
          ...state.toDos,
        ],
      };
    }
    case ACTION_TYPES.CHECK_TASK: {
      return {
        ...state,
        toDos: state.toDos.map((toDo) => {
          return toDo.id === action.newToDo.id ? action.newToDo : toDo;
        }),
      };
    }
    case ACTION_TYPES.TOGGLE_COMPLETED: {
      return { ...state, toggleIsCompleted: !state.toggleIsCompleted };
    }
    case ACTION_TYPES.SHOW_MODAL: {
      return {
        ...state,
        deleteId: action.deleteId,
        isModalShown: !state.isModalShown,
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.deleteId),
        isModalShown: false,
        deleteId: null,
      };
    }
    case ACTION_TYPES.HIDE_MODAL: {
      return {
        ...state,
        isModalShown: !state.isModalShown,
      };
    }
    default:
      return state;
  }
}

export { ACTION_TYPES, defaultState, reducer };