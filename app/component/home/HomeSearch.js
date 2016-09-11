import React from 'react'

const HomeSearch = (props) => (
		<form onSubmit={props.onSearchSubmit.bind(this)}>
			<input type="text" onChange={props.onInputChange.bind(this)} />
			<button type="submit">Search</button>
		</form>
	)

export default HomeSearch
