// insert_books.js
// This file inserts sample film and art books into MongoDB

db.books.insertMany([
  {
    title: "In the Blink of an Eye",
    author: "Walter Murch",
    genre: "Film",
    published_year: 2001,
    price: 12.99,
    in_stock: true,
    pages: 146,
    publisher: "Silman-James Press"
  },
  {
    title: "Sculpting in Time",
    author: "Andrei Tarkovsky",
    genre: "Film",
    published_year: 1986,
    price: 18.50,
    in_stock: true,
    pages: 284,
    publisher: "University of Texas Press"
  },
  {
    title: "On Directing Film",
    author: "David Mamet",
    genre: "Film",
    published_year: 1991,
    price: 14.00,
    in_stock: false,
    pages: 108,
    publisher: "Penguin Books"
  },
  {
    title: "Rebel Without a Crew",
    author: "Robert Rodriguez",
    genre: "Film",
    published_year: 1996,
    price: 11.75,
    in_stock: true,
    pages: 304,
    publisher: "Dutton"
  },
  {
    title: "Film Art: An Introduction",
    author: "David Bordwell",
    genre: "Film",
    published_year: 2016,
    price: 22.99,
    in_stock: true,
    pages: 544,
    publisher: "McGraw-Hill"
  },
  {
    title: "Ways of Seeing",
    author: "John Berger",
    genre: "Art",
    published_year: 1972,
    price: 9.99,
    in_stock: true,
    pages: 176,
    publisher: "Penguin Books"
  },
  {
    title: "The Story of Art",
    author: "E.H. Gombrich",
    genre: "Art",
    published_year: 1995,
    price: 17.50,
    in_stock: true,
    pages: 688,
    publisher: "Phaidon Press"
  },
  {
    title: "Interaction of Color",
    author: "Josef Albers",
    genre: "Art",
    published_year: 2013,
    price: 20.00,
    in_stock: false,
    pages: 416,
    publisher: "Yale University Press"
  },
  {
    title: "The Art Spirit",
    author: "Robert Henri",
    genre: "Art",
    published_year: 1923,
    price: 13.25,
    in_stock: true,
    pages: 288,
    publisher: "Basic Books"
  },
  {
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    genre: "Art",
    published_year: 2012,
    price: 10.99,
    in_stock: true,
    pages: 160,
    publisher: "Workman Publishing"
  }
]);
