import React from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends React.Component {
  handleCheck = (e, i) => {
    const checked = e.target.checked
    this.props.checked(i, checked)
  }
  render () {
    const { shopCart } = this.props
    console.log('shopCart', shopCart)

    return (
      <div>
        {
          shopCart.map((good, i) => {
            return (
              <div key={i}>
                <label htmlFor={good.name}></label>
                <input name={good.name} type="checkbox" checked={good.checked}
                  onChange={e => {
                    this.handleCheck(e, i)
                  }}
                />
                <label>{good.name}/￥:{good.price}</label>
                <button>-</button>
                {good.count}
                <button>+</button>
                <button onClick={e => {
                  this.props.handleDel(i)
                }}>delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shopCart: state.shopCart
  }
}

const del = (i) => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'DEL',
        index: i
      })
    }, 2000)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checked (i, checked) {
      dispatch({
        type: 'TOGGLE_CHECKED',
        checked,
        index: i
      })
    },
    handleDel (i) {
      dispatch(del(i))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
