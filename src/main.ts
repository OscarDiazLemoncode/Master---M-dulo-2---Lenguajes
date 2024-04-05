import './style.css';

interface Pelicula {
  titulo: string;
  director: string;
  año: number;
}

const pelicula1: Pelicula = {
  titulo: 'Blade Runner',
  director: 'Ridley Scott',
  año: 1982,
};

pelicula1.año = 2024;

const pelicula2: Pelicula = {
  titulo: 'Matrix',
  director: 'Lana tattal',
  año: 1999,
};

console.log(pelicula1);
console.log(pelicula2);
