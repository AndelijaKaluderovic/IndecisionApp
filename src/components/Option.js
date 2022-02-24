import React from 'react'

const Option = (props) => {
  console.log('testing');
    return (
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
  };

  export default Option
