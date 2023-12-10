/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('mongodbVSCodePlaygroundDB');

//db.getCollection("posts").drop(); //erases the whole posts collection

// db.createCollection("posts");

// Insert a few documents into the posts collection.
// db.getCollection("posts").insertMany([
//   {
//     id: 1,
//     createdDate: "",
//     postTitle: "Best tool ever",
//     description: "Super duper good thing",
//     contactInfo: "Call me here",
//     city: "Stockholm",
//     type: "Available",
//     category: "Tools & machines",
//     img: "",
//   },
//   {
//     id: 2,
//     createdDate: "",
//     postTitle: "clothes here ",
//     description: "Clothes in good condition",
//     contactInfo: "Call me here",
//     city: "uppsala",
//     type: "Available",
//     category: "Clothes & shoes",
//     img: "",
//   },
//   {
//     id: 3,
//     createdDate: "",
//     postTitle: "car to be borrowed",
//     description: "I need a car for few hours",
//     contactInfo: "Call me here",
//     city: "Knivsta",
//     type: "Needed",
//     category: "Vehicles",
//     img: "",
//   },
//   {
//     createdDate: 1701263696172,
//     postTitle: "new post",
//     description: "testing now",
//     contactInfo: "123",
//     type: "Give away",
//     city: "Örebro",
//     category: "Vehicles",
//     id: 4,
//   },
//   {
//     createdDate: 1701265612400,
//     postTitle: "shoes",
//     description: "shoes availabe",
//     contactInfo: "1234",
//     type: "Give away",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     id: 5,
//   },
//   {
//     createdDate: 1701266523807,
//     postTitle: "tesing again",
//     description: "testing again",
//     contactInfo: "2345",
//     type: "Needed",
//     city: "Stockholm",
//     category: "Furniture",
//     id: 6,
//   },
//   {
//     createdDate: 1701333294206,
//     postTitle: "cc",
//     description: "vv",
//     contactInfo: "1123",
//     type: "Needed",
//     city: "Örebro",
//     category: "Furniture",
//     id: 7,
//   },
//   {
//     createdDate: 1701347115784,
//     postTitle: "ColorPalette",
//     description: "You can borrow my nice color palette",
//     contactInfo: "Call me",
//     type: "Available",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     img: {},
//     id: 8,
//   },
//   {
//     createdDate: 1701347431045,
//     postTitle: "ColorPalette",
//     description: "You can borrow my nice color palette",
//     contactInfo: "Call me",
//     type: "Available",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     img: {},
//     id: 9,
//   },
//   {
//     createdDate: 1701419500235,
//     postTitle: "Old guitarr",
//     description: "",
//     contactInfo: null,
//     type: "Lender",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     id: 10,
//   },
//   {
//     createdDate: 1701420297844,
//     postTitle: "Test post again",
//     description: "",
//     contactInfo: "Call me",
//     type: "Lender",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     id: 11,
//   },
//   {
//     createdDate: 1701421942886,
//     postTitle: "New shoes to give away",
//     description: "",
//     contactInfo: null,
//     type: "Give away",
//     city: "Örebro",
//     category: "Clothes & shoes",
//     id: 12,
//   },
//   {
//     createdDate: 1701434537881,
//     postTitle: "Borrow my pulka",
//     description: "Pulka for kids, ready to use",
//     contactInfo: "Call me",
//     type: "Available",
//     city: "Kista",
//     category: "Sports & hobby",
//     id: 13,
//   },
//   {
//     createdDate: 1701435019338,
//     postTitle: "Borrow my skies",
//     description: "Size 38 in shoes",
//     contactInfo: "Call me",
//     type: "Available",
//     city: "Västerås",
//     category: "Sports & hobby",
//     id: 14,
//   },
//   {
//     id: 15,
//     createdDate: "",
//     postTitle: "car to be borrowed",
//     description: "I need a car for few hours",
//     contactInfo: "Call me here",
//     city: "Kista",
//     type: "Needed",
//     category: "Vehicles",
//     img: "",
//   },
//   {
//     id: 16,
//     createdDate: "",
//     postTitle: "car to be borrowed",
//     description: "I need a car for few hours",
//     contactInfo: "Call me here",
//     city: "Stockholm",
//     type: "Needed",
//     category: "Vehicles",
//     img: "",
//   },
//   {
//     createdDate: 1701465382243,
//     postTitle: "tools needed urgently",
//     description: "anyone willing to lend tools for a day",
//     contactInfo: "2689",
//     type: "Needed",
//     city: "Stockholm",
//     category: "Tools & machines",
//     id: 17,
//   },
//   {
//     createdDate: 1701465754663,
//     postTitle: "baby seat",
//     description: "baby seat needed for weekend",
//     contactInfo: "56777",
//     type: "Needed",
//     city: "",
//     category: "Tools & machines",
//     id: 18,
//   },
//   {
//     createdDate: 1701631794083,
//     postTitle: "Childrens clothes, size 110",
//     description:
//       "A bag of second hand clothes in size 110. Good used condition.",
//     contactInfo: "Call me",
//     type: "Give away",
//     city: "Malmö",
//     category: "clothes & shoes",
//     id: 19,
//   },
//   {
//     createdDate: 1701682979231,
//     postTitle: "Chainsaw to lend",
//     description: "Works perfectly. Chainsaw license required!",
//     contactInfo: "Call me",
//     type: "Available",
//     city: "Linköping",
//     category: "Tools & machines",
//     id: 20,
//   },
// ]);

// Run a find command to view items sold on April 4th, 2014.
const postsCount = db
  .getCollection("posts")
  .find({
    createdDate: { $gte: new Date("2023-11-20"), $lt: new Date("2024-04-05") },
  })
  .count();

// Print a message to the output window.
console.log(`${postsCount} posts occurred from nov 2023 to april 2024.`);

// // Insert a few documents into the sales collection.
// db.getCollection('sales').insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
