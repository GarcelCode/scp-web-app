import { useEffect, useState } from "react"
import { isTemplateSpan } from "typescript";
import { NewsBox } from "../Components/NewsBox";

export function News () {

    const [news, setNews] = useState<any>([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
            fetch("https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=c5dfc193a512497cb1cb3da4981faffc")
                .then((response) => response.json())
                .then((jsonData) => {setNews(jsonData); setLoaded(true)})
    },[])

    if(!loaded) return <p>Obteniendo noticias... por favor espera</p>

    const newsArray = news.articles

    console.log(newsArray)

    return (<>
        
        <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">Noticias sobre tecnología</h2>
        <div className="p-3 grid gap-2 lg:grid-cols-2 place-content-center place-items-center">
        {newsArray.map((item:any, index:any)=>(
            <div key= {index}>
                <NewsBox title={item.title} imgUrl={item.urlToImage} source={item.source.name} description={item.description} url={item.url}/>
            </div>
        ))
        }
        </div>
        
    </>)

}