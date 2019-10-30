import React, { Component } from 'react'

class Comment extends Component {
  state = {
    clist: [{
      content: '666'
    }] // 评论列表
  }
  handleReceiveComment = (item) => {
    // 不可变数据
    let clist = this.state.clist.slice()
    clist.push(item)
    this.setState({
      clist
    })
  }
  render () {
    const {clist} = this.state
    return (
      <>
        <Input onReceive={this.handleReceiveComment} />
        <CommentList clist={clist} />
      </>
    )
  }
}

class Input extends Component {
  // 静态属性
  state = {
    value: ''
  }
  render () {
    const { value } = this.state;
    return (
      <>
        <input type="text" value={value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
  // 箭头函数 方便处理this
  handleChange = e => {
    const value = e.target.value
    this.setState({
      value
    })
  }
  // 单向数据流
  // state 发生变化 会重新渲染
  handleSubmit = e => {
    const { onReceive } = this.props
    const { value } = this.state
    console.log(value)
    onReceive({content: value})
  }
}

class CommentList extends Component {
  render () {
    const { clist } = this.props
    return (
      <>
        {clist.map((list, index) => {
          return (
            <li key={index}>
              { list.content }
            </li>
          )
        })}
      </>
    )
  }
}


export default Comment