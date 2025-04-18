
const {
  addBookHandler,
} = require('./handler');

const {
  failSchema,
  payloadSchema,
  successCreatedSchema,
} = require('./schema');

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
];

module.exports = routes;
