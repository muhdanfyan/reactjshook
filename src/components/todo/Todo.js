import React from 'react'
import TodoList from '../todo-list/TodoList'

const Todo = () => {
    const todos = [
        { id:1, title:'Eat' },
        { id:2, title:'Sleep' },
        { id:3, title:'Code' },
    ]
    return (
        <div>
            <h3>To Do List</h3>
            <TodoList dataTodos= {todos}/>
        </div>
    )
}

export default Todo
