import React from 'react'

const Option = (props) => (
  <div className="option">
    <p>{props.optionText}</p>
    <button onClick={(e) => {
      props.handleDeleteOption(props.optionText)
    }}
    >
      remove
    </button>
  </div>
)
export default Option
