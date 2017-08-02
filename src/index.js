import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './models/UserStore'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
