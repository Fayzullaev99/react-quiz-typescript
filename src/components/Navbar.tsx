import { NavbarProps } from "../utils"

function Navbar({totalNumber,score,}:NavbarProps) {
  return (
    <div className='navbar'>
      <div className="container">
        <h1 className='navbar__title'>REACT QUIZ</h1>
        <p className='navbar__score'>Score: {score}</p>
        <p className="navbar__number">Total Questions: {totalNumber}</p>
      </div>
    </div>
  )
}

export default Navbar