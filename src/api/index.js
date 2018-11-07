import config from './config.js'
const { app_key } = config
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${app_key}&format=json`

export default function getArtists(country) {
    let url = API_URL.replace(':country', country)
    return fetch(url)
        .then( res => res.json() )
        .then( json => json.topartists.artist )
}