import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style/App.css";

const App = () => {
  // set current score state
  const [currentScore, setCurrentScore] = useState(0);
  // set best score state
  const [bestScore, setBestScore] = useState(0);

  // function to record current score
  const recordCurrentScore = (didWin) => {
    if(didWin) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
    }
  }
  // function to record best score
  const recordBestScore = () => {
    // if current score is bigger than the best score...
    if(currentScore > bestScore) {
      // set the value of best score to the value of current score.
      setBestScore(currentScore)
    }
  }

  useEffect(() => {
    recordBestScore();
  })

  // render header and main components
  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Main recordCurrentScore={recordCurrentScore} />
    </div>
  )
}

export default App;
