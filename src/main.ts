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
const last = (array: Books[]): Books[] => {
  const lastItem = array.pop();
  console.log(lastItem);
  return lastItem;
};
last(books);
