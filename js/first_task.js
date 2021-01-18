"use strict";

let numberOfFilms = Number(prompt("How many films you have watched? ", ''));

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: {},
    privat: false
};


for ( let i = 0; i < 1; i++){
    let fQuestion = prompt('What last movie you saw?', ''),
        sQuestion = +prompt("Mark", '');
    if (fQuestion != null && sQuestion != null && fQuestion != '' && sQuestion != ''){
        personalMovieDB.movies[fQuestion] = sQuestion;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }
}

if (numberOfFilms < 10 ) {
    console.log("You saw few films");
} else if (10 > numberOfFilms < 30) {
    console.log("You saw films");
} else {
    console.log('You saw a lot of films');
}






