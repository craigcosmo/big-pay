import React from 'react'

const HomeItemDetail = (props) => (
		<div class="home-item">
			{props.data.map( (item,index) => (
					<div key={index} class="item">
						<span class="bus-number">{item.vehicleId}</span>
						<span class="time">{props.parseTimeToMinute(item.expectedArrival)}</span>
					</div>
				)
			)}
		</div>
	)
export default HomeItemDetail
