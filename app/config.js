const env = process.env.NODE_ENV

let url = ''
if (env === 'production') url = ''

export default {
	env: env,
	submitBookingURL: url + 'bookings',
	signInURL: url + 'shifts/sign_in',
	signOutURL: url + 'shifts/sign_out',
}
