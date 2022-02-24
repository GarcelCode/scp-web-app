import { useEffect, useState } from "react";
import { NewsBox } from "../Components/NewsBox";

export function News () {

    const [news, setNews] = useState<any>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        try{
            fetch("https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=c5dfc193a512497cb1cb3da4981faffc")
            .then(response=>response.json())
            .then(data=>{
                if(data.status==="error"){
                    setLoaded(true)
                    setNews("El servidor no devolvió las noticias")
                }else{
                    setNews(data);
                    setLoaded(true);
                }
        })
        }catch(error){
            console.log(error)
        }
    },[])

    if(!loaded) return <p>Obteniendo noticias... por favor espera</p>

    return (<>
        <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">Noticias sobre tecnología</h2>
        <div className="p-3 grid gap-2 lg:grid-cols-2 place-content-center place-items-center">
        <NewsBox title="Hola" url="" imgUrl="" source="" description=""/>
        </div>
    </>)

}