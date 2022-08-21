import React from 'react'
import PropTypes from 'prop-types'

const ScoreBoard = ({ playerPoints, pcPoints }) => {
  return (
    <div className="score-board">
      <div>
        <h2>Player: {playerPoints}</h2>
      </div>
      <div>
        <h2>Pc: {pcPoints}</h2>
      </div>
    </div>
  )
}

ScoreBoard.propTypes = {
  playerPoints: PropTypes.number,
  pcPoints: PropTypes.number
}

export default ScoreBoard
