// Purpose is to shuffle an array.

function shuffle(array) {
    for(let i = array.length - 1; i > 0; i -- ) {
        // let j = Number
        let jvalue = Math.floor(Math.random() * (i + 1))
        [array[i], array[jvalue]] = [array[jvalue], array[i]];
    }
}

module.exports = shuffle;