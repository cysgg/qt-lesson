// import groupBy from 'lodash/groupBy'
import { includes } from 'lodash'
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { add } from './util'


reactDom.render(<App />, document.getElementById('app'))

console.log(add(1, 2))

