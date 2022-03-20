import Scoreboard from "./Scoreboard";

const Header = (props) => {
  // render header
  return (
    <header>
      <Scoreboard className="current-score" scoreType="Current score" scoreValue={props.currentScore} />
      <Scoreboard className="best-score" scoreType="Best score" scoreValue={props.bestScore} />
      <p className="credits">Icons by <a href="https://www.behance.net/ponkyponky">Ponky Ponky</a></p>
    </header>
  )
}

// export Header component
export default Header
