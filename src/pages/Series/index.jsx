import { useState, useEffect } from "react";
import { seriesUrl } from "../../config/url";
import MainContent from "../../components/MainContent";

const Series = () => {

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {

    fetch(seriesUrl)
      .then(response => response.json())
      .then(jsonData => {
        setCaracter(jsonData.data.results);
        console.log(jsonData.data.results);
      })

  }, [])

  return (
    <MainContent>
      {caracter.map((item) => {
        return (
          <div className="data-items flex flex-col items-center" key={item.id}>
            <div className="card shadow-shadow-card rounded-xl">
              <img className="rounded-t-xl" src={`${item.thumbnail.path}.jpg`} alt={item.name} />
              <span className="pl-2.5 py-4 block font-black">{item.title}</span>
              {/* <p>{item.description}</p> */}
            </div>
          </div>
        )
      })}
    </MainContent>
  )
}

export default Series;