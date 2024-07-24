# Crude Server with ExpressJS

This is a backend server built with ExpressJS using TypeScript. It provides a set of CRUD interfaces to allow users to interact with the service

## Installation

1. Clone the repository:

```
git clone https://github.com/minhhoanq/99tech.git
cd 99tech
cd problem5
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables

Create file .env

```
PORT=8099
DATABASE_URL="postgresql://postgres_user:postgres_pw@localhost:5433/postgres_db?schema=public"
```

Create file .env.dev

```
PORT=8099
DATABASE_URL="postgresql://postgres_user:postgres_pw@localhost:5433/postgres_db?schema=public"
```

4. Set up the database:

    I use PostgreSQL with Docker in the `docker-compose.yaml` file.

    Start the database with Docker:

    ```bash
    docker-compose up
    ```

    Run the Prisma migrations to set up the database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

## Usage

# Development

To start the server in development mode, run:

```bash
npm run dev
```

# Production

To build and start the server in production mode, run:

```bash
npm run build
npm start
```
