import { int, mysqlEnum, mysqlTable,timestamp,varchar } from 'drizzle-orm/mysql-core';

export const oauthAccountTable = mysqlTable("oauthAccount",{   
    id:int().autoincrement().primaryKey(),
    userId:int("user_id").notNull().references(()=>users.id,{onDelete:"cascade"}),
    providerAccountId:varchar("provider_account_id",{length:255}).notNull().unique(),
    provider:mysqlEnum('provider',['github']).notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull()
})


export const users = mysqlTable('users',{
    id:int().autoincrement().primaryKey(),
    username:varchar({length:255}).notNull(),
    email:varchar({length:255}).notNull().unique(),
    password:varchar({length:255}),
})

