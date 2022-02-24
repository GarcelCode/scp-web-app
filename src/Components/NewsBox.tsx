interface INewsBoxProps{
    title:string;
    imgUrl:string;
    source:string;
    description:string;
    url:string
}

export function NewsBox({title, imgUrl, source, description, url}:INewsBoxProps){

    return (
        <a href={url} target="_blank">
            <div className="flex items-center bg-slate-600 hover:bg-slate-500 border-2 border-slate-600 lg:h-[17rem] md:h-[20rem] rounded-md p-3 hover:scale-[1.01] lg:max-w-[38rem] md:max-w-[40rem] overflow-hidden shadow-xl text-slate-300 md:text-slate-400 hover:text-slate-100">
            <div>
                <h3 className="text-center font-bold text-base mb-2">{title}</h3>
                <div className="flex flex-col md:flex-row gap-3 justify-around items-center">
                    {imgUrl===null?"":<img className="w-[30rem] h-[10rem] md:w-[17rem] lg:w-[13rem] md:h-[15rem] lg:h-[12rem] rounded-md object-cover" src={imgUrl} alt="Imagen de la noticia"/>}
                    <section>
                        <div className="flex gap-3 justify-center">
                            <p className="text-sm mb-3">Fuente: <i className="font-semibold text-sm">{source===null?"No especificado":source}</i></p>
                        </div>
                        <div className="text-sm text-center">
                            {description===null?"No hay descripción de la noticia":description.substring(0, 400)}<a>...</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </a>
    )
}