const movies = require('./movies');

let moviesDH = {
    // lista las pelis con su id y título
    listMovies: () => {
        movies.forEach(movie => {
            console.log(`${movie.id}, ${movie.title}`)
        });
    },
    // recibe un ID o TITLE, las busca y las devuelve
    searchMovie: (id) => {
        let result = movies.find((movie) => movie.id === id);
        if (result === undefined) {
            return null;
        }
        let movieDetail = `
Pelicula: ${result.title}
Rating: ${result.rating}
Premios: ${result.awards}
Duración: ${result.length}
Precio: ${result.price}
Género: ${result.genre}
        `
        return movieDetail
    },
    // recibe un género y devuelve una lista de pelis de ese género
    searchMovieByGenre: (genero) => {
        let result = movies.filter((movie) => movie.genre === genero);
        console.log("Las pelis que encontramos son:")
        for (let i = 0; i < result.length; i++) {
            console.log(result[i].title)
        }
    },
    // da un resumen de cuánto saldría comprar todas las pelis
    totalPrice: () => {
        let precios = []
        movies.forEach((peli) => precios.push(peli.price))
        return precios.reduce((acc, crr) => acc + crr)
    },
    // busca una peli por ID y le cambia el género
    changeMovieGenre: (id, genero) => {
        let peli = moviesDH.searchMovie(id)
        peli.genre = genero
        return `La película ${peli.title} ahora es parte del género ${peli.genero}`
        /* let result = movies.find((movie) => movie.id === id);
        if (result === undefined) {
            return null;
        }
        result.genre = genero
        let detalles = `La película ${result.title} ahora es parte del género ${genero}`
        return detalles */
    }
};

console.log(moviesDH.searchMovie(3));


