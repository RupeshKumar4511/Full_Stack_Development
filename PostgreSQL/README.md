# How PostgreSQL is different from MYSQL 
PostgreSQL and MySQL are both popular open-source relational databases, but they are built with different philosophies.

MySQL focuses on speed, simplicity, and web workloads.

PostgreSQL focuses on correctness, standards, extensibility, and advanced features.

That difference in design is what really sets them apart.

1. SQL Standards & Correctness

PostgreSQL is much closer to the SQL standard.

Strict type checking

True FULL OUTER JOIN

Proper GROUP BY behavior

Rich subqueries, CTEs, window functions

Advanced constraints

MySQL is more permissive:

Allows invalid GROUP BY queries (unless strict mode is enabled)

Implicit type conversions

Historically weaker SQL compliance

PostgreSQL is often chosen for financial, analytical, and enterprise systems where correctness matters more than permissiveness.

2. Data Types (PostgreSQL is far richer)

PostgreSQL supports many powerful native types:

| Feature            | PostgreSQL              | MySQL                |
| ------------------ | ----------------------- | -------------------- |
| JSON / JSONB       | Native + indexed        | JSON (less powerful) |
| Arrays             | Yes                     | No                   |
| HSTORE (key-value) | Yes                     | No                   |
| UUID               | Native                  | Usually as CHAR      |
| Range types        | Yes                     | No                   |
| Geospatial         | PostGIS (very powerful) | Basic GIS            |
| Custom types       | Yes                     | No                   |


Example in PostgreSQL:

CREATE TABLE orders (
  id UUID PRIMARY KEY,
  tags TEXT[],
  period DATERANGE,
  meta JSONB
);


This level of modeling is not possible in MySQL.

3. Concurrency & MVCC

Both use MVCC (Multi-Version Concurrency Control), but PostgreSQL’s implementation is more consistent:

Readers never block writers

Writers never block readers

No “read locks” needed

Better behavior under heavy concurrency

In MySQL (InnoDB):

Some operations still block

More deadlocks under high contention

Certain ALTER operations lock tables (unless using online DDL)

PostgreSQL scales better for write-heavy, concurrent workloads.

4. Extensibility (PostgreSQL is a platform)

PostgreSQL is not just a database; it’s an extensible data engine:

You can add:

New data types

New index types

New operators

Custom functions in C, Python, PL/pgSQL, etc.

Famous extensions:

PostGIS – world-class GIS database

pg_trgm – fuzzy search

timescaledb – time-series DB

citext – case-insensitive text

uuid-ossp

MySQL has plugins, but they are far more limited.

5. Indexing Capabilities

PostgreSQL supports many index types:

B-tree

Hash

GIN (great for JSONB, arrays)

GiST (ranges, geometry)

BRIN (huge tables, time-series)

Partial indexes

Expression indexes

Example:

CREATE INDEX idx_active_users
ON users (lower(email))
WHERE active = true;


MySQL mainly relies on:

B-tree

Full-text (limited)

No partial indexes, no expression indexes.

6. JSON Handling

PostgreSQL’s JSONB is one of its biggest strengths:

Binary storage

Fast querying

Indexable

Powerful operators

SELECT *
FROM users
WHERE profile->>'country' = 'IN';


With a GIN index:

CREATE INDEX ON users USING GIN (profile);


This behaves almost like a document database.

MySQL supports JSON, but:

Weaker indexing

Fewer operators

Slower for complex queries

7. Replication & HA

MySQL:

Very mature replication ecosystem

Widely used in LAMP stacks

Simpler master–replica setups

PostgreSQL:

Streaming replication

Logical replication

Better consistency guarantees

Tools like Patroni, pgpool, etc.

PostgreSQL replication is more correct and flexible, but often more complex to operate.

8. Performance Philosophy

MySQL often wins in simple read-heavy web workloads

PostgreSQL shines in:

Complex queries

Analytics

Large joins

Write-heavy systems

Advanced indexing use-cases

PostgreSQL’s query planner is more sophisticated for complex workloads.

9. When to Choose What?

Choose PostgreSQL if you need:

Strong data integrity

Complex queries

Rich data types (JSON, arrays, ranges)

Heavy concurrency

Extensibility (GIS, time-series, custom logic)

Choose MySQL if you need:

Simple web workloads

Easy hosting and setup

Very fast basic reads

Legacy LAMP compatibility


# Stored Routine 
A sql statement or set of sql statement that can be stored on database server which can be call no of times. 
<br>
Types of Stored Routine : 
<br>
Stored Procedure : set of SQL statement that can perform logical operations such as inserting, updating, deleting and querying data. 
<br>

```bash 
CREATE OR REPLACE PROCEDURE add_employee(fname VARCHAR,lname VARCHAR)
LANGUAGE plpgsql 
AS $$
BEGIN
INSERT INTO EMPLOYEE (fname,lname)
VALUES (fname,lname)
END;
$$

-- CALL PROCEDURE_NAME
CALL add_employee("Rakesh","Kumar")
```
<br>
User Defined Functions : custom function created by user to perform certain operation and return value.
<br>

```bash
CREATE OR REPLACE FUNCTION get_dept_max_salary(dept_name VARCHAR)
RETURN TABLE(emp_name,emp_id,salary)
AS $$
BEGIN

RETURN QUERY 
SELECT emp_name,emp_id,salary from emp where emp.dept = dept_name and 
emp.salary = (SELECT max(salary) from emp where emp.dept = dept_name );

END;
$$ LANGUAGE plpgsql;
```

# Trigger : 
Triggers are special procedure in the database that automatically executes predefined actions in response to certain events on a specified table or view. 
<br>
example : 
<br>

```bash 

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_set_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();


```