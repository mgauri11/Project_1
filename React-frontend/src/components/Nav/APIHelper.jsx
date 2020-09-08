import axios from "axios"

const API_URL = "http://localhost:4000/api/todos/"

async function createTodo(action) {
  const { data: newTodo } = await axios.post(API_URL, {
    action,
  })
  return newTodo
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL)
  return todos
}

export default { createTodo, deleteTodo, getAllTodos }