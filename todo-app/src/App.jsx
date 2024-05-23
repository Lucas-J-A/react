import { Task } from './components/Task'

const tasks = [
  {
    id: 1,
    title: 'Estudar React por pelo menos 20 min',
    isCompleted: false
  }
]

export function App() {
  return (
    <main>
      <h1>Todo App</h1>
      <input type="text" />
      <button>Add</button>
      {tasks.length > 0 && tasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
      {!tasks.length && <p>Nehuma tarefa ainda... </p>}
    </main>
  )
}
