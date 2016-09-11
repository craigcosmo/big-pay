import React from 'react'

const HomeResult = (props) => (
	<div class="home-result">
		<ol>
			{props.data.map( (item, index) => (
				<li key={index} onClick={props.onItemClick.bind(this, item.id)}>
					{item.name}
				</li>
				)
			)}
		</ol>
	</div>
)

export default HomeResult
