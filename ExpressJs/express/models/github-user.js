import { index, uniqueIndex } from 'drizzle-orm/gel-core';
import { int, mysqlEnum, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { serial } from 'drizzle-orm/pg-core';

export const oauthAccountTable = mysqlTable("oauthAccount", {
    id: int().autoincrement().primaryKey(),
    userId: int("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: varchar("provider_account_id", { length: 255 }).notNull().unique(),
    provider: mysqlEnum('provider', ['github']).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
    // created_at : It will be shown in database
    // but in express we deal with "createdAt".
})


export const users = mysqlTable('users', {
    id: int().autoincrement().primaryKey(),
    username: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }),
})



// for learning purpose 
export const department = mysqlTable("department",
    {
        id: serial("id").primaryKey(),
        name: varchar("name", { length: 100 }).notNull().unique()
    }
)

export const employees = mysqlTable("employees", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    fullName: varchar("full_name", { length: 100 }).notNull(),
    age: int("age").default(18),
    role: mysqlEnum("role", ["admin", "manager", "staff"]).notNull(),
    departmenId: int("department_id").notNull().references(() => department.id, { onDelete: 'cascade' }), // Foreign KEY
    createdAt: timestamp("created_at").defaultNow().notNull()
    },
    (table)=>{
        return [
            uniqueIndex("email_unique").on(table.email),
            index("department_idx").on(table.departmenId),
            check("age_check",sql`${table.age}>=18`)
        ]
    }

)
