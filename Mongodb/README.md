# Introduction :
MongoDB is a NoSQL database that uses a document-oriented data model. It is designed to handle large volumes of data efficiently and provides high flexibility compared to traditional relational databases.
<br>
NoSql stores data in the raw data form. 
<br>   
It is open source. 

# Key Features of MongoDB

Document-Oriented :
<br>
Stores data in JSON-like BSON format.
Each document has a flexible schema, unlike SQL databases with rigid structures.
<br>
NoSQL Database:
<br>
Does not use tables, rows, or fixed schemas like relational databases.
Uses collections and documents instead.
<br>
Scalability:
<br>
Supports horizontal scaling using sharding, distributing data across multiple servers.
<br>

Indexing :
<br>
Automatically creates indexes for faster queries.
Supports various types of indexing (e.g., compound, geospatial).
<br>
Replication & High Availability
<br>
Uses Replica Sets for data redundancy and automatic failover.
<br>
Aggregation Framework
<br>
Performs complex queries, transformations, and analytics like SQL's GROUP BY.
<br>
ACID Transactions :
<br>
Supports multi-document transactions, ensuring data consistency.
<br>
Flexible Schema :
<br>
Allows dynamic, semi-structured data storage, unlike relational databases.


# Important Point 
Database -> Collections -> Documents 
<br>
Cluster : A cluster in MongoDB is a group of connected servers (nodes) that work together to store and manage data. It helps distribute data, improve performance, and ensure high availability.

# Why NoSQL 

```bash 

NoSQL databases are used when traditional relational databases (SQL) are not the best fit for a project due to scalability, flexibility, or performance concerns. Here's why you might choose a NoSQL database like MongoDB (which you're using in MongoDB Atlas Cloud) over a relational database:

1. Scalability
Horizontal Scaling: NoSQL databases scale horizontally by adding more servers (sharding), unlike SQL, which scales vertically (adding more resources to a single machine).

MongoDB splits the data into smaller pieces (shards) and distributes them across multiple servers (horizontal scaling).

Better for Big Data: Designed to handle large amounts of data efficiently.

2. Flexible Schema
Schema-less or Dynamic Schema: Unlike SQL, where you must define a strict table structure, NoSQL allows flexible and evolving data models.

Easier to store unstructured or semi-structured data.

3. High Performance for Large Datasets
NoSQL databases often provide faster read/write operations compared to SQL for massive datasets because bson supports fast encoding and decoding. 
No complex JOIN operations, reducing query execution time.

4. Suitable for Real-Time Applications
Used in applications like IoT, real-time analytics, social media feeds, recommendation systems, map data ,Big Data etc.

Example: MongoDB can handle JSON-like data, making it perfect for web applications.

5. Highly Availability and Fault tolerance: 
Data is distributed across multiple servers, ensuring high availability and fault tolerance.

Example: Cassandra is widely used in distributed systems like Facebook.

```

# JSON : 
JSON (JavaScript Object Notation) is a lightweight data-interchange format used to store and transmit data between a server and a client.
<br>

```bash 
// why we use json :

JSON is widely used for several reasons:

Lightweight & Readable : It has a simple structure with minimal syntax.

Language-Independent : Although derived from JavaScript, JSON is supported in almost all programming languages (e.g., Python, Java, PHP, C++).

Data Exchange Format : It is used to transfer data between web applications and servers, commonly in APIs.

Fast Parsing : Compared to XML, JSON parsing is faster and more efficient.

Structured & Scalable : JSON supports nested objects and arrays, making it suitable for complex data structures.




JSON (JavaScript Object Notation) supports six primary data types:

String : "Hello, World!"

Number : 123, 45.67

Boolean : true, false

Null : null

Array : [1, 2, 3, "hello"]

Object : {"name": "Rupesh", "age": 25}

```

# BSON : 
BSON (Binary JSON) is a binary-encoded serialization format used to store documents in MongoDB. It is similar to JSON but supports additional data types and is optimized for fast processing.
<br>

