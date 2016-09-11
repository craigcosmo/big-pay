import i from 'actionConstant'

const defaultState= {
	searchResult: [],
	itemData: []
}

export default (state = defaultState, action) => {
	switch(action.type){
		case i.SEARCH_FULFILLED:
			return {...state, searchResult: action.payload.data.stopPointSequences[0].stopPoint}
		case i.STORE_ITEM_FULFILLED:
			return{...state, itemData: action.payload.data}
	}
	return state
}

