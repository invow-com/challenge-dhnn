# Monolithic Project: Strapi & Next

This repository contains a monolithic application built with Strapi and Next.js.

## Initial Setup

### 1. Import Strapi Database

Make sure you have Strapi installed and then run the following command to import the database from the `export_20240222122050.tar.gz.enc` file:

```bash
# Assuming you are already in the Strapi directory
cd strapi

# Install dependencies (if not done)
npm install
# or
yarn

# Decrypt and import the database:
# Code: 123456
npm run strapi db:restore --source=./export_20240222122050.tar.gz.enc
# or
yarn strapi db:restore --source=./export_20240222122050.tar.gz.enc
```

### 2. Start Strapi

Once the database is imported, start Strapi with the following command:

#### In the root directory

```bash
npm run develop
```

#### or

```bash
yarn develop
```

### Start Next.js Application

To start the Next.js application, use one of the following commands:

#### In the root directory

```bash
npm run dev
```

#### or

```bash
yarn dev
```

## Custom Endpoint for Filtered Posts

You can use the custom endpoint to get filtered posts by category. Here's an example URL:

http://localhost:1337/posts?filters[category][title]=category1