```bash 
MongoDB uses BSON instead of JSON because:

Efficient Storage : BSON is a binary format, which makes it smaller and faster to encode and decode than plain JSON.

BSON is already in machine-readable format, so it's faster to encode and decode compared to parsing a JSON string.

Supports More Data Types : Unlike JSON, BSON supports:

Date (e.g., ISODate("2025-04-01T12:00:00Z"))

Binary Data (e.g., images, files)

Decimal128 (high-precision floating-point numbers)

ObjectId (unique identifiers)

Code (To store JavaScript code ):
const scopedCode = new Code("function(x) { return x + y; }", { y: 5 });


Fast Query Performance : BSON allows MongoDB to index and search documents quickly.

Document Embedding : BSON supports nested objects and arrays, making it ideal for NoSQL document databases.




MongoDB automatically converts JSON to BSON when storing data and converts BSON back to JSON when retrieving data.
```


# Document Embedding 
Document Embedding refers to the practice of storing related data within a single document rather than spreading it across multiple collections.
<br>

```bash 
  // users collection
  { "_id": 1, "name": "Rupesh", "email": "rupesh@example.com" }

  // orders collection
  { "_id": 101, "user_id": 1, "items": ["Laptop", "Mouse"], "total": 1200 }

  // To fetch related data: use $lookup (similar to a join).
  // The above way is not efficient. 



  // This is more optimized way. 

  {
    "_id": 1,
    "name": "Rupesh",
    "email": "rupesh@example.com",
    "orders": [
      { "order_id": 101, "items": ["Laptop", "Mouse"], "total": 1200 },
      { "order_id": 102, "items": ["Phone", "Charger"], "total": 800 }
    ]
  }

```

# Data Model Design
MongoDB provides two types data model:
<br>
1. Embedded Model : 
Related data is nested within a single document.
<br>
Best for read-heavy operations.
<br>
Fast because of fewer joins/lookups.
<br>
Same as Embedded Documents.
<br>
2. Normalized Data Model : 
Related data is stored in separate documents and linked by reference.
<br>
Best for write-heavy or complex relationships.
<br>

```bash 
How to Normalize in Practice:
Identify entities (like Users, Orders, Products).

Create separate collections for each entity.

Use references (_id values) to connect documents across collections.

When querying, use $lookup (MongoDB's equivalent of a JOIN) to combine data if needed.

```

# MongoDB development Architecture :
MongoDB's development architecture refers to how its components work together to support application development, data storage, scalability, and performance. 
<br>

```bash 
1. Client Layer (Application)
The application connects to MongoDB using drivers (e.g., Node.js, Python, Java).

Developers use MongoDB Query Language (MQL) to interact with data.

Operations include: CRUD (Create, Read, Update, Delete), indexing, aggregation, etc.

2. MongoDB Server (mongod)
This is the core database process responsible for:

Data storage

Query processing

Data replication

Indexing

Memory management

It handles:

Document storage (BSON format)

Collections (analogous to tables)

Databases

3. Mongo Shell / Compass
Mongo Shell: Command-line interface for interacting with MongoDB.

MongoDB Compass: GUI-based tool for developers to visualize schema, write queries, and manage indexes.

4. Data Model
MongoDB uses a document-oriented model:

Documents = JSON-like objects (BSON)

Documents are grouped into collections

Collections belong to databases

Example Structure:

Database: ecommerce
 └── Collection: products
      └── Document:
           {
             name: "Laptop",
             price: 999,
             specs: { cpu: "i7", ram: "16GB" }
           }



5. Storage Engine
Default: WiredTiger

Manages how data is written to disk (compression, caching, journaling)

Supports write-ahead logging, checkpoints, and more.

6. Replication (for High Availability)
MongoDB uses a Replica Set:

One primary node (handles writes)

Multiple secondary nodes (replicas for failover and read scaling)

Automatic failover if the primary goes down

7. Sharding (for Scalability)
Distributes data across multiple shards (servers)

Managed by:

mongos: Query router

config servers: Metadata management

Used for horizontal scaling

8. Indexing & Aggregation
Indexes optimize query performance

Aggregation Framework enables complex data processing (like SQL's GROUP BY, JOIN, etc.)


```

# Analogy between RDMS and MongoDB data model : 

