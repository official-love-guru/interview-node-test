# Expense Tracker for Freelancers

A simplified expense tracker API built with Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js
- PostgreSQL

## Setup

### Clone the Repository

```bash
git clone https://github.com/official-love-guru/interview-node-test
cd interview-node-test
```

### Install Dependencies

```bash
npm install
```

### Setup PostgreSQL Database

1. Install PostgreSQL if you haven't already.
2. Create a new database:

```sql
CREATE DATABASE expense_tracker;
```

OR 

```
createdb expense_tracker
```

3. Create a `.env` file in the root directory and add the Postgres connection string:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/expense_tracker
```

Replace `username` and `password` with your PostgreSQL username and password.

### Run the Application

```bash
node src/index.js
```

The server will run on `http://localhost:3000`.



## DB tables

initial drafts for the project and expense database models using SQL

```SQL
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  project_id INT REFERENCES projects(id) ON DELETE CASCADE,
  amount NUMERIC(10, 2) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```