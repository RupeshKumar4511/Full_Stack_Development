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
Aggregation Framework

Performs complex queries, transformations, and analytics like SQL's GROUP BY.
<br>
ACID Transactions :
<br>
Supports multi-document transactions, ensuring data consistency.
<br>
Flexible Schema :
<br>
Allows dynamic, semi-structured data storage, unlike relational databases.
<br>
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

5. Support for Distributed Data
Data is distributed across multiple servers, ensuring high availability and fault tolerance.

Example: Cassandra is widely used in distributed systems like Facebo

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
1. Embeded Model : 
Same as Embedded Documents
<br>
2. Normalized Data Model : 
```bash 
How to Normalize in Practice:
Identify entities (like Users, Orders, Products).

Create separate collections for each entity.

Use references (_id values) to connect documents across collections.

When querying, use $lookup (MongoDB's equivalent of a JOIN) to combine data if needed.

```


# GridFS 
GridFS (Grid File System) is MongoDB's built-in file storage system used to store and retrieve large files like images, videos, and documents directly inside MongoDB. It splits large files into smaller chunks and stores them as separate documents.

# CRUD operation Query 
# sort , limit , skip 
# operators and complex queries
# aggregation piplines 
