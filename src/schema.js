
const Joi = require('joi');

const failSchema = Joi.object({
  status: Joi.string().valid('fail').required(),
  message: Joi.string().required(),
});

const payloadSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Mohon isi nama buku',
  }),
  year: Joi.date().min(1945).max('now').required(),
  author: Joi.string().required(),
  summary: Joi.string().required(),
  publisher: Joi.string().required(),
  pageCount: Joi.number().integer().positive()
    .required(),
  readPage: Joi.number().integer().min(0)
    .max(Joi.ref('pageCount')).message('readPage tidak boleh lebih besar dari pageCount')
    .required(),
  reading: Joi.boolean().required(),
});

const querySchema = Joi.object({
  name: Joi.string(),
  reading: Joi.number().integer().min(0).max(1),
  finished: Joi.number().integer().min(0).max(1),
});

const successSchema = Joi.object({
  status: Joi.string().valid('success').required(),
  message: Joi.string().required(),
});

const successCreatedSchema = successSchema.append({
  data: {
    bookId: Joi.string().required(),
  }
});

const successGetAllBooksSchema = Joi.object({
  status: Joi.string().valid('success').required(),
  data: {
    books: Joi.array().items({
      id: Joi.string().required(),
      name: Joi.string().required(),
      publisher: Joi.string().required(),
    }),
  }
});

const successGetBookByIdSchema = Joi.object({
  status: Joi.string().valid('success').required(),
  data: {
    book: payloadSchema.append({
      id: Joi.string().required(),
      finished: Joi.boolean().required(),
      insertedAt: Joi.date().iso().required(),
      updatedAt: Joi.date().iso().required(),
    }),
  }
});

module.exports = {
  failSchema,
  payloadSchema,
  querySchema,
  successSchema,
  successCreatedSchema,
  successGetAllBooksSchema,
  successGetBookByIdSchema
};
