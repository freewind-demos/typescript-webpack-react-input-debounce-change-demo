import React from 'react'
import ReactDOM from 'react-dom'

import { Hello } from './hello'

ReactDOM.render(
  <Hello onChange={(name) => console.log('### changedName: ', name)}/>,
  document.body
)
