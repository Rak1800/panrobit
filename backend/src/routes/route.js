const { userController, otpSend, enterOtp } = require('../controllers/userController')

const router=require('express').Router()

router.post('/register',userController)
router.post('/send',otpSend)
router.post('/enterotp',enterOtp)


module.exports=router 