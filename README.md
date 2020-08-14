# Lyrics API
A simple JavaScript lyrics API.

## Installing
```
$ npm install song-lyrics-api
```

## Usage
```javascript
const Lyrics = require('song-lyrics-api');
const lyrics = new Lyrics();
```

### `getLyrics`
```javascript
lyrics.getLyrics('Hot N Cold')
    .then((response) => {
        return console.log(response);
    })
    .catch((error) => {
        return console.log(error);
    })
```
The method returns an array of objects. Each object is data of a song that API found.
If API don't find lyrics, you will get an object with following error.


### Info
* Large thanks to [lyrics.ovh](https://lyrics.ovh/) and [deezer.com](https://deezer.com/).
* Author of the API [s0ftik3](https://github.com/s0ftik3).