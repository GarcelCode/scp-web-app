import React, { ChangeEventHandler } from "react";

interface FormProps{
    text: string;
    type: string;
    name: string;
    action: ChangeEventHandler<HTMLInputElement>;
}

export function FormInputRow ({text, type, name, action}:FormProps) {
    return (
        <>
            <label className="text-center text-1xl md:text-2xl">{text}</label>
            <input type={type} name={name} className="shadow-inner border-2 border-blue-400 rounded-lg p-1.5 md:p-2" onChange={action}/>
        </>
    );
}