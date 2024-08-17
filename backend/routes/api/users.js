const express = require('express')
const router = express.Router();

const { User } = require('../../db/models')

// culvert post endpoint
router.post(
    '/',
    async (req, res, next) => {
        const {user, score} = req.body

        // let checkUser = await User.findOne({
        //     where: {
        //         user: req.body.user
        //     }
        // })

        let checkScore = await User.findOne({
            where: {
                score: req.body.score
            }
        })

        if(!user || !score){
            res.status(400);
            return res.json({
                "message": "Validation error",
                "statusCode": 400,
                "errors": {
                    "user": "User not found",
                    "score": "Score is required"
                }
            })
        }

    }
)

module.exports = router;