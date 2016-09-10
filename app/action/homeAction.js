import axios from 'axios'
import i from 'actionConstant'



export function saveBookingData(payload){
	return {
	    type: i.SAVE_BOOKING_DATA,
	    payload: payload
	}
}
