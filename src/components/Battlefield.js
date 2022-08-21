import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Battlefield = ({ playerChoice, pcChoice, playerChoiceFce, pcChoiceFce }) => {
  const rock = 'https://img.icons8.com/ios-filled/50/000000/rock.png'
  const paper = 'https://img.icons8.com/laces/64/000000/experimental-paper-laces.png'
  const scissors = 'https://img.icons8.com/ios/50/000000/scissors.png'
  const [time, setTime] = useState(false)
  const pcRandNum = (e) => {
    timeout()
    const pcNum = Math.floor(Math.random() * 3)
    if (pcNum === 0) {
      pcChoiceFce({ source: rock, name: 'rock' })
    } else if (pcNum === 1) {
      pcChoiceFce({ source: paper, name: 'paper' })
    } else if (pcNum === 2) {
      pcChoiceFce({ source: scissors, name: 'scissors' })
    }
    playerChoiceFce(e)
  }
  const timeout = () => {
    setTime(true)
    setTimeout(() => {
      setTime(false)
    }, 1000)
  }
  return (
    <div className="battlefield">
      {time
        ? <div className='playground'>
        <h2>PC is choosing!</h2>
      </div>
        : <div>
      <div className='playground'>
        <img src={playerChoice.source} /><img src={pcChoice.source} />
      </div>
      <hr />
      <div className="buttons">
        <input type="button" value="Rock" style={{ marginRight: '25px' }} onClick={() => { pcRandNum({ source: rock, name: 'rock' }) }}/>
        <input type="button" value="Paper" onClick={() => { pcRandNum({ source: paper, name: 'paper' }) }}/>
        <input type="button" value="Scissors" style={{ marginLeft: '25px' }} onClick={() => { pcRandNum({ source: scissors, name: 'scissors' }) }}/>
      </div>
      <div className="buttons">
        <input className="reset" type="button" value="Reset game" onClick={() => { window.location.reload() }}/>
      </div></div>}
    </div>
  )
}
Battlefield.propTypes = {
  playerChoice: PropTypes.object,
  pcChoice: PropTypes.object,
  playerChoiceFce: PropTypes.func,
  pcChoiceFce: PropTypes.func

}
export default Battlefield
