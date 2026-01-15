import { index, uniqueIndex, check } from 'drizzle-orm/pg-core';
import {
  pgTable,
  serial,
  integer,
  varchar,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// Enums
export const providerEnum = pgEnum('provider', ['github']);
export const roleEnum = pgEnum('role', ['admin', 'manager', 'staff']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(), // maxlen=255
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }),
});

export const oauthAccountTable = pgTable('oauth_account', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  providerAccountId: varchar('provider_account_id', { length: 255 })
    .notNull()
    .unique(),
  provider: providerEnum('provider').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// for learning purpose
export const department = pgTable('department', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
});

export const employees = pgTable(
  'employees',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    fullName: varchar('full_name', { length: 100 }).notNull(),
    age: integer('age').default(18),
    role: roleEnum('role').notNull(),
    departmentId: integer('department_id')
      .notNull()
      .references(() => department.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    uniqueIndex('email_unique').on(table.email),
    index('department_idx').on(table.departmentId),
    check('age_check', sql`${table.age} >= 18`),
    check(
      "email_format",
      sql`${table.email} ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'`
    ),
  ]
);
