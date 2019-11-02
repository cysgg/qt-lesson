import React from 'react';
import './App.css';

class DynamicFidle extends React.Component {
  handleAdd = () => {
    this.props.onAdd();
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const { rule } = this.props
    return(
      <>
        <label>规则</label>
        {
          rule.map((preRule, i) => {
            return (
              <div key={i}>
                {/* 受控组件 */}
                <label>姓名：</label>
                <input
                  type="text"
                  value={preRule.name}
                  data-index={i}
                  data-key={'name'}
                  onChange={this.props.onFiledChange}
                ></input>
                <label>年龄：</label>
                <input
                  type="text"
                  value={preRule.age}
                  data-index={i}
                  data-key={'age'}
                  onChange={this.props.onFiledChange}></input>
                <button onClick={() => {
                  this.handleSub(i)
                }}>-</button>
              </div>
            )
          })
        }
        <br />
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}
class App extends React.Component {
  state = {
    date: '',
    rule: [
      {name: '', age: ''}
    ]
  }
  addRule = () => {
    const rule = this.state.rule.slice()
    rule.push({name: '', age: ''})
    this.setState({
      rule
    })
  }
  subRule = index => {
    let rule = this.state.rule.slice()
    rule.splice(index, 1)
    this.setState({
      rule
    })
  }
  inputChange = (event) => {
    const key = event.target.dataset.key
    const value = event.target.dataset.value
    const index = event.target.dataset.index
    let rule = this.state.rule.slice()
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })
  }
  render() {
    const { rule } = this.state
    return (
      <>
        <label for="date">日期：</label>
        <input type="date" name="date" id="date"></input>
        <br />
        <DynamicFidle onFiledChange={this.inputChange} onSub={this.subRule} onAdd={this.addRule} rule={rule} />
      </>
    )
  }
}

export default App;
