import { useState, useEffect } from "react";
import { eventsUrl } from "../../config/url"; 

const Events = () => {

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {

    fetch(eventsUrl)
      .then(response => response.json())
      .then(jsonData => {
        setCaracter(jsonData.data.results);
        console.log(jsonData.data.results);
      })

  }, [])

  return (
    <div className="grid grid-cols-grid-300 gap-6 w-full">
      {caracter.map((item) => {
        return (
          <div className="data-items flex flex-col items-center px-4" key={item.id}>
            <div className="card shadow-shadow-card rounded-xl">
              <img className="rounded-t-xl" src={`${item.thumbnail.path}.jpg`} alt={item.name} />
              <span className="pl-2.5 py-4 block font-black">{item.title}</span>
              <p className="pl-2.5 pb-4">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Events;