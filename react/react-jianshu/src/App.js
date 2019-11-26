import React from 'react';
// 1. h5: history api 2: hash change
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import BaseComponents from './lib/BaseComponent'
import store from './store/index'
import Home from './pages/home/index'

class App extends  BaseComponents{
  render () {
    return (
      <Provider store={store}>
        {/* 保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            header
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
