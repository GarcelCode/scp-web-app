interface INewsBoxProps{
    title:string;
    imgUrl:string;
    source:string;
    description:string;
    url:string
}

export function NewsBox({title, imgUrl, source, description, url}:INewsBoxProps){

    return (
        <a href={url} target="_blank"><div className="flex items-center bg-slate-600 hover:bg-slate-500 border-2 border-slate-600 h-[13rem] rounded-md p-3 hover:scale-[1.01] lg:max-w-[36rem] md:max-w-[45rem] overflow-hidden shadow-xl text-slate-400 hover:text-slate-100">
            <div>
                <h3 className="text-center font-bold text-base mb-2">{title}</h3>
                <div className="flex gap-3 justify-around">
                    {imgUrl===null?"":<img className="w-32 h-28 rounded-md object-cover" src={imgUrl} alt="Imagen de la noticia"/>}
                    <section>
                        <div className="flex gap-3 justify-center">
                            <p>Fuente: <i className="font-semibold">{source}</i></p>
                        </div>
                        <div className="text-sm text-center">
                            {description===null?"No hay descripción de la noticia":description}
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </a>
    )
}