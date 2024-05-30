const express = require("express");

const router = express.Router();

const { homePage,  termsPage,  registerPage, loginPage, register_post, login_post, loginAdmin, logout_get, policyPage } = require("../controllers/userController");
const { loginAdmin_post } = require("../controllers/adminController");

router.get("/", homePage);

router.get("/terms", termsPage)

router.get("/policy", policyPage)
// router.get("/plan", planPage)

router.get("/register", registerPage);
router.post('/register',register_post);

router.get("/login", loginPage);
router.post('/login',login_post);

router.get('/loginAdmin', loginAdmin);
router.post('/loginAdmin', loginAdmin_post)

router.get('/logout', logout_get)









module.exports = router;