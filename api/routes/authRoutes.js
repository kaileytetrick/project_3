const express = require('express');
const passport = require('passport')
const User = require('../models/UserSchema');
const Stash = require('../models/StashSchema');
const authController = require('../controllers/authcontroller');
const authCheck = require('../../authMiddleware/jwtAuth');

const router = express.Router();

router.get('/validateToken', authCheck, authController.validate_token)
router.post('/login', authController.user_login );
router.post('/signup', authController.user_signup );
router.put('/changePassword', authCheck, authController.user_changePassword);



module.exports = router;