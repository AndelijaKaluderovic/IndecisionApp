class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four', 'Thing five']
    return (
      <div className="app">
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}
class Action extends React.Component {
  handlePick() {
    alert('picked')
  }
  render() {
    return (
      <div className="action">
        <button onClick={this.handlePick}>
          What should I do?
        </button>
      </div>
    )
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert('options removed')
  }
  render() {
    return (
      <div className="options">
        <button onClick={this.handleRemoveAll}>
          Remove all
        </button>
        <h3>Options: </h3>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
      <div className="option">
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}
class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert('Option added');
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div className="add-option">
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));