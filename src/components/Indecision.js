import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props)
      /*The bind() method creates a new function that, when called, 
        has its this keyword set to the provided value, with a given sequence of arguments 
        preceding any provided when the new function is called */
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      }
    }
    componentDidMount() {
      try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        //Do nothing
      }
    }
  
    componentDidUpdate(prevState, prevProps) {
      //we are creating condition bcs if we change empty array to empty array, it will run and save the data
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }
    };
    componentWillUnmount() {
      console.log('componentWillUnmount');
    };
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }))
      //if we want to return an object, we need to wrap it inside ()
    };
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }))
    };
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    };
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists'
      }
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }))
    };
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div className="app">
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      )
    };
  }
  IndecisionApp.defaultProps = {
    options: []
  }
