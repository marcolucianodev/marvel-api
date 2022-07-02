import { useEffect, useState } from "react";
import { charactersUrl, baseExtensionImage } from "../../config/url";
import MainContent from "../../components/MainContent";


const Characters = () => {

  const [caracter, setCaracter] = useState([]);

  useEffect(() => {

    fetch(charactersUrl)
      .then(response => response.json())
      .then(jsonData => {
        setCaracter(jsonData.data.results);
      })

  }, [])

  return (
    <MainContent>
      {caracter.map((item) => {
        return (
            <div className="data-items flex flex-col items-center" key={item.id}>
              <div className="card shadow-shadow-card rounded-xl">
                <img className="rounded-t-xl" src={`${item.thumbnail.path}${baseExtensionImage}`} alt={item.name} />
                <span className="pl-2.5 py-4 block font-black">{item.name}</span>
                {console.log(item.stories.items)}
              </div>
            </div>
        )
        
      })}
    </MainContent>
  )
}

export default Characters;