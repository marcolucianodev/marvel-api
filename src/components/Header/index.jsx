import Menu from "../Menu";
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="container-fluid flex flex-col justify-center flex-wrap gap-6 py-5 bg-black-marvel md:flex-row md:justify-evenly">
      <Logo />
      <Menu />
    </header>
  )
}

export default Header;