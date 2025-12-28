const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation");
const { login , signup } = require("../Controllers/AuthController");

const express = require("express") ;
const router = express.Router();

router.post('/login' , loginValidation , login);
router.post('/signup' , signupValidation , signup);

module.exports = router;