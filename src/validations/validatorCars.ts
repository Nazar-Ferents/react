import * as Joi from "joi";


export const ValidatorCars = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).min(1).max(20).required().messages({
        "string.pattern.base":'brand must have at least 1 character and maximum 20 '
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min":"price must have at least 0 character ",
        "number.max":"price must have at least 1000000 character ",
    }),
    year: Joi.number().min(1996).max(2026).required().messages({
        "number.min":"minimum year should be 1996 ",
        "number.max":"maximum year should be 2026 ",
    }),
})