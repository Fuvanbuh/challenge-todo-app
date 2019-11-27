import axios from 'axios';


class TodoService { 
    constructor() {
        this.todo = axios.create({
            baseURL: 'http://localhost:4000/api/v1'
        })}

    getAllTodos() {
        return this.todo.get('/todos')
          .then(response => response.data)
      };

    getOneTodo(id) {
        return this.todo.get(`/todos/${id}`)
          .then(response => response.data)
      };


    
    createTodo(newTodo) {
      const { title, body } = newTodo;
      return this.todo
        .post("/todos", { title, body})
        .then(({ data }) => data);
  }

    editOneTodo(id){
        return this.todo.put(`/todos/${id}`)
        .then (response => response.data)
      }

    deleteTodo(todoId) {
        return this.todo.delete(`/todos/${todoId}`)
          .then(response => response.data)
      }
}





const todoService = new TodoService();
export default todoService;