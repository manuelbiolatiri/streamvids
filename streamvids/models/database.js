const pg = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// connect to heroku database
const connection = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
};

// connect to database
// const connection = {
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// };
// pool
const pool = new pg.Pool(connection);
pool.on('connect', () => {})
// videos table
const videosTable = async () => {
    const postCommentTableQuery = `CREATE TABLE IF NOT EXISTS
    videos(
        id SERIAL PRIMARY KEY NOT NULL UNIQUE,
        title VARCHAR(300) NOT NULL,
        video VARCHAR(300) NOT NULL,
        createdOn VARCHAR(300) NOT NULL
    )`;
    try{
        await pool.query(postCommentTableQuery);
        console.log('videos table created')
    }
    catch(e) {
        console.log(e)
    }
};
videosTable()
// export pool to controllers
module.exports = pool;