import React, { Component } from 'react'
import { Transition, CSSTransition } from 'react-transition-group'
import ReactDom from 'react-dom'

let key = 0
class Toast extends Component {
  state = {
    toastList = ['1', '2']
  }
  addNotice (icon, content, duration) {
    key++
    const item = {key, icon, content, duration}
    let toastList = this.state.toastList.slice()
    toastList.push(item)
    this.setState({
      toastList
    })
    setTimeout(() => {
      let toastList1 = this.state.toastList.slice()
      let index = toastList1.findIndex(item => item.key === key)
      toastList1.splice(index, 1)
      this.setState({
        toastList: toastList1
      })
    }, duration)
  }
  render () {
    let { toastList } = this.state
    let { show } = this.props
    if (!show) return null
    return (
      <Transition>
        {
          toastList.map(toast => {
            return (
              // <Notice {...toastList} />
              <CSSTransition key={toast.key} classNames="notice" timeout={300}>
              <li ref="ref1" key={toast.key}>{toast.icon}:{toast.content}</li>
              </CSSTransition>
            )
          })
        }
      </Transition>
    )
  }
}

let instance = null

export default {
  addNotice: function (icon, content, duration) {
    // ref
    if (instance) {
      return instance.addNotice(icon, content, duration)
    }
    let div = document.createElement('div')
    document.body.appendChild(div)
    let objRef = React.createRef()
    // get conponent Example
    ReactDom.render(<Toast ref={objRef} />, div)
    instance = objRef.current
    return objRef.current.addNotice(icon, content, duration)
  }
}
