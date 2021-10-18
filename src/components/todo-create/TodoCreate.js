import './TodoCreate.css'
import { useState } from 'react'

const TodoCreate = (props) => {
    const [InputTodo, setInputTodo] = useState('')
    const handleSubmit = (event) =>{
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title : InputTodo
        }

        props.onCreateTodo (newTodo)

        // console.log(newTodo)
        setInputTodo('')
    }
    const handleInputTodo = (event) =>{
        setInputTodo(event.target.value)
        console.log(InputTodo)
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={InputTodo} onChange={handleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate
