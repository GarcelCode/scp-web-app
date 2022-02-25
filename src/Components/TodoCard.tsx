interface ITodoCardProps {
  text: string;
  done: boolean;
  removeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export function TodoCard({ text, done, removeAction }: ITodoCardProps) {
  return (
    <>
      <div className="flex bg-slate-500 w-[20rem] p-2 gap-3 items-center md:w-[26rem] rounded-md">
        <input
          type="checkbox"
          className="ml-2 w-6 h-6 border-2 border-slate-400 rounded-full hover:scale-110 bg-white hover:bg-slate-200"
        ></input>
        <p
          className={`grow-[1] text-slate-100 font ${
            done ? "line-through" : ""
          }`}
        >
          {text}
        </p>
        <span
          id={text}
          onClick={removeAction}
          title="Eliminar tarea"
          className="px-2 rounded-sm mr-5 text-xl text-slate-400 hover:bg-slate-700 hover:shadow-lg cursor-pointer duration-300"
        >
          ✖
        </span>
      </div>
    </>
  );
}
