import { body } from 'express-validator';

const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Invalid email format"),
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required")
            .isLength({ min: 3, max: 50 })
            .withMessage("Name must be between 3 and 50 characters"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({ min: 6, max: 20 })
            .withMessage("Password must be between 6 and 20 characters")
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Invalid email format"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
    ]
}

export { userRegisterValidator, userLoginValidator };