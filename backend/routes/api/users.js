const express = require('express')
const router = express.Router();

const { User } = require('../../db/models')

// culvert post endpoint
router.post(
    '/',
    async (req, res, next) => {
        const {user, score} = req.body

        let checkUser = await User.findOne({
            where: {
                user: req.body.user
            }
        })

        if(!user){
            res.status(400);
            return res.json({
                "message": "Validation error",
                "statusCode": 400,
                "errors": {
                    "user": "User not found"
                }
            })
        }

    }
)

module.exports = router;