const Scoreboard = (props) => {
  // display score type and score value
  return (
    <div className={`scoreboard ${props.className}`}>
      <h2>{`${props.scoreType}: ${props.scoreValue}`}</h2>
    </div>
  )
}

// export Scoreboard component
export default Scoreboard;