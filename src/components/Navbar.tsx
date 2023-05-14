type NavbarProps = {
    totalNumber:number
    score:number | null
}
function Navbar(props:NavbarProps) {
  return (
    <div className='navbar'>
      <div className="container">
        <h1 className='navbar__title'>REACT QUIZ</h1>
        <p className='navbar__score'>Score: {props.score}</p>
        <p className="navbar__number">Total Questions: {props.totalNumber}</p>
      </div>
    </div>
  )
}

export default Navbar