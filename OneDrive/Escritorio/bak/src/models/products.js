import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsFilePath = path.join(__dirname, '../products.json');


const readProductsFromFile = () => {
    try {
    const data = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(data);
    } catch (error) {
    console.error('Error leyendo el archivo de productos:', error);
    return [];
    }
};
const writeProductsToFile = (products) => {
    try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
    } catch (error) {
    console.error('Error escribiendo en el archivo de productos:', error);
    }
};
const getProducts = () => {
    return readProductsFromFile();
};
const addProduct = (product) => {
    const products = readProductsFromFile();
    products.push(product);
    writeProductsToFile(products);
};
const deleteProduct = (index) => {
    const products = readProductsFromFile();
    products.splice(index, 1);
    writeProductsToFile(products);
};
export default {
    getProducts,
    addProduct,
    deleteProduct
};
