const movies = [
  {
    id: 0,
    name: 'Dune',
    score: 8,
  },
  {
    id: 1,
    name: 'Avengers - end game',
    score: 10,
  },
  {
    id: 2,
    name: 'Batman vs Supeman',
    score: 2,
  },
  {
    id: 3,
    name: 'Joker',
    score: 9,
  },
];

export const getMovies = () => movies;

export const getMovie = (id) => {
  return movies.find((movie) => movie.id === id);
}

export const addMovie = (name, score) => {
  let counter = 0;
  const emptyIndex = movies.findIndex((movie) => movie.id !== counter++);

  if (emptyIndex === -1) {
    movies.push({
      id: movies.length,
      name,
      score,
    });
  }

  return movies;
}

export const deleteMovie = (id) => {
  const targetIndex = movies.findIndex((movie) => movie.id === id);

  if (targetIndex === -1) {
    return movies;
  }

  movies.splice(targetIndex, 1);
  return movies;
}
