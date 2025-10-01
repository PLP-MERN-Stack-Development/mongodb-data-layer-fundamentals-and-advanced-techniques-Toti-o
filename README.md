PLP Bookstore MongoDB Assignment

This project demonstrates how to manage a plp_bookstore database using MongoDB. It includes examples of basic CRUD operations, advanced queries, aggregation pipelines, and indexing, showing how to find, update, delete, and analyze book data efficiently.

To get started, install MongoDB Community Edition on your computer or set up a free MongoDB Atlas cluster. Then create the database by running use plp_bookstore and create a books collection with db.createCollection("books"). Populate the collection with sample data using the provided insert_books.js script.

Once your database is ready, open MongoDB Shell (mongosh) or MongoDB Compass and run the queries. You can find books by genre or author, filter by publication year, update prices, delete books, sort results by price, display only specific fields, and paginate results to show a limited number of books per page.

Aggregation pipelines allow you to perform advanced analysis, like calculating the average price of books by genre, finding the author with the most books, and grouping books by decade while counting them. Indexes are created on the title field and as a compound index on author and published year to make queries faster. You can use explain("executionStats") to check performance improvements.

For example, you can run db.books.find({ genre: "Art" }) to find all Art books, db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }, { $sort: { avgPrice: -1 } }]) to calculate the average price by genre, or db.books.find({ title: "In the Blink of an Eye" }).explain("executionStats") to check how fast an indexed query runs. You can modify these queries to test different authors, genres, or pagination settings.

This README provides everything you need to set up the database, run the queries, and explore MongoDB features in a practical and easy-to-understand way.
