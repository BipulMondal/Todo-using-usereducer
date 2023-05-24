// todoReducer.js
const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case 'EDIT_TODO':
        return state.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        );
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default todoReducer;
  