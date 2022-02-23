import { useEffect, useState } from "react"
import { NewsBox } from "../Components/NewsBox";

export function News () {

    const [news, setNews] = useState<any>([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        {
            fetch("https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=c5dfc193a512497cb1cb3da4981faffc")
                .then((response) => response.json())
                .then((jsonData) => {setNews(jsonData); setLoaded(true)})
        }
    },[])

    if(!loaded) return <p>Getting news... please wait</p>

    return (<>
        
        <div>
            <NewsBox/>
        </div>
        
    </>)

}