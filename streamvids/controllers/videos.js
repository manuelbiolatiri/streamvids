const jwt = require('jsonwebtoken');
const pool = require('../models/database');
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// video controller
const videos = {
    postVideo(req, res) {
        //  image form-data
        let image = req.files.image;
        
        const { title } = req.body;
        console.log(image)
        console.log(title)
        try {
             // empty body values (form-data)
            if (!title || !image) {
                return res.status(400).json({
                    status: 'error',
                    error: 'all fields are required'
                });
            };

                // cloudinary upload
                cloudinary.v2.uploader.upload(image.tempFilePath, { 
                    resource_type: "video",
                    folder: "images_folder",
                    // allowedFormats: ["jpg", "png", "jpeg", "gif"],
                    transformation: [{ width: 1000, height: 500, crop: "limit" }] })
                    .then(async (result) => {
                        // gif upload query
                        const img = `INSERT INTO videos (title, video, createdOn)
                            VALUES($1, $2, $3) RETURNING *`;
                        const values = [title, result.url, new Date().toLocaleString()];
                        const imageQuery = await pool.query(img, values);

                       if (imageQuery) {
                        res.status(201).json({
                            status: 'success',
                            data: {
                                message: 'video successfully posted',
                                createdOn: imageQuery.rows[0].createdOn,
                                postTitle: imageQuery.rows[0].title
                            }
                        });
                       } else {
                        res.status(400).json({
                            status: 'error',
                            message: 'video failed to upload'
                        });
                       }
                        
                    })
                    .catch((e) =>
                        console.log(e)
                    )
        }
        catch (e) {
            console.log(e);
        };
    }
}

module.exports = videos;