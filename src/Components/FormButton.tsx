import { MouseEventHandler } from "react";

interface IFormButtonProps{
    text: String;
    color: String;
    action: MouseEventHandler<HTMLElement>;
}

export function FormButton({text, color, action}:IFormButtonProps){
    return(
        <button onClick={action} className={`text-1xl mt-3 p-2 text-slate-200 rounded-md md:text-2xl ${color} hover:opacity-90`}>{text}</button>
    )
}