import express from 'express';
import { index } from '../controllers/ProductController';
const router = express.Router();


router.get('/:slug', index)
router.get('/', index)

module.exports = router