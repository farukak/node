const getAllProducts = (req,res) => {
    res.status(200).json({
        "Message" : "All products"
    })
}

module.exports = {
    getAllProducts
}