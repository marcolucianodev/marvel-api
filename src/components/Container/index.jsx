const Container = ({ children}) => {
  return (
    <div className="container grid m-auto grid-cols my-10">
      {children}
    </div>
  )
}

export default Container;