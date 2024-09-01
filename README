# Uptime Monitor

This is a project for monitoring uptime. It uses a modern stack with a front-end built using Vite, React, and Tailwind, and a back-end built using Nest.js and RabbitMQ. The project is organized as a pnpm workspace.

## Prerequisites

- Node.js version 20 or above
- pnpm package manager

## Technologies Used

### Front-end
- Vite
- React
- Tailwind CSS

### Back-end
- Nest.js
- RabbitMQ
- PostgreSQL

## Getting Started

### Step 1: Start RabbitMQ and PostgreSQL using Docker Compose

First, you need to start RabbitMQ and PostgreSQL using Docker Compose. Run the following command in your terminal:

```sh
docker-compose up
```

### Step 2: Run Database Migrations
Navigate to the back-end folder and run the following command to create the schema:
```sh
pnpm run migration:run
```

run
If the schema has changed, generate a new schema with:
```sh
pnpm run migration:generate
```

### Step 3: Start the Development Servers
To start the development servers, run the following commands:
```sh
pnpm run dev
```

This will start both the front-end and back-end development servers.

