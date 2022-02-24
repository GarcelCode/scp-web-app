import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { NewsBox } from "../Components/NewsBox";

export function News() {
  const [news, setNews] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const options:AxiosRequestConfig = {
      method: 'GET',
      url:'https://api.newscatcherapi.com/v2/latest_headlines',
      params: {countries:'MX', topic:'tech', page:'1'},
      headers: {
          'x-api-key':'TTrGcOSvcH-YzglkkUVcvHR5BK65XgGjAspTcJhpFwA'
      }
  }

  useEffect(() => {
      axios.request(options).then(function(response){
          //console.log(response.data.articles)
          setNews(response.data.articles)
          setLoaded(true)
      }).catch(function(error){
          console.error(error);
      })
  }, []);

  if (!loaded) return <p className="text-white p-10">Obteniendo noticias... por favor espera</p>;

  return (
    <>
      <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">
        Noticias sobre tecnología
      </h2>
      <div>
        <ul className="p-3 grid gap-2 lg:grid-cols-2 place-content-center place-items-center">
            {news.map((item:any, index:any)=>(
                <li key={index}>
                    <NewsBox title={item.title} imgUrl={item.media} source={item.author} description={item.summary} url={item.link}/>
                </li>
            ))}
            </ul>
      </div>
    </>
  );
}
