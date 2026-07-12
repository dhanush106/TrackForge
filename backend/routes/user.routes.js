import {registerUser , login, logout} from '../controllers/user.controllers.js';
import Router from 'express';
import {validate} from '../middlewares/validator.middleware.js';
import {userLoginValidator, userRegisterValidator} from '../validators/index.js';

//middleware
import {verifyToken} from '../middlewares/user.middleware.js';

const router = Router();

router.route("/register")
    .post(userRegisterValidator(), validate, registerUser);
router.route("/login")
    .post(userLoginValidator(), validate, login);


//secure router
router.route("/logout")
    .post(verifyToken, logout);

export default router;