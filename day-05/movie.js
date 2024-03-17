class Movie {
    constructor(title, studio, rating='PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies) {
        return movies.filter(movie => movie.rating === 'PG');
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getStudio() {
        return this.studio;
    }

    setStudio(studio) {
        this.studio = studio;
    }

    getRating() {
        return this.rating;
    }

    setRating(rating) {
        this.rating = rating;
    }

    movieDetails() {
        return `The movie ${this.title} has a movie rating: ${this.rating}`;
    }
}

var m1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(m1);
console.log(m1.movieDetails());

var movies = [
m1,
new Movie("Toy Story", "Pixar", "G"),
new Movie("The Lion King", "Disney", "PG"),
new Movie("Frozen", "Disney", "PG13")
];

var pgMovies = m1.getPG(movies);
console.log(pgMovies);