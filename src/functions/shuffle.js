// Purpose is to shuffle an array.

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i -- ) {
        // let j = Number
        let j = Math.floor(Math.random() * (i + 1))
        [array[i], array[j]] = [array[j], array[i]];
    }
}

module.exports = shuffle;