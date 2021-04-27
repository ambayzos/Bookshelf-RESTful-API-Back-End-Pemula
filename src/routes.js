const {
  addBookshandler,
  getAllBooksHandler,
  getByidBooksHandler,
  getEditBooksHandler,
  deleteBookByIdsHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookshandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByidBooksHandler,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: getEditBooksHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdsHandler,
  },
];

module.exports = routes;
