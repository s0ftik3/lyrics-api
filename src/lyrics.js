const axios = require('axios');
const urls = require('./urls');

class Lyrics { 
    
    /**
     * Looks for the data about a song.
     * @public
     * @param {string} name A song's name.
     */
    async getLyrics(name) {
        let preResult = [];
        let result = [];
        await axios({
            'method': 'get',
            'url': `${urls.urlSearch}${encodeURIComponent(name)}`,
            'headers': {
                'content-type': 'application/json'
            }
        }).then((response) => {
            for (let i = 0; i < response.data.data.length; i++) {
                preResult.push({
                    id: i,
                    title: response.data.data[i].title,
                    link: response.data.data[i].link,
                    artist: response.data.data[i].artist.name,
                    thumb: response.data.data[i].album.cover_medium
                })
            }
        }).catch((error) => {
            console.log(error)
        })

        for (let i = 0; i < preResult.length; i++) {
            await axios({
                'method': 'get',
                'url': `${urls.urlGet}${encodeURIComponent(preResult[i].artist)}/${encodeURIComponent(preResult[i].title)}`,
                'headers': {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                result.push({
                    id: i,
                    title: preResult[i].title,
                    link: preResult[i].link,
                    artist: preResult[i].artist,
                    thumb: preResult[i].thumb,
                    lyrics: response.data
                })
            }).catch((error) => {
                result.push({
                    id: i,
                    title: 'None',
                    link: 'None',
                    artist: 'None',
                    thumb: 'None',
                    lyrics: {
                        error: 'Lyrics not found!'
                    }
                })
            })
        }
        return result;
    }

}

module.exports = Lyrics;