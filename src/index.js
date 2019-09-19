import React from 'react'
import { render } from 'react-dom'

import App from 'App.js'

const rootElement = document.getElementById('root')

render(<App />, rootElement)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default

    render(<NewApp />, rootElement)
  })
}
