import { string } from 'zod/v4'
import './App.css'

function App() {

  return (
    <>
      <Todo title='Go to gym' description={'Do plyometrics'} done={true} />
    </>
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todo(props: TodoProp) {
  return(
    <div>
      {props.title}
      {props.description}
    </div>
  )
}

export default App
