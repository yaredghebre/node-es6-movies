// Creo array di oggetti "entries"
const entries = [
  {
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Action, Drama, Sci-fi",
    rating: 8.0,
    type: "movie",
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action, Adventure, Sci-fi",
    rating: 8.1,
    type: "movie",
  },
  {
    title: "Better Call Saul",
    year: 2015,
    genre: "Crime, Drama",
    rating: 9.0,
    type: "tv",
    seasons: 6,
  },
  {
    title: "Game of Thrones",
    year: 2000,
    genre: "Adventure, Drama, Fantasy",
    rating: 9.0,
    type: "tv",
    seasons: 9,
  },
  {
    title: "Sharknado ",
    year: 2020,
    genre: "Fantasy",
    rating: 2.0,
    type: "movie",
  },
  {
    title: "Uncendies",
    year: 2015,
    genre: "Drama, History",
    rating: 8.0,
    type: "movie",
  },
  {
    title: "The Wolf Of Wall Street",
    year: 2015,
    genre: "Biography, Comedy, Crime",
    rating: 8.0,
    type: "movie",
  },
];

// Creo classe Movie
class Movie {
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }
  toString() {
    return `${this.title} è un ${this.type} di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
  }
}

const nuovoFilm = new Movie("Saw", 2000, "horror", 7.0, "film");

// console.log(nuovoFilm.toString());

// Creo classe Series estendendo Movies
class TvSeries extends Movie {
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }

  toString() {
    return `${this.title} è un ${this.type} di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
  }
}

const nuovaSerie = new TvSeries(
  "Silicon Valley",
  2015,
  "Comedy",
  8.5,
  "serie",
  6
);

// console.log(nuovaSerie.toString());

// Itero e creo nuovo array con .map
const newEntries = entries.map((entry) => {
  if (entry.type === "movie") {
    return new Movie(
      entry.title,
      entry.year,
      entry.genre,
      entry.rating,
      entry.type
    );
  } else if (entry.type === "tv") {
    return new TvSeries(
      entry.title,
      entry.year,
      entry.genre,
      entry.rating,
      entry.type,
      entry.seasons
    );
  }
});

// console.log(newEntries);

// Creo funzione che riporta la media delle entries dato un genere
const avgRating = (type, genre) => {
  let count = 0;
  let entriesCount = 0;

  entries.map((el) => {
    if (el.type === type && el.genre === genre) {
      entriesCount++;
      count += el.rating;
    }
  });
  return `La media dei voti in base al genere ${genre} è di: ${
    count / entriesCount
  }`;
};

// console.log(avgRating("movie", "Drama"));

// Creo funzione che riporti lista di tutti i generi senza ripetizioni
const getGenreList = () => {
  const genreList = [];

  entries.forEach((entry) => {
    const genres = entry.genre.split(", ");
    genres.forEach((genre) => {
      if (!genreList.includes(genre)) {
        genreList.push(genre);
      }
    });
  });
  return genreList;
};

// console.log(getGenreList());

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni
// un array con all’interno il risultato della funzione toString() di ogni film.

const newArrToStr = (genre) => {
  const newArray = entries.filter((entry) => {
    const genres = entry.genre;
    return genres.includes(genre);
  });
  return newArray;
};

console.log(newArrToStr("Biography"));
