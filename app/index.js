import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import Container from 'Container'
import store from 'store'
import Home from 'Home'

const app = document.getElementById('app');
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Container}>
				<IndexRoute path="" component={Home} />
			</Route>
		</Router>
	</Provider>, app);
