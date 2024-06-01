
function crearTarjetaPelicula(pelicula) {
    // Crear elementos de la tarjeta de película
    // creamos la columna de bootstrap 
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-3', 'pelicula-card');
    // estamos creando la tarjeta
    const cardInner = document.createElement('div');
    cardInner.classList.add('card');
    // creo la imagen de la tarjeta
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top');

    cardImg.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
    cardImg.alt = pelicula.title;
    cardImg.loading = 'lazy';


    // creamos el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pelicula.title;

    // Añadir elementos a la tarjeta de película
    cardBody.appendChild(cardTitle);
    cardInner.appendChild(cardImg);
    cardInner.appendChild(cardBody);
    // agrego la tarejta a la columna de bootstrap
    card.appendChild(cardInner);

    return card;
}
// datos de la api (hay que configurar los datos de la entrada y la llave para ingresar)

const API_SERVER = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET', // Es el metodo de la petición (GET)-es el dame informacion
    headers: {
        accept: 'application/json', // Tipo de respuesta esperada (JSON)
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'

    }
};

const cargarPeliculas = async (page = 1) => {//el async es la promesa
    try {
        const response = await fetch(`${API_SERVER}/movie/popular?page=${page}`, options);
        console.log(response);
        const data = await response.json();
        console.log(data);
        const movies = data.results;
        console.log(movies);
        const peliculasSection = document.getElementById('peliculasSection');
        peliculasSection.innerHTML = '';
        movies.forEach(movie => {
            const peliculaCard = crearTarjetaPelicula(movie);
            peliculasSection.appendChild(peliculaCard);
        });
    } catch (error) {
        console.error(error);
    }


};




document.addEventListener("DOMContentLoaded", () => { cargarPeliculas(1) });      