import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="flex justify-center items-center mb-5 md:mb-0">
      <ul className="flex flex-col items-center gap-4 w-full sm:inline-flex md:flex-row">
        <li className="mb-1 w-1/2"><Link to="/" className="rounded-tl-border-btn rounded-br-border-btn bg-white py-1.5 px-5 shadow-shadow-bottom block text-center">Personagens</Link></li>
        <li className="mb-1 w-1/2"><Link to="/quadrinhos" className="rounded-tl-border-btn rounded-br-border-btn bg-white py-1.5 px-5 shadow-shadow-bottom block text-center">Quadrinhos</Link></li>
        <li className="mb-1 w-1/2"><Link to="/eventos" className="rounded-tl-border-btn rounded-br-border-btn bg-white py-1.5 px-5 shadow-shadow-bottom block text-center">Eventos</Link></li>
        <li className="mb-1 w-1/2"><Link to="/series" className="rounded-tl-border-btn rounded-br-border-btn bg-white py-1.5 px-5 shadow-shadow-bottom block text-center">Series</Link></li>
        <li className="mb-1 w-1/2"><Link to="/historias" className="rounded-tl-border-btn rounded-br-border-btn bg-white py-1.5 px-5 shadow-shadow-bottom block text-center">Histórias</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;