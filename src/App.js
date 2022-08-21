import React, { useState, useEffect } from 'react'
import Battlefield from './components/Battlefield'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import Results from './components/Results'
import Overlay from './components/Overlay'
function App () {
  const [playerChoice, setPlayerChoice] = useState({
    source: null,
    name: null
  })
  const [pcChoice, setPcChoice] = useState({ source: null, name: null })
  const [playerPoints, setPlayerPoints] = useState(0)
  const [pcPoints, setPcPoints] = useState(0)
  const [textResult, setTextResult] = useState('')
  const [overlay, setOverlay] = useState({ display: 'none' })
  const playerChoiceFce = (e) => {
    setPlayerChoice(e)
  }
  const pcChoiceFce = (e) => {
    setPcChoice(e)
  }

  useEffect(() => {
    if (pcPoints === 5 || playerPoints === 5) {
      setOverlay({ display: 'flex' })
    }
  }, [playerPoints, pcPoints])
  useEffect(() => {
    const results = playerChoice.name + pcChoice.name
    if (
      results === 'rockpaper' ||
      results === 'paperscissors' ||
      results === 'scissorsrock'
    ) {
      setPcPoints(pcPoints + 1)
      setTextResult('PC wins')
    } else if (
      results === 'rockscissors' ||
      results === 'paperrock' ||
      results === 'scissorspaper'
    ) {
      setPlayerPoints(playerPoints + 1)

      setTextResult('Player wins')
    } else if (
      results === 'rockrock' ||
      results === 'paperpaper' ||
      results === 'scissorsscissors'
    ) {
      setTextResult("It's a tie")
    }
  }, [playerChoice])
  return (
    <div className="App">
      <Header></Header>
      <ScoreBoard playerPoints={playerPoints} pcPoints={pcPoints}></ScoreBoard>
      <Battlefield
        playerChoice={playerChoice}
        pcChoice={pcChoice}
        playerChoiceFce={playerChoiceFce}
        pcChoiceFce={pcChoiceFce}
      ></Battlefield>
      <Results textResult={textResult}></Results>
<Overlay overlay={overlay} playerPoints={playerPoints}></Overlay>
    </div>
  )
}

export default App
