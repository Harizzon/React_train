"use strict";

let day = 0;


// while (day != 366) {
//     day++;
//     if (day == 60){
//         alert('Winter passed');
//     } else if (day == 150) {
//         alert('Spring passed');
//     } else if (day == 240) {
//         alert('Summer passed');
//     } else if (day == 330) {
//         alert('Autumn passed');
//     } else if (day == 331) {
//         alert('Winter is comming');
//     } else if (day == 365) {
//         alert("New Year Is comming");
//     } 

// }

// while (day != 366) {
//     day++;
//     switch (day){
//         case (60):
//             alert('Winter passed');
//             break;
//         case (150):
//             alert('Spring passed');
//             break;
//         case (240):
//             alert('Summer passed');
//             break;
//         case (330):
//             alert('Autumn passed');
//             break;
//         case (331):
//             alert('Winter is comming');
//             break;
//         case (365):
//             alert('New Year!');
//             break;
//     }

// }

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


