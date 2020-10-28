import express from "express";
import * as CategoryController from './controllers/category';
import * as AuthorController from './controllers/author';
import * as BookController from './controllers/book';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

const swaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }'
};

const router = express.Router();

router.post('/category/create', CategoryController.create)
router.get('/category', CategoryController.find)


router.post('/author/create', AuthorController.create)
router.get('/author', AuthorController.find)

router.get('/book', BookController.find)


router.use('/dev/api-docs', swaggerUi.serve);
router.get('/dev/api-docs', swaggerUi.setup(apiSpec, swaggerUiOptions));

export default router;