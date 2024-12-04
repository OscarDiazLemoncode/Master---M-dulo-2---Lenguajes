import './style.css';

interface Books {
  title: string;
  isRead: boolean;
}

const books: Books[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

// Head
const head = (array: Books[]): Books => {
  const [firstItem] = array;
  return firstItem;
};
head(books);

// Tail
const tail = (array: Books[]): Books[] => {
  const [, ...restItems] = array;
  return restItems;
};
tail(books);

// Init
const init = (array: Books[]): Books[] => {
  const newArray = array.slice(0, -1);
  return newArray;
};
init(books);

// Last
const last = (array: Books[]): Books | undefined => {
  const lastItem = [...array].pop();
  return lastItem;
};
last(books);

// Concat
const array1 = ['one', 'two', 'three', 'four'];
const array2 = [1, 2, 3, 4];
const concat = <A, B>(a: A[], b: B[]): (A | B)[] => {
  const merge = [...a, ...b];
  return merge;
};
concat(array1, array2);

// Optional
const array3 = ['five', 'six', 'seven', 'eight'];
function concatOptional<A>(): A[] {
  let init: A[] = [];
  for (let i = 0; i < arguments.length; i++) {
    init.push(...arguments[i]);
  }
  return init;
}
concatOptional(array1, array2, array3);

// Clone Merge
// Clone
const user = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };

function clone<T>(source: T): T {
  const newUser = { ...source };
  console.log(newUser);
  return newUser;
}
clone(user);

// Merge
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };
// output=> {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
const merge = <A, B>(source: A, target: B): A & B => {
  console.log({ ...target, ...source });
  return { ...target, ...source };
};
merge(a, b);

//Read Books
const isBookRead = (listBooks: Books[]): Books[] => {
  listBooks.filter((book) => {
    console.log(book.title);
  });
  return listBooks;
};
isBookRead(books);
