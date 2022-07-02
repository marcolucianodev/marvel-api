import { useState, useEffect } from "react";
import MainContent from "../../components/MainContent";
import { storiesUrl } from "../../config/url";

const Stories = () => {

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {

    fetch(storiesUrl)
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
            {/* <img src={`${item.thumbnail.path}.jpg`} alt={item.name} /> */}
            <div className="card shadow-shadow-card rounded-xl w-250 h-180 flex justify-center items-center p-6">
              <span>{item.title}</span>
            </div>
            {/* <p>{item.description}</p> */}
          </div>
        )
      })}
    </MainContent>
  )
}

export default Stories;