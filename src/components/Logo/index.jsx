import logo from '../_assets/marvel-logo.png'

const Logo = () => {
  return (
    <div className='logo flex justify-center'>
      <img src={logo} alt="Marvel Logo" className="w-40" />
    </div>
  )
}

export default Logo;