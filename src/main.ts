import './style.css';

interface Books {
  title: string;
}

const books: Books[] = [
  { title: 'Harry Potter y la piedra filosofal' },
  { title: 'Canción de hielo y fuego' },
  { title: 'Devastación' },
];

// Head
const head = (array: Books[]): string => {
  const { title: firstItem } = array[0];
  console.log(firstItem);
  return firstItem;
};
head(books);

// Tail
const tail = (array: Books[]): Books[] => {
  const [, ...restItems] = array;
  console.log(restItems);
  return restItems;
};
tail(books);

// Init
const init = (array: Books[]): Books[] => {
  const newArray = array.slice(0, -1);
  console.log(newArray);
  return newArray;
};
init(books);

// Last
const last = (array: Books[]): Books | undefined => {
  const lastItem = [...array].pop();
  console.log(lastItem);
  return lastItem;
};
last(books);

// Concat
const array1 = ['one', 'two', 'three', 'four'];
const array2 = [1, 2, 3, 4];
const concat = <A, B>(a: A[], b: B[]): (A | B)[] => {
  const merge = [...a, ...b];
  console.log(merge);
  return merge;
};
concat(array1, array2);

// Optional
const array3 = ['five', 'six', 'seven', 'eight'];
function concatOptional<A>(): A[] {
  let init: A[] = [];
  for (let i = 0; i < arguments.length; i++) {
    init += arguments[i];
  }
  console.log(init);
  return init;
}
concatOptional(array1, array2, array3);

// Clone Merge
// Clone
function clone(source: Books[]): Books[] {
  console.log([...source]);
  return [...source];
}
clone(books);

// Merge
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };
// output=> {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
const merge = (source, target) => {
  console.log({ ...target, ...source });
};
merge(a, b);
