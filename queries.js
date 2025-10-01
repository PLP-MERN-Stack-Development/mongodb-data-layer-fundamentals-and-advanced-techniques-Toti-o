// queries.js
// MongoDB queries for plp_bookstore

// ----------------------------
// Task 2: Basic CRUD Operations
// ----------------------------

// Find all books in the "Art" genre
db.books.find({ genre: "Art" })

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } })

// Find books by Walter Murch
db.books.find({ author: "Walter Murch" })

// Update the price of "Steal Like an Artist"
db.books.updateOne(
  { title: "Steal Like an Artist", author: "Austin Kleon" },
  { $set: { price: 12.50 } }
)

// Delete "On Directing Film"
db.books.deleteOne({ title: "On Directing Film" })

// ----------------------------
// Task 3: Advanced Queries
// ----------------------------

// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Show only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort books by price (asc)
db.books.find().sort({ price: 1 })

// Sort books by price (desc)
db.books.find().sort({ price: -1 })

// Pagination (5 books per page)
// Page 1
db.books.find().skip(0).limit(5)
// Page 2
db.books.find().skip(5).limit(5)

// ----------------------------
// Task 4: Aggregation Pipelines
// ----------------------------

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } },
  { $sort: { avgPrice: -1 } }
])

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

// Books grouped by decade
db.books.aggregate([
  {
    $group: {
      _id: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } },
  { $project: { decade: "$_id", count: 1, _id: 0 } }
])

// ----------------------------
// Task 5: Indexing
// ----------------------------

// Index on title
db.books.createIndex({ title: 1 })

// Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Check query performance with explain()
// By title
db.books.find({ title: "In the Blink of an Eye" }).explain("executionStats")
// By author and year
db.books.find({ author: "David Bordwell", published_year: 2016 }).explain("executionStats")
