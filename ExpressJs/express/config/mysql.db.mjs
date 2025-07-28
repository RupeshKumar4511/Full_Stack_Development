import {drizzle} from 'drizzle-orm/mysql2';
// A lightweight, fully type-safe ORM and SQL builder for JavaScript/TypeScript.
// ORM stands for Object Relational Mapping
import mysql from 'mysql2/promise';
import  {config} from 'dotenv';
config();

const poolConnection = mysql.createPool({
    host:process.env.HOST_NAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})


const db = drizzle({client:poolConnection})

export default db;