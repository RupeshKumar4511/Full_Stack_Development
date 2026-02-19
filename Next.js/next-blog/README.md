# Next.js : 
Next.js is an open-source, full-stack React framework that provides a comprehensive set of tools and features for building high-performance, production-ready web applications. It is developed and maintained by the company Vercel. 

# Create Next App : 

```bash 
npx create-next-app@latest <project-name>

// To run : 
npm run dev

```

# App Router 
App Router is the new routing system in Next.js (13+). It replaces the old Pages Router.
<br>
It handles both frontend and backend routes.
<br>
Everything inside app/ is routed by folder structure.
<br>
Folder structure of frontend part : app/users/page.tsx

# Key ideas of App Router
It Uses React Server Components by default
<br>
Built for performance
<br>
Supports streaming & suspense
<br>
Co-locates frontend + backend
<br>
Cleaner mental model

# Route Handlers
Route Handlers are the backend/API part of the App Router.
<br>
Folder structure of backend/API part : app/api/**/route.ts
<br>
All type of HTTP requests are supported.

# Features of Next.js
<b>Full Stack Capabilites</b>
<br>
<b>Image Optimization</b>
<br>
Built-in Image Optimization (next/image)
<br>
<b>Static Site Generation</b>
<br>
A rendering method where HTML pages are generated at build time, not when a user requests them.
<br>
If the data doesn’t change often in a page, Next.js can generate that page once at build time.
<br>
<b>Automatic Code Splitting</b>
<br>
Only loads the JavaScript needed for a page.
<br>
<b>Server Side Rendering</b>
<br>
It uses React Server Component
<br>
To fetch data directly from database
<br>
No extra API calls required
<br>
Less JavaScript sent to browser
<br>
Better performance
<br>
<b>Middleware Support</b>
<br>
Run logic before a request completes:
<br>
Authentication
<br>
Logging
<br>
Redirects
<br>
Rate limiting
<br>
<b>Easy Deployment</b>
<br>
Optimized for deployment on: Vercel and AWS and Docker.

# Prisma ORM schema : 

```bash 

// =============================
// ENUMS
// =============================

enum Role {
  ADMIN
  MANAGER
  MEMBER
}

enum ProjectStatus {
  DRAFT
  ACTIVE
  COMPLETED
  ARCHIVED
}

enum TaskPriority {
  LOW
  MEDIUM
  HIGH
  CRITICAL
}

// =============================
// USER MODEL
// =============================

model User {
  id            Int       @id @default(autoincrement())
  uuid          String    @unique @default(uuid())
  email         String    @unique
  username      String?   @unique
  password      String
  role          Role      @default(MEMBER)
  isActive      Boolean   @default(true)

  profile       Profile?          // 1–1 relation
  projects      Project[]         // 1–many
  tasks         Task[]            // 1–many
  memberships   ProjectMember[]   // many–many

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@index([email])
}

// =============================
// PROFILE (1–1 RELATION)
// =============================

model Profile {
  id        Int     @id @default(autoincrement())
  bio       String?
  avatarUrl String?
  metadata  Json?   // JSON field

  userId    Int     @unique
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// =============================
// PROJECT MODEL
// =============================

model Project {
  id          Int           @id @default(autoincrement())
  title       String
  description String?
  status      ProjectStatus @default(DRAFT)
  budget      Decimal?      @db.Decimal(10,2)
  tags        String[]      // array example (Postgres only)

  ownerId     Int
  owner       User          @relation(fields: [ownerId], references: [id])

  tasks       Task[]
  members     ProjectMember[]

  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  @@index([status])
  @@unique([title, ownerId]) // composite unique
}

// =============================
// TASK MODEL
// =============================

model Task {
  id          Int           @id @default(autoincrement())
  title       String
  content     String?
  priority    TaskPriority  @default(MEDIUM)
  isCompleted Boolean        @default(false)
  dueDate     DateTime?

  projectId   Int
  project     Project       @relation(fields: [projectId], references: [id], onDelete: Cascade)

  assigneeId  Int?
  assignee    User?         @relation(fields: [assigneeId], references: [id])

  // Self relation (parent-child task)
  parentId    Int?
  parent      Task?         @relation("TaskHierarchy", fields: [parentId], references: [id])
  subtasks    Task[]        @relation("TaskHierarchy")

  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt

  @@index([priority])
}

// =============================
// MANY-TO-MANY (Explicit)
// =============================

model ProjectMember {
  id         Int     @id @default(autoincrement())

  userId     Int
  projectId  Int

  role       Role    @default(MEMBER)

  user       User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  project    Project @relation(fields: [projectId], references: [id], onDelete: Cascade)

  joinedAt   DateTime @default(now())

  @@unique([userId, projectId]) // composite unique
}

// =============================
// SOFT DELETE EXAMPLE
// =============================

model AuditLog {
  id          Int      @id @default(autoincrement())
  action      String
  entity      String
  entityId    Int
  data        Json?
  isDeleted   Boolean  @default(false)
  deletedAt   DateTime?

  createdAt   DateTime @default(now())
}

```

