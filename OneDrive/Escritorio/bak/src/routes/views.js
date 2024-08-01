import express from 'express';
import productsController from '../controllers/productsController.js';

const router = express.Router();

router.get('/home', productsController.renderHome);
router.get('/realtimeproducts', productsController.renderRealTimeProducts);

export default router;
