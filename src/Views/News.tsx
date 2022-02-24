import { useEffect, useState } from "react";
import { NewsBox } from "../Components/NewsBox";

export function News() {
  const [news, setNews] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=mx&category=technology&apiKey=c5dfc193a512497cb1cb3da4981faffc";
    const testApiUrl = "https://jsonplaceholder.typicode.com/posts"


  useEffect(() => {
    try {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            const err = new Error("Not 2xx response");
            console.log(err.message);
          } else {
            return response.json();
          }
        })
        .then((data) => {
            console.log(data.articles)
          setNews(data.articles);
          setLoaded(true);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!loaded) return <p>Obteniendo noticias... por favor espera</p>;

  return (
    <>
      <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">
        Noticias sobre tecnología
      </h2>
      <div className="p-3 grid gap-2 lg:grid-cols-2 place-content-center place-items-center">
        <ul>
            {news.map((item:any, index:any)=>(
                <li key={index}><NewsBox title={item.title} url={item.url} imgUrl={item.urlToImage} source={item.source.name} description={item.description} /></li>
            ))}
        </ul>
      </div>
    </>
  );
}
