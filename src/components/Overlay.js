import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Overlay = ({ overlay, playerPoints }) => {
  const [nameInput, setNameInput] = useState('')
  const [nameDisplay, setNameDisplay] = useState(
    JSON.parse(localStorage.getItem('players')) || []
  )

  const addName = () => {
    if (nameDisplay.length === 0) {
      const id = '1'
      console.log(id)
      const playerInfo = {
        name: nameInput,
        score: playerPoints,
        date: new Date().toLocaleString(),
        idNum: id
      }
      localStorage.setItem(
        'players',
        JSON.stringify([playerInfo])
      )
      setNameDisplay([...nameDisplay, playerInfo])
      setNameInput('')
      console.log(nameDisplay)
    } else {
      const ids = nameDisplay.map((object) => {
        return object.idNum
      })
      const id = Math.max(...ids) + 1
      console.log(id)
      const playerInfo = {
        name: nameInput,
        score: playerPoints,
        date: new Date().toLocaleString(),
        idNum: id.toString()
      }
      setNameDisplay([...nameDisplay, playerInfo])
      setNameInput('')
      console.log(nameDisplay)

      localStorage.setItem(
        'players',
        JSON.stringify([...nameDisplay, playerInfo])
      )
    }
  }
  useEffect(() => {
    console.log(nameDisplay)
  }, [])
  return (
    <div className="overlay" style={overlay}>
      <div className="card">
        <h1>Sign your score:</h1>
        <input
          type="text"
          placeholder="Nickname"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value)
          }}
        />
        <button onClick={addName}>Add</button>

        <div>
          {nameDisplay.map((player) => (
            <div key={player.idNum}>
              <hr style={{ marginTop: '20px' }} />
              <div className="name-and-score">
                <h4 style={{ marginRight: '30px' }}>Nickname: {player.name}</h4>
                <h4 style={{ marginRight: '30px' }}>Score: {player.score}</h4>
                <h4 style={{ marginRight: '30px' }}>{player.date}</h4>
              </div>
            </div>
          ))}
        </div>
        <button style={{ marginBlock: '15px' }} onClick={() => { window.location.reload() }}>Cancel</button>
      </div>
    </div>
  )
}
Overlay.propTypes = {
  overlay: PropTypes.object,
  playerPoints: PropTypes.number

}
export default Overlay
