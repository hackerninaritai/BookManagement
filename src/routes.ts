import express from "express";
import * as CategoryController from './controllers/category';

const router = express.Router();

router.post('/category/create', CategoryController.create)
router.get('/category/all', CategoryController.findAll)
router.get('/category', CategoryController.findByNameEn)

export default router;