import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './reducers'
const store = createStore(RootReducer)

class Pages extends React.Component {
	render () {
		return (
			<Provider store={store}>
			    <App />
			</Provider>
		)
	}
}

ReactDOM.render(<Pages />, document.getElementById('root'))