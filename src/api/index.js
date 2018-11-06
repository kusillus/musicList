import config from './config.js'
const { app_key } = config
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=${app_key}&format=json`

export default function getArtists() {
    return fetch(API_URL)
        .then( res => res.json() )
        .then( json => json.topartists.artist )
}