import React from 'react'

import 'home.scss'
import HomeSearch from 'HomeSearch'
import HomeResult from 'HomeResult'
import HomeItemDetail from 'HomeItemDetail'
import moment from 'moment'
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.onSearchSubmit = this.onSearchSubmit.bind(this)
		this.onInputChange = this.onInputChange.bind(this)
		this.onItemClick = this.onItemClick.bind(this)
		this.parseTimeToMinute = this.parseTimeToMinute.bind(this)
		this.val =''
		this.resultVisible=true
		this.itemVisible =false
	}
	onSearchSubmit(e){
		e.preventDefault();
		this.props.search(this.val)
		this.resultVisible =true
	}
	getResultVis(){
		return this.itemVisible ? '': 'hide'
	}
	getItemVis(){
		return this.resultVisible ? '': 'hide'
	}
	onInputChange(e){
		this.val= e.target.value
	}
	onItemClick(id){
		this.props.storeItem(id)
		this.resultVisible =false
	}
	parseTimeToMinute(timestamp){
		const future = moment(timestamp).unix() // number of seconds
		const now = parseInt(Date.now()/1000) // number of seconds
		const diff = future - now

		if (diff > 0) { return parseInt(diff/60) + ' minutes' }
		if (diff === 0 ) {return 'now'}
		if (diff < 0 ) {return 'passed'}
	}	
	render() {
		return (
			<div class="home">
				<main>
					<h3>Search Stops</h3>
					<HomeSearch onSearchSubmit={this.onSearchSubmit} onInputChange={this.onInputChange} />
					{this.resultVisible && <HomeResult 
					data={this.props.home.searchResult} 
					onItemClick={this.onItemClick}  /> }

					{!this.resultVisible && <HomeItemDetail data={this.props.home.itemData} 
					parseTimeToMinute={this.parseTimeToMinute} />}
					
				</main>
			</div>
		)
	}
}
