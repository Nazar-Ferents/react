import * as Joi from "joi";


export const carsValidator = Joi.object({

    brand: Joi.string().required().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        "string.pattern.base":"the brand must contain from 1 to 20 characters "
    }),
    price: Joi.number().max(1000000).min(0).messages({
        "number.min": "price must be a positive number or 0",
        "number.max": "max price can be 1000000 "
    }),
    year: Joi.number().min(1990).max(2026).messages({
        "number.min": "min year can be 1990",
        "number.max": "max year can be 2026"
    })
})