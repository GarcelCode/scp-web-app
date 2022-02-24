interface ITodoCardProps{
    text: string;
    done: boolean;
}

export function TodoCard ({text, done}:ITodoCardProps) {
    return <>
        <div className="flex bg-slate-500 w-80 p-2 gap-3 items-center md:w-96 rounded-md">
            <input type="checkbox" className="ml-2"/>
            <p className="grow-[4]">{text}</p>
            <i className="mr-5">🗑</i>
        </div>
    </>
}