interface ITodoCardProps{
    text: string;
    done: boolean;
    action: (e:React.MouseEvent<HTMLSpanElement>)=>void
}

export function TodoCard ({text, done, action}:ITodoCardProps) {
    return <>
        <div className="flex bg-slate-500 w-[22rem] p-2 gap-3 items-center md:w-[26rem] rounded-md">
            <input type="radio" className="ml-2 min-w-[1.4rem] h-10 rounded-lg hover:scale-110"/>
            <p className="grow-[1] text-slate-100">{text}</p>
            <span id={text} onClick={action} title="Eliminar tarea" className="px-2 rounded-sm mr-5 text-xl text-slate-400 hover:bg-slate-700 hover:shadow-lg cursor-pointer duration-300">✖</span>
        </div>
    </>
}