DROP DATABASE IF EXISTS gmaes_dev;
CREATE DATABASE gmaes_dev;

\c gmaes_dev;

CREATE TABLE games(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price INTERGER,
    description TEXT,
    release TEXT,
    developers TEXT,
    platforms TEXT,
    genres TEXT NOT NULL,
    images TEXT,
    rating NUMERIC,
    CHECK (rating >= 0 AND rating <=5)
)