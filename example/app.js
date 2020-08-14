const Lyrics = require('../src/lyrics');
const lyrics = new Lyrics();

/**
 * Example of the method getLyrics
 */
lyrics.getLyrics('Hot N Cold')
    .then((response) => {
        return console.log(response);
    })
    .catch((error) => {
        return console.log(error);
    })