import db from '../config/pg.db.mjs'; // your postgres drizzle instance
import { oauthAccountTable, users } from "../models/github-user.js";
import {
  and,
  eq,
  inArray,
  gt,
  desc,
  asc,
  count,
  min,
  max,
  sum,
  avg,
  like,
} from "drizzle-orm";
    export async function getUserWithOauthId({ email, provider }) {
  const [user] = await db
    .select({
      id: users.id,
      name: users.username,
      email: users.email,
      providerAccountId: oauthAccountTable.providerAccountId,
      provider: oauthAccountTable.provider,
    })
    .from(users)
    .leftJoin(
      oauthAccountTable,
      and(
        eq(oauthAccountTable.provider, provider),
        eq(oauthAccountTable.userId, users.id)
      )
    )
    .where(eq(users.email, email));

  if (!user) return null;
  return user;
}

export async function linkUserWithOauth({
  userId,
  provider,
  providerAccountId,
}) {
  await db.insert(oauthAccountTable).values({
    userId,
    provider,
    providerAccountId,
  });
}

export async function createUserWithOauth({
  name,
  email,
  provider,
  providerAccountId,
}) {
  const user = await db.transaction(async (trx) => {
    const [user] = await trx
      .insert(users)
      .values({ username: name, email })
      .returning({ id: users.id });

    await trx.insert(oauthAccountTable).values({
      provider,
      providerAccountId,
      userId: user.id,
    });

    return user;
  });

  return {
    id: user.id,
    name,
    email,
    provider,
    providerAccountId,
  };
}

export const Learn = async () => {
  // Single INSERT
  await db.insert(users).values({
    username,
    email,
    password,
  });

  // Multiple INSERT
  await db.insert(users).values([
    { username: "A", email: "email1@gmail.com", password: "abc" },
    { username: "B", email: "email2@gmail.com", password: "hello" },
  ]);

  // READ
  await db.select().from(users);
  await db
    .select({ username: users.username, email: users.email })
    .from(users);

  // Filtering
  await db
    .select()
    .from(users)
    .where(and(gt(users.age, 20), eq(users.role, "user")));

  // Sorting and Limiting
  await db
    .select()
    .from(users)
    .orderBy(desc(users.createdAt))
    .limit(10);

  // UPDATE
  await db
    .update(users)
    .set({ age: 20 })
    .where(eq(users.username, "John"));

  // DELETE
  await db.delete(users).where(eq(users.username, "Akash"));

  // INNER JOIN (assuming posts table exists)
  await db
    .select({ username: users.username, postTitle: posts.title })
    .from(users)
    .innerJoin(posts, eq(posts.userId, users.id));

  // LEFT JOIN
  await db
    .select({ username: users.username, postTitle: posts.title })
    .from(users)
    .leftJoin(posts, eq(posts.userId, users.id));

  // AGGREGATE
  await db
    .select({
      totalUser: count(users.id),
      oldest: max(users.age),
      youngest: min(users.age),
      averageAge: avg(users.age),
      totalAges: sum(users.age),
    })
    .from(users);

  // Grouping and Having
  await db
    .select()
    .from(users)
    .groupBy(users.role)
    .having(eq(count(users.id), 1));

  // Pattern Matching
  await db.select().from(users).where(like(users.username, "%smit%"));

  // IN
  await db.select().from(users).where(inArray(users.id, [1, 2, 3]));

  // Subquery
  const subq = db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.role, "admin"));

  await db.select().from(posts).where(inArray(posts.userId, subq));
};
