import React, { ChangeEvent, useState } from "react";
import { TodoCard } from "../Components/TodoCard";

interface ITodo {
  text: string;
  done: boolean;
}

export function ToDo() {
  const [todo, setTodo] = useState({
    text: "",
    done: false,
  });
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const removeHandler = (e: React.MouseEvent<HTMLElement>) => {
    //console.log(e.currentTarget.getAttribute('id'))
    const arrayClone = todos;
    const arrayFilter = arrayClone.filter(function (item) {
      return item.text !== e.currentTarget.getAttribute("id");
    });
    setTodos(arrayFilter);
  };

  const doneHandler = (e: React.MouseEvent<HTMLElement>) => {
    
  };

  const addTodo = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const validate = todos.filter((item) => {
      if (item.text === todo.text) {
        return true;
      }
    });

    if (todo.text === "") {
    } else if (validate.length !== 0) {
      alert("Esa tarea ya existe");
    } else {
      const newTodo = todo;
      setTodos([...todos, newTodo]);
      setTodo({ text: "", done: false });
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">
        ToDo App
      </h2>
      <section className="w-full flex justify-center">
        <form className="flex items-center gap-2">
          <input
            onChange={changeHandler}
            placeholder="Escribe una tarea"
            className="text-slate-200 text-lg p-2 rounded-lg border-none bg-slate-600 w-4/5 focus:border-none focus:border-slate-700 focus:text-slate-100"
            value={todo.text}
          />
          <button
            onClick={addTodo}
            className="text-white text-1xl bg-slate-800 hover:bg-gray-900 p-2 rounded-md duration-300"
          >
            {" "}
            Añadir{" "}
          </button>
        </form>
      </section>
      <ul className="mt-4 mb-5 flex flex-col gap-2 items-center">
        {todos.map((item: ITodo, index: any) => (
          <li key={index}>
            <TodoCard
              text={item.text}
              done={item.done}
              removeAction={removeHandler}
              doneAction={doneHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
