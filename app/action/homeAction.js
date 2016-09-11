import axios from 'axios'
import i from 'actionConstant'
import config from 'config'


export function search(payload){
	return dispatch => {
		return dispatch({
			type: i.SEARCH,
		    payload: axios.get(config.stopsURL.replace('<lineNumber>', payload))
		}) 
	}
}
export function storeItem(payload) {
	return dispatch => {
		return dispatch({
			type: i.STORE_ITEM,
			payload: axios.get(config.arrivalsURL.replace('<stopPointId>', payload))
		})
		
	}
}
