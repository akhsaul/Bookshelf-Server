# Bookshelf-Server
A Bookshelf Server contains simple API which can be use to make your own App.

Routes:
- book creation
- retrive all books with filter (book name, reading status, finished status)
- update book
- delete book


Dependencies:
- [Hapi](https://github.com/hapijs/hapi), to create http server
- [Joi](https://github.com/hapijs/joi), to create a validation scheme for both requests and responses
- [nanoid](https://github.com/ai/nanoid), to create unique id
