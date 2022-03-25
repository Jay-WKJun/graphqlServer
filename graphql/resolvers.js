// schema.graphql은 key와 반환되는 type만 설명했을 뿐이다.
// name이라는 key의 실질적인 반환값은 이곳에서 정의된다.
// name의 값을 주기 위해 이곳에서 api를 반환받든, DB를 가든, node의 메모리를 가든 프로그래머의 자유이다.

import { getById, people } from './personDB';
import { getMovies, getMovie, deleteMovie, addMovie } from './movieDB';

const jun = {
  name: 'jun',
  age: 123,
  gender: 'male',
};

const resolvers = {
  Query: {
    name: () => 'nicolas',
    jun: () => jun,
    people: () => people,
    person: (_, args) => {
      return getById(args.id);
    },
    movies: () => getMovies(),
    movie: (_, args) => {
      return getMovie(args.id);
    },
  },
  Mutation: {
    addMovie: (_, { name, score }) => {
      return addMovie(name, score);
    },
    deleteMovie: (_, args) => {
      return deleteMovie(args.id)
    },
  }
};

export default resolvers;
