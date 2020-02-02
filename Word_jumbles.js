// const words = ['python', 'jumble', 'easy', 'difficult', 'answer', 'xylophone', 'seasidesquad'];
// let guess = ''; 
// let randomWord = '';
// // if guess = randomWord then win
// let jumbledWord = []; 

// function getRandomWord() {
//     randomWord = words[(Math.floor(Math.random()*words.length))]; //this is the word the player will need to guess 
//     console.log(randomWord);
//     return randomWord; 
// }

// getRandomWord(); 

// function shuffleWord() {
//     let splitWord = randomWord.split('');
//     // console.log(splitWord);
//     //take a random letter out of array and push it into jumbledWord 
//     while (splitWord.length > 0) {
//     let randomLetter = splitWord.splice(Math.floor(Math.random()*splitWord.length),1);
//     // console.log(randomLetter);
//     jumbledWord.push(randomLetter);
// }
//     randomWord = jumbledWord.join('');
//     console.log(randomWord);
// }
// shuffleWord();

const songs = ['Smells like teen spirit', 'Wonderwall', 'My generation', 'Dancing in the street', 'Like a prayer', 'Smooth criminal'];
let guess = ''; 
let randomSong = '';
// if guess = randomWord then win
let jumbledWord = []; 

function pickSong() {
    randomSong = songs[(Math.floor(Math.random()*songs.length))]; //this is the song the player will need to guess 
    console.log(randomSong);
    return randomSong; 
}

pickSong(); 

function splitSong() {
    let splittedSong = randomSong.split(" ");
    console.log(splittedSong);

    let jumbledSong = splittedSong.map(word => {
        return word.split('').sort(function(a,b) {
            return 0.5 - Math.random();
        })
    })
    jumbledSong = jumbledSong.join(' ');
    let final = jumbledSong.replace(/\,(?:\n|$)/g, "\n");
    console.log(final);

}

splitSong();

    // jumbledSong.sort(function(a, b) {
    //     return 0.5 - Math.random();
    // })
    // console.log(jumbledSong)


    // function jumbleWord(word) {
    //     let splitWord = word.split('');
    //     // console.log(splitWord)
    //     while (splitWord.length > 0) {
    //         let randomLetter = splitWord.splice(Math.floor(Math.random()*splitWord.length), 1);
    //         jumbledWord.push(randomLetter);
    //         // console.log(jumbledWord.join(" "))
    //     }
    // }

    // jumbleWord('prayer')

    // for (i = 0; i < splittedSong.length; i++) {

    // let splitWord = splittedSong[i].split('');
    // console.log(splitWord);
    // while (splitWord.length > 0) {
    // let randomLetter = splitWord.splice(Math.floor(Math.random()*splitWord.length),1);
    // jumbledWord.push(randomLetter);

    // randomWord = jumbledWord.join(" ");
    // console.log(randomWord);
//     }
// }




// function shuffleWord() {
//     let splitWord = splittedSong[0].split('');
//     console.log(splitWord);
    //take a random letter out of array and push it into jumbledWord 
//     while (splitWord.length > 0) {
//     let randomLetter = splitWord.splice(Math.floor(Math.random()*splitWord.length),1);
//     // console.log(randomLetter);
//     jumbledWord.push(randomLetter);
// }
//     randomWord = jumbledWord.join('');
//     console.log(randomWord);

// shuffleWord();



// function jumbleWords() {
//     let word1 = splittedSong[0].splice(Math.floor(Math.random()*splitSong[1].length),1)
//     console.log(word1);
// }

// jumbleWords();

    // splitSong.forEach()
    //take a random letter out of array and push it into jumbledWord 
//     while (splitWord.length > 0) {
//     let randomLetter = splitWord.splice(Math.floor(Math.random()*splitWord.length),1);
//     // console.log(randomLetter);
//     jumbledWord.push(randomLetter);
// }
//     randomWord = jumbledWord.join('');
//     console.log(randomWord);



