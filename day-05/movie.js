class Movie {
    constructor(title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        return movies.filter(movie => movie.rating === 'PG');
    }



}

var m1 = new Movie("Casino Royale", "Eon Productions", "PG­13");

var movies = [
m1,
new Movie("Toy Story", "Pixar", "G"),
new Movie("The Lion King", "Disney", "PG"),
new Movie("Frozen", "Disney", "PG13")
];

var pgMovies = m1.getPG(movies);
console.log(pgMovies);