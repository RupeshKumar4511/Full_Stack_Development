import { oauthAccountTable, users } from "../models/github-user.js";
import db from '../config/mysql.db.mjs';
import { and, eq, inArray } from "drizzle-orm";

export async function getUserWithOauthId({ email, provider }) {

    const [user] = await db.select({
        id: users.id,
        name: users.username,
        email: users.email,
        providerAccountId: oauthAccountTable.providerAccountId,
        provider: oauthAccountTable.provider
    }).from(users)
        .where(eq(users.email, email))
        .leftJoin(
            oauthAccountTable,
            and(
                eq(oauthAccountTable.provider, provider),
                eq(oauthAccountTable.userId, users.id)
            )
        )

    if (!user) return null;

    return user;


}

export async function linkUserWithOauth({ userId, provider, providerAccountId }) {
    await db.insert(oauthAccountTable).values({
        userId,
        provider,
        providerAccountId
    })
}


export async function createUserWithOauth({ name, email, provider, providerAccountId }) {
    // transaction 
    const user = await db.transaction(async (trx) => {
        const [user] = await trx.insert(users)
            .values({ username: name, email })
            .$returningId()

        await trx.insert(oauthAccountTable).values({
            provider,
            providerAccountId,
            userId: user.id,
        })
        return user;
    })



    return {
        id: user.id,
        name,
        email,
        provider,
        providerAccountId
    }
}




export const Learn = async () => {

    // Single INSERT 
    await db.insert(users).values({
        username: username,
        email: email,
        password: password,
    })
    // Multiple Insert
    await db.insert(users).values([
        { username: "A", email: "email1@gmail.com", password: "abc" },
        { username: "b", email: "email2@gmail.com", password: "hello" }
    ])

    // READ
    await db.select().from(users);
    await db.select({ username: users.username, email: users.email }).from(users);

    // Filtering 
    // import {eq,and,gt} from 'drizzle-orm'
    await db.select().from(users).where(and(
        gt(users.age, 20),
        eq(users.role, "user")
    ))

    // Sorting and Limiting : 
    // import {desc,asc} from 'drizzle-orm'
    await db.select().from(users).groupBy(desc(users.createdAt)).limit(10)


    // UPDATE 
    await db.update(users).set({ age: 20 }).where(eq(users.username, "John"))


    // DELETE 
    await db.delete(users).where(eq(users.username, "Akash"))



    // Consider another table - "posts"
    // import posts from 'posts.mjs'

    // INNER JOIN 
    await db.select({ username: users.username, postTitle: posts.title }).from(users).innerJoin(posts, eq(posts.userId, users.id))


    // LEFT JOIN
    await db.select({ username: users.username, postTitle: posts.title }).from(users).leftJoin(posts, eq(posts.userId, users.id))

    // AGGREGATE 
    // import{count,min,max,sum,avg} from 'drizzle-orm';
    await db.select({
        totalUser: count(users.id),
        Oldest: max(users.age),
        Youngest: min(users.age),
        AverageAge: avg(users.age),
        TotalAges: sum(users.age)

    }).from(users)


    // Grouping and Having 
    await db.select().from(users).groupBy(users.role).having(eq(users.id, 1))

    // Pattern Matching 
    await db.select().from(users).where(like(users.username,"%smit%"));

    // IN / Not IN 
    // import {inArray,notInArray} from 'drizzle-orm';
    await db.select().from(users).where(inArray(users.id,[1,2,3]));

    // Subquery 
    const subq = await db.select().from(users).where(eq(users.role,"admin"));
    await db.select().from(posts).where(inArray(users.id,subq));



}









