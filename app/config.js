const env = process.env.NODE_ENV

let url = 'https://api.tfl.gov.uk/'
if (env === 'production') url = 'https://api.tfl.gov.uk/'

export default {
	env: env,
	stopsURL : 'https://api.tfl.gov.uk/line/<lineNumber>/route/sequence/outbound',
	arrivalsURL: 'https://api.tfl.gov.uk/StopPoint/<stopPointId>/arrivals'
}
