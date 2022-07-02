const MainContent = ({children}) => {
  return (
    // <main className="container-fluid grid gap-4 m-auto w-full sm:grid-cols-3 lg:grid-cols-4">
    <main className="container-fluid grid grid-cols-grid-250 gap-4 m-auto w-full px-1.5">
      {children}
    </main>
  )
}

export default MainContent;


