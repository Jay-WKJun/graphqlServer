export const people = [
  {
    id: 0,
    name: 'first',
    age: 15,
    gender: 'man'
  },
  {
    id: 1,
    name: 'second',
    age: 43,
    gender: 'man'
  },
  {
    id: 3,
    name: 'third',
    age: 12,
    gender: 'woman'
  },
  {
    id: 4,
    name: 'fourth',
    age: 56,
    gender: 'man'
  },
  {
    id: 5,
    name: 'fifth',
    age: 34,
    gender: 'woman'
  },
];

export const getById = (id) => {
  return people.find((person) => person.id === id);
}