# Queries Using Prisma ORM

```bash 
// ============================
// CREATE
// ============================

// Create one
await prisma.user.create({
  data: {
    email: "john@test.com",
    password: "hashed",
    role: "MEMBER"
  }
})

// Create with relation
await prisma.user.create({
  data: {
    email: "alex@test.com",
    password: "123",
    profile: {
      create: { bio: "Developer" }
    }
  }
})

// Create many
await prisma.user.createMany({
  data: [
    { email: "a@test.com", password: "123" },
    { email: "b@test.com", password: "123" }
  ]
})


// ============================
// READ
// ============================

// Find unique
await prisma.user.findUnique({
  where: { id: 1 }
})

// Find first
await prisma.user.findFirst({
  where: { role: "ADMIN" }
})

// Find many
await prisma.user.findMany()

// Select specific fields
await prisma.user.findMany({
  select: { email: true, role: true }
})

// Include relations
await prisma.user.findUnique({
  where: { id: 1 },
  include: { projects: true, profile: true }
})

// Filtering
await prisma.user.findMany({
  where: {
    email: { contains: "test" },
    role: { in: ["ADMIN", "MANAGER"] }
  }
})

// AND / OR
await prisma.user.findMany({
  where: {
    OR: [
      { role: "ADMIN" },
      { isActive: true }
    ]
  }
})


// ============================
// UPDATE
// ============================

// Update one
await prisma.user.update({
  where: { id: 1 },
  data: { role: "MANAGER" }
})

// Update many
await prisma.user.updateMany({
  where: { role: "MEMBER" },
  data: { isActive: false }
})

// Nested update
await prisma.user.update({
  where: { id: 1 },
  data: {
    profile: {
      update: { bio: "Updated bio" }
    }
  }
})


// ============================
// DELETE
// ============================

// Delete one
await prisma.user.delete({
  where: { id: 1 }
})

// Delete many
await prisma.user.deleteMany({
  where: { isActive: false }
})


// ============================
// UPSERT
// ============================

await prisma.user.upsert({
  where: { email: "john@test.com" },
  update: { role: "ADMIN" },
  create: {
    email: "john@test.com",
    password: "123"
  }
})


// ============================
// RELATIONS
// ============================

// Connect
await prisma.project.update({
  where: { id: 1 },
  data: {
    members: {
      connect: { id: 2 }
    }
  }
})

// Disconnect
await prisma.project.update({
  where: { id: 1 },
  data: {
    members: {
      disconnect: { id: 2 }
    }
  }
})

// Set
await prisma.project.update({
  where: { id: 1 },
  data: {
    members: {
      set: [{ id: 1 }, { id: 2 }]
    }
  }
})


// ============================
// SELF RELATION
// ============================

// Create subtask
await prisma.task.create({
  data: {
    title: "Subtask",
    parent: {
      connect: { id: 1 }
    },
    projectId: 1
  }
})

// Get task with subtasks
await prisma.task.findUnique({
  where: { id: 1 },
  include: { subtasks: true }
})


// ============================
// PAGINATION
// ============================

// Offset pagination
await prisma.user.findMany({
  skip: 10,
  take: 5
})

// Cursor pagination
await prisma.user.findMany({
  cursor: { id: 5 },
  take: 5
})


// ============================
// ORDER BY
// ============================

await prisma.user.findMany({
  orderBy: { createdAt: "desc" }
})


// ============================
// AGGREGATION
// ============================

// Count
await prisma.user.count()

// Aggregate
await prisma.user.aggregate({
  _count: true,
  _max: { createdAt: true }
})

// Group By
await prisma.user.groupBy({
  by: ["role"],
  _count: { role: true }
})


// ============================
// TRANSACTIONS
// ============================

// Array transaction
await prisma.$transaction([
  prisma.user.create({ data: { email: "x@test.com", password: "123" } }),
  prisma.project.create({ data: { title: "Proj", ownerId: 1 } })
])

// Interactive transaction
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { email: "z@test.com", password: "123" }
  })

  await tx.project.create({
    data: { title: "New Project", ownerId: user.id }
  })
})


// ============================
// RAW SQL
// ============================

// Query raw
await prisma.$queryRaw`SELECT * FROM "User"`

// Execute raw
await prisma.$executeRaw`DELETE FROM "User" WHERE id = 1`

```