```bash
RDBMS Term	 MongoDB Term	      Analogy / Description
Database	   Database	          A logical container for collections (or tables)
Table	       Collection   	    A group of related records/documents
Row	         Document	          A single data entry; in MongoDB it's a JSON-like BSON document
Column	     Field	            A single piece of data in a document
Primary Key	 _id Field	        Unique identifier for each row/document
Foreign Key	 Manual Reference	  MongoDB doesn't enforce, but references can be created manually
Join	       Embedding/Lookup	            Use embedding or $lookup for combining related data
Schema	     Schema-less/Flexible Schema	Tables require predefined structure; MongoDB documents can vary 
```

# Challanges for Data Modelling in MongoDB:

```bash 
1. Deciding Between Embedding vs Referencing
Embedding is fast and convenient, but can lead to large documents or data duplication.

Referencing avoids duplication but adds query complexity and may require multiple lookups.

Challenge: Choosing the right strategy for each use case.

2. Handling Large Documents
MongoDB has a 16MB size limit per document.

Deeply nested or embedded documents (like orders with many items) can hit this limit.

Challenge: Designing around this limit while keeping queries efficient.

3. Lack of Joins (by default)
Unlike RDBMS, MongoDB doesn't naturally support complex joins.

$lookup (for aggregation joins) exists, but it's not as powerful or performant as SQL joins.

Challenge: Re-structuring data or duplicating data to avoid needing joins.

4. Schema Flexibility Can Be a Double-Edged Sword
MongoDB allows documents in the same collection to have different fields.

Without discipline, this can lead to inconsistent or messy data.

Challenge: Enforcing schema best practices using tools like Mongoose or MongoDB schema validation.

5. Data Duplication
Often used for performance (to avoid joins).

But makes updates harder — you must update all duplicated fields manually or with complex queries.

Challenge: Balancing performance with data consistency.

6. Index Management
MongoDB supports indexes, but wrong or too many indexes can slow down writes and increase storage.

Compound indexes vs single field indexes need careful planning.

Challenge: Optimizing indexes for read/write balance and query patterns.

7. Sharding Considerations
In distributed systems, picking a good shard key is critical.

A poor shard key can lead to data imbalance, hotspots, or query scatter.

Challenge: Designing shard keys that ensure even distribution and efficient querying.

```

# GridFS 
GridFS (Grid File System) is MongoDB's built-in file storage system used to store and retrieve large files like images, videos, and documents directly inside MongoDB. It splits large files into smaller chunks and stores them as separate documents.

# CRUD operation Query 

```bash

// create database 
use db_name;

// create collection 
db.createCollection("users")


db.users.insertOne({
  name: "Alice",
  age: 25,
  email: "alice@example.com"
})


db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
])



db.users.find({ age: { $gte: 25 } })

//Projection in MongoDB refers to selecting specific fields to return in query results
db.students.find({},{age:1,_id:0})   // find only particular attribute.(projection) 

db.users.findOne({ name: "Alice" })

db.users.find().limit(5)


db.users.find().sort({ age: -1 }) // Descending

db.users.countDocuments({ age: { $gte: 25 } })


db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)


db.users.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
)
// add 1  to age of every document


db.users.replaceOne(
  { name: "Bob" },
  { name: "Robert", age: 31 }
)

db.students.updateMany(
  { grade: "B" },
  { $set: { grade: "A" } }
)

db.users.deleteOne({ name: "Charlie" })

db.users.deleteMany({ age: { $gt: 40 } })

```

# skip 
```bash

db.products.find().skip(2)
// Two documents are skipped..

```
# operators

