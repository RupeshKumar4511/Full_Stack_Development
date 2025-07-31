import { oauthAccountTable, users } from "../models/github-user.js";
import db from '../config/mysql.db.mjs';
import { and, eq } from "drizzle-orm";

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

