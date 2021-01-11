import AsyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

/**
 * @description Fetch all products
 * @route GET /api/products
 * @access Public
 */
const getProducts = AsyncHandler(async (req, res) => {
  //the amount of item that can be show in the page 
  const pageSize = 5
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize - (page - 1))

  res.json({products,page,pages:Math.ceil(count/pageSize)})
})

/**
 * @desc Fetch single product
 * @route GET /api/products/:id
 * @access Public
 */
const getProductById = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

/**
 * @desc Delete single product
 * @route DELETE /api/products/:id
 * @access Private/Admin
 */
const deleteProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

/**
 * @desc Create a product
 * @route POST /api/products/:id
 * @access Private/Admin
 */
const createProduct = AsyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample category',
    category: 'Sample brand',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createProduct = await product.save()
  res.status(201).json(createProduct)
})
/**
 * @desc Update a product
 * @route PUT /api/products/:id
 * @access Private/Admin
 */
const updateProduct = AsyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const createdProduct = await product.save()

    res.status(201).json(createdProduct)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

/**
 * @desc Create new review
 * @route POST /api/products/:id/reviews
 * @access Private
 */
const createProductReview = AsyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }
    product.reviews.push(review)

    product.numReviews == product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()

    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
}
