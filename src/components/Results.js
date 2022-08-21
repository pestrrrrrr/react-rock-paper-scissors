import React from 'react'
import PropTypes from 'prop-types'
const Results = ({ textResult }) => {
  return (
    <div className="results">
        { textResult === ''
          ? <h2>Results</h2>
          : <h2>{textResult}</h2>}

    </div>
  )
}
Results.propTypes = {
  textResult: PropTypes.string
}
export default Results
