
function longestWord(sentence) {

    const words = sentence.split(' ');

    // console.log(words);

    let longest = '';

    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    })

    console.log(longest)

}

longestWord('How are you, Laxman')