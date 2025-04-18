
const {
  addBookHandler,
  getAllBooksHandler
} = require('./handler');

const {
  failSchema,
  payloadSchema,
  querySchema,
  successCreatedSchema,
  successGetAllBooksSchema
} = require('./schema');

const responseFailAction = (_, handler, error) => {
  return handler.response({
    status: 'fail',
    message: error.message,
  }).code(400).takeover();
};

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    options: {
      validate: {
        payload: payloadSchema,
        failAction: (_, handler, error) => {
          return handler.response({
            status: 'fail',
            message: `Gagal menambahkan buku. ${error.message}`,
          }).code(400).takeover();
        },
      },
      response: {
        status: {
          201: successCreatedSchema,
          400: failSchema,
        },
      }
    }
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
      response: {
        failAction: responseFailAction,
        status: {
          200: successGetAllBooksSchema
        },
      },
    }
  },
];

module.exports = routes;
