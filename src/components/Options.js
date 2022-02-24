import React from 'react'
import Option from './Option'

const Options = (props) => (
  <div className="options">
    <button
      className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove all
    </button>
    {props.options.length === 0 && <p>Please provide an option to get started!</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
)
export default Options