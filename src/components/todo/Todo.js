import React from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

const Todo = () => {
    const todos = [
        { id:1, title:'Eat' },
        { id:2, title:'Sleep' },
        { id:3, title:'Code' },
    ]

    const eventCreateToDo = (todo) =>{
        todos.push(todo)
        console.log(todos)
    }

    return (
        <div>
            <h3>To Do List</h3>
            <TodoCreate onCreateTodo={ eventCreateToDo }/>
            <TodoList dataTodos= {todos}/>
        </div>
    )
}

export default Todo
