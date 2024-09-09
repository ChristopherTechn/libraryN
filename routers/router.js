const express = require('express');
const addBook  = require('../controllers/addbooks');
const getAllBooks = require('../controllers/getbooks');
const getMembers = require('../controllers/gettallmemebers');
const addMembers = require('../controllers/addmembers')
const getlibraries = require('../controllers/library');
const addLibrary = require ('../controllers/addlibrary');
const deleteBook = require('../controllers/deletebook');
const GetBookID = require('../controllers/getbookbyid')
const GetBookTitle = require('../controllers/getbookTitle');
const searchBooksByName = require('../controllers/Title')
const LoginUser = require('../controllers/login')


const routers = express.Router();

routers.get('/allbooks', getAllBooks);
routers.post('/books', addBook);
routers.get('/allmembers', getMembers);
routers.post('/addmembers', addMembers);
routers.get('/all', getlibraries);
routers.post('/addLibrary', addLibrary);
routers.delete('/deletebook/:id', deleteBook);
routers.get('/book/:id', GetBookID);
routers.post('/book/Title', GetBookTitle);
routers.get('/searchbooks/:name', searchBooksByName);  
routers.post('/login',LoginUser, )



module.exports = routers;
