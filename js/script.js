"use strict";

let numberOfFilms = Number(prompt("How many films you have watched? ", ''));

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: {},
    privat: false
};

let fQuestion = prompt('What last movie you saw?', ''),
    sQuestion = +prompt("Mark", '');

personalMovieDB.movies[fQuestion] = sQuestion;