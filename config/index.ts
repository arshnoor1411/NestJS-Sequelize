import 'dotenv/config';

export const applicationConfig = {
  db: {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },

  meilisearch: {
    host: process.env.MEILISEARCH_HOST,
    key: process.env.MEILISEARCH_KEY,
  },
};
