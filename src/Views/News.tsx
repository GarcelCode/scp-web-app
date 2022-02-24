import { useEffect, useState } from "react";
import { NewsBox } from "../Components/NewsBox";

export function News() {
  const [news, setNews] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      fetch("https://api.newscatcherapi.com /v2/latest_headlines?countries=es&topic=tech&page_size=1",{
          method: 'GET',
          headers: { 'x-api-key':'TTrGcOSvcH-YzglkkUVcvHR5BK65XgGjAspTcJhpFwA'}
      })
      .then(response=>response.json())
      .then(data=>console.log(data))
  }, []);

  if (!loaded) return <p>Obteniendo noticias... por favor espera</p>;

  return (
    <>
      <h2 className="text-center text-slate-100 text-3xl my-3 font-bold">
        Noticias sobre tecnología
      </h2>
      <div className="p-3 grid gap-2 lg:grid-cols-2 place-content-center place-items-center">
        {/*<ul>
            {news.map((item:any, index:any)=>(
                <li key={index}><NewsBox title={item.title} url={item.url} imgUrl={item.urlToImage} source={item.source.name} description={item.description} /></li>
            ))}
            </ul>*/}
      </div>
    </>
  );
}
