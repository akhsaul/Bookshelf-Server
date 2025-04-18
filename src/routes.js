
const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
} = require('./handler');

const {
  failSchema,
  payloadSchema,
  querySchema,
  successSchema,
  successCreatedSchema,
  successGetAllBooksSchema,
  successGetBookByIdSchema
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
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
    options: {
      response: {
        failAction: responseFailAction,
        status: {
          200: successGetBookByIdSchema,
          404: failSchema,
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
    options: {
      validate: {
        payload: payloadSchema,
        failAction: (_, handler, error) => {
          return handler.response({
            status: 'fail',
            message: `Gagal memperbarui buku. ${error.message}`,
          }).code(400).takeover();
        },
      },
      response: {
        status: {
          200: successSchema,
          400: failSchema,
          404: failSchema,
        },
      }
    }
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
    options: {
      response: {
        failAction: responseFailAction,
        status: {
          200: successSchema,
          404: failSchema,
        },
      }
    }
  },
];

module.exports = routes;