```bash 

// Comparisonal operators 
Operator	Meaning
$gt	Greater than
$gte	Greater than or equal
$lt	Less than
$lte	Less than or equal
$eq	Equal to
$ne	Not equal to
$in	Matches any in array
$nin	Not in array


// Evaluation Operator
Operator	    Purpose                                        
$set	        Sets the value of a field

$unset	 :      Removes a field  

User.updateOne(
  { username: "john" },
  { $unset: { "profile.bio": "" } }
);  // This will remove the bio field from profile.



$inc	    :    Increments a numeric field

$rename	   :   Renames a field

User.updateOne(
  { fullname: "Alice Smith" },
  { $rename: { "fullname": "name" } }
);
// The fullname field is removed.
// A new field called name is created with the same value.



$push	    :   Adds an item to an array

User.updateOne(
  { username: "john" },
  { $push: { bio: "a cricket player" } }
); // Adds "a cricket player" to the bio array, even if it’s already there.


$pull	      :  Removes an item from an array

User.updateOne(
  { username: "john" },
  { $pull: { bio: "a cricket player" } }
); // Remove "a cricket player" to the bio array.



$addToSet   :  Ensures no duplicates are added to the array.

User.updateOne(
  { username: "john" },
  { $addToSet: { tags: "uniqueTag" } }
); //  Adds "uniqueTag" only if it doesn't already exist in the tags array (prevents duplicates)


$text         To perform text search                              { $text: { $search: "mongodb" } }
$search       To search any thing
$currentDate  to set current date                                 {$currentDate:{lastUpdated:true}}
$where	      JavaScript expression (use with caution)	          { $where: "this.age > 25" }


// Element Operators 
$exists	 : Checks if field exists or not	      { phone: { $exists: true } }

$type	   : Checks BSON data type of a field	    { age: { $type: "number" } }


// Logical Operators :
$and	AND logic    	                    { $and: [{ age: { $gt: 18 } }, { age: { $lt: 30 } }] }
$or	  OR logic	                        { $or: [{ name: "Alice" }, { name: "Bob" }] }
$not	Inverts the condition	            { age: { $not: { $gte: 18 } } }
$nor	NOT OR (none of the conditions)	  { $nor: [{ age: 18 }, { name: "John" }] }


// array operators : 

$all	    :  Matches all elements in the array	     

Example : { tags: { $all: ["node", "express"] } }



$elemMatch	: Matches documents in array that meet criteria.
	                                         
Example : 

User.find(
  { username: "alice" },
  { scores: { $elemMatch: { subject: "english" } } }
);



$size	 : Matches array of a specific length	

Example : { tags: { $size: 3 } }


// projection operators
Operator	  Description
1 / 0	      :  Include (1) or exclude (0) fields

$slice	    :  Return a subset of array elements

Example :   User.find({ username: "john" }, { tags: { $slice: 2 } });
// It returns only two tags


$match	: $match is a stage in MongoDB's aggregation pipeline used to filter documents — similar to a find() query, but inside an aggregation.

Example :   

db.users.aggregate([
  { $match: { age: { $gte: 25 } } }
])



$meta	      :  Include metadata like textScore

Example : 

Let's say our schema has a text index:

userSchema.index({ username: "text", bio: "text" });

User.find(
  { $text: { $search: "developer" } },
  {
    score: { $meta: "textScore" }
  }
).sort({ score: { $meta: "textScore" } });

// Adds a score field showing how relevant each document is to the search.
// Sorts by relevance.


Note : MongoDB sorts from most relevant to least relevant, i.e., descending order of textScore by default, even though we are not specifying ".sort({ score: -1 })". 


```

# indexing : 
There are mainly four type of indexing : 
<br>
1. Single Field Index
<br>
2.Compound Index 
<br>
3. MultiKey Index
<br>
4. Text Index
<br>
<br>
when we create index then Index Scan happens otherwise COLLSCAN happens.
<br>
Bydefault mongodb creates an index on "_id" field. 
<br>
partialFilterExpression is used when creating indexes to only include documents that match a specific condition. 


# aggregation pipelines :
$unwind :This is an aggregation stage that deconstructs an array field from the input documents and outputs a separate document for each element in the array.
<br>
Example : 
<br>

```bash 
// user collection 

// a document 
{
  name: "Alice",
  hobbies: ["reading", "cycling", "swimming"]
}


// Query 
db.users.aggregate([
  { $unwind: "$hobbies" }
])


// Output 
{ name: "Alice", hobbies: "reading" }
{ name: "Alice", hobbies: "cycling" }
{ name: "Alice", hobbies: "swimming" }


```



# How to optimize mongodb query : 

1. Use projection : Don't include the unnecessary field in the query. 
<br>
2. Use indexing to fast search. 
<br>
3. Use aggregation pipelines 
<br>
4. Don't use unnecessary operations in the queries and Don't arrange the documents in the ascending or descending order until required.




# mongodb tools