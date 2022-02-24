import { ChangeEvent, useState } from "react";
import { TodoCard } from "../Components/TodoCard";

interface ITodo{
  text: string,
  done: boolean
}

export function ToDo() {

  const [todo, setTodo] = useState({
    text: "",
    done: false
  })
  const [todos, setTodos] = useState<any>([]);

  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, text: e.target.value})
  }

  const addTodo = (e:React.MouseEvent<HTMLElement>) =>{
    e.preventDefault();
    const newTodo = todo;
    setTodos([...todos, newTodo])
  }

  return (
    <div className="flex flex-col justify-center">
        <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">ToDo App</h2>
        <section className="w-full flex justify-center">
            <form className="flex items-center gap-2">
                <input onChange={changeHandler} placeholder="Escribe una tarea" className="text-slate-200 text-lg p-2 rounded-lg border-none bg-slate-600 w-4/5 focus:border-none focus:border-slate-700 focus:text-slate-100"/>
                <button onClick={addTodo} className="text-white text-1xl bg-slate-800 hover:bg-gray-900 p-2 rounded-md duration-300"> Añadir </button>
            </form>
        </section>
        <section className="mt-4 flex flex-col gap-2 items-center">
          {todos.map((item:ITodo)=>(
            <TodoCard text={item.text} done={item.done}/>
          ))}
        </section>
    </div>
  );
}
