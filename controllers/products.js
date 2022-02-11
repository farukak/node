const Product = require('../models/product')


const getAllProduct = async(req,res) => {
    try {
        const allProducts = await Product.find({})
        res.status(200).json({
            success:true,
            data: allProducts
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null
        })
    }
}


const createProduct = async (req,res) => {
    try {
        const product = await Product.create({
            "name":"faruk"
        });
        res.status(201).json({
            success:true,
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error

        })
    }
}



module.exports = {
    getAllProduct,
    createProduct,
    editProduct,
    deleteProduct
}