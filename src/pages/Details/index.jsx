import { useParams } from "react-router-dom";

const Details = () => {

  const { id } = useParams()
  console.log(id)


  return (
    <div>
      Página Detalhes
    </div>
  )
}

export default Details;