# INTERCORP Nutrition Website

## Overview

This is a corporate website for INTERCORP, a nutrition company specializing in Human Nutrition, Animal Nutrition, and Consumer Products. The application is a full-stack React + Express project with PostgreSQL database, built to showcase the company's product offerings across different nutrition categories including fortified foods (edible oil, milk, rice, flour, salt, bakery products, and breakfast cereals).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion for page transitions and scroll animations
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints with shared route definitions
- **Build System**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit manages database migrations (`drizzle-kit push`)

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
```

### Key Design Patterns
- **Shared Types**: Database schemas and API contracts defined in `shared/` directory, ensuring type safety across client and server
- **Storage Interface**: `IStorage` interface in `server/storage.ts` abstracts database operations
- **Query Client**: Centralized React Query configuration with custom fetch wrapper

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Framework
- **Radix UI**: Headless UI primitives for accessible components
- **shadcn/ui**: Pre-styled component library (configured in `components.json`)
- **Tailwind CSS**: Utility-first CSS framework with custom theme

### Development Tools
- **Vite**: Frontend dev server with HMR
- **Replit Plugins**: cartographer, dev-banner, and runtime-error-modal for Replit integration

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `react-hook-form` + `@hookform/resolvers`: Form handling
- `zod`: Runtime type validation
- `drizzle-zod`: Zod schema generation from Drizzle schemas
- `wouter`: Lightweight routing