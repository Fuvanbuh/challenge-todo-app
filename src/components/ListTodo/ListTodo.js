import React, { Component } from 'react'
import todoService from '../../services/todoServices'


export default class ListTodo extends Component {
    state = {
        todos: []

    }
    componentDidMount = async () => {
        const allTodo = await todoService.getAllTodos();
        this.setState({
            todos: allTodo
        })
        //console.log(this.state.todos)

    }
    handleDelete = async (todoId) => {
        const {todos} = this.state
        console.log(todos)
        await todoService.deleteTodo(todoId);
        const newArray = todos.filter((item => item._id !== todoId));
        this.setState({
            todos: newArray
          })
        
    }
    

    render() {
        const { todos } = this.state
        return (
            <div>
                {todos &&
                    todos.map((todo, index) => (
                        <div key={index}>
                            <p>{todo.title}</p>
                            <p>{todo.body}</p>
                            <button onClick={this.handleDelete}>Delete</button>
                        </div>
                    ))}
            </div>
        )
    }

}
