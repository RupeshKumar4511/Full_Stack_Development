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