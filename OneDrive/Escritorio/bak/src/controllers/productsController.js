import productsModel from '../models/products.js';

const renderHome = (req, res) => {
    res.render('home', { products: productsModel.getProducts() });
};

const renderRealTimeProducts = (req, res) => {
    res.render('realTimeProducts', { products: productsModel.getProducts() });
};

export default {
    renderHome,
    renderRealTimeProducts
};
