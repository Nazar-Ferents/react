import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/\w{4,}/).required().messages({
        "string.pattern.base":"name must have at least four charachetrs && letters"
    }),

    password: Joi.string().min(3).max(6).required().messages({
        "string.min":"password can be at lest 3 chars",
        "string.max":"password cannot be gt lest 6 chars"
    }),
    age: Joi.number().min(1).max(117).required().messages({
        "number.min":"age can be at lest 1 year",
        "number.max":"age cannot be gt lest 117 years"
    }),
})

export { userValidator }