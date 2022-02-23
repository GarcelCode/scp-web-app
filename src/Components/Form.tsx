interface IForm{
    children: JSX.Element | JSX.Element[]
}

export function Form({children}:IForm){
    return(
        <form className="bg-white w-4/5 flex flex-col p-5 rounded-md shadow-lg md:max-w-md md:w-3/5">
            {children}
        </form>
    )
}