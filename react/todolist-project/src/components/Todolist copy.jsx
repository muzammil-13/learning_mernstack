import React, { useEffect, useState } from 'react';

export const Todolist = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editing, setEditing] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== '') {
            const newTodoItem = {
                id: Date.now(),
                text: newTodo,
                completed: false
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const handleEdit = (id, text) => {
        setEditing(id);
        setEditingText(text);
    };

    const handleSave = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text: editingText };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditing(null);
        setEditingText('');
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={newTodo} 
                    onChange={(event) => setNewTodo(event.target.value)} 
                    type="text" 
                    placeholder='Add New Todo' 
                />
                <button type='submit'>Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {editing === todo.id ? (
                            <div>
                                <input 
                                    type='text'
                                    value={editingText}
                                    onChange={(event) => setEditingText(event.target.value)} 
                                />
                                <button onClick={() => handleSave(todo.id)}>Save</button>
                            </div>
                        ) : (
                            <span>{todo.text}</span>
                        )}
                        <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
