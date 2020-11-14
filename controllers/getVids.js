const jwt = require('jsonwebtoken');
const pool = require('../models/database');

const getVids = {
   async getAllVids(req, res) {
        try {
            

                // get all posts query 
                const getVids = await pool.query(`SELECT * FROM videos`);

                // if there are no posts available
                if (!getVids.rowCount) {
                    return res.status(400).json({
                        status: 'error',
                        error: 'sorry, there are no videos available in the database'
                    });
                };

                // get response
                res.status(200).json({
                    status: 'success',
                    videos: getVids.rows
                });
        }
        catch (e) {
            console.log(e)
        };
    },
    async getSingleVid(req, res) {
        // parameter (number)
        const id = parseInt(req.params.id);
        try {
           
                // select single post query
                const getSinglePost = `SELECT * FROM videos WHERE video=$1`;
                const value = [id]
                const getSinglePostQuery = await pool.query(getSinglePost, value);

                // get response
                res.status(200).json({
                    status: 'success',
                    data: {
                        id: getSinglePostQuery.rows[0].title,
                        id: getSinglePostQuery.rows[0].video
                    }
                });
        }
        catch (e) {
            console.log(e)
        };
    }

}

module.exports = getVids;

