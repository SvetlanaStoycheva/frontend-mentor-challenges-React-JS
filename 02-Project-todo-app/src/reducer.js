const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TASK') {
    const newTask = {
      id: new Date().getTime().toString(),
      task: action.payload,
      active: true,
    };
    return { ...state, currentList: [...state.currentList, newTask] };
  }
  if (action.type === 'DELETE_ITEM') {
    const newList = state.currentList.filter(
      (item) => item.id !== action.payload
    );
    return { ...state, currentList: newList };
  }
  if (action.type === 'SET_TASK_COMPLETED') {
    const newCurrentList = state.currentList.map((item) => {
      if (item.id === action.payload) {
        item.active = false;
        return item;
      }
      return item;
    });

    return {
      ...state,
      currentList: newCurrentList,
    };
  }
  if (action.type === 'SHOW_ALL') {
    return { ...state };
  }
  if (action.type === 'SHOW_ACTIVE') {
    let active = [...state.currentList];
    active = active.filter((item) => item.active === true);
    return { ...state, activeTasks: active };
  }
  if (action.type === 'SHOW_COMPLETED') {
    let completed = [...state.currentList];
    completed = completed.filter((item) => item.active === false);
    return { ...state, completedTasks: completed };
  }
  if (action.type === 'CLEAR_COMPLETED') {
    const newCurrentList = state.currentList.filter(
      (item) => item.active === true
    );
    return { ...state, currentList: newCurrentList, completedTasks: [] };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
