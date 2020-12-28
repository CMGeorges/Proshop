import express from 'express'
import AsyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

/**
 * @desc Fetch all products
 * @route GET /api/products
 * @access Public
 */
router.get(
  '/',
  AsyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.status(200).json(products)
  })
)

/**
 * @desc Fetch single product
 * @route GET /api/products/:id
 * @access Public
 */
router.get(
  '/:id',
  AsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
    res.json(product)
  })
)

export default router