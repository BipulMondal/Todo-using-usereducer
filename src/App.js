import "./App.css";
import React, { useReducer, useState } from 'react';
import todoReducer from './components/TodoReducer';

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState('');

  const addTodo = e => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setNewTodo('');
    }
  };

  const editTodo = (id, text) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const updateTodo = e => {
    e.preventDefault();
    if (editingTodoText.trim()) {
      dispatch({ type: 'EDIT_TODO', payload: { id: editingTodoId, text: editingTodoText } });
      setEditingTodoId(null);
      setEditingTodoText('');
    }
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className='todo'>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          id="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="        Enter a new todo"
          autoComplete="off"
        />
        <button id="btn" type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <div key={todo.id}>
            {editingTodoId === todo.id ? (
              <form onSubmit={updateTodo}>
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={e => setEditingTodoText(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <div className="output">
                  {todo.text}
                <button id="btn-1" onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
                <button id="btn-1" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
