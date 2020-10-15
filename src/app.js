import 'semantic-ui-css/semantic.min.css'

  
import React from 'react'
import ReactDom from 'react-dom'
import Routes from './Routes'

let rootEl = document.createElement('div')
document.body.appendChild(rootEl)
ReactDom.render(<Routes />, rootEl)