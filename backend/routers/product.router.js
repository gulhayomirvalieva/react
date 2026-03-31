const { Router } = require("express");
const products = Router();
const {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const {
  productValidationSchema,
  updateProductValidationSchema,
} = require("../validation/product.validation");
const validationSchema = (Schema) => (req, res, next) => {
  const validationResult = Schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};

products.post(
  "/postProduct",
  validationSchema(productValidationSchema),
  postProduct
);
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: products control
 */

/**
 * @swagger
 * /products/postProduct:
 *   post:
 *     summary: Yangi mashinani ro'yxatdan otqazish
 *     tags: [Products]
 *     description: Yangi product yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               isActive:
 *                 type: boolean
 *               sellerName:
 *                 type: string
 *               sellerLastName:
 *                 type: string
 *               sellerphone:
 *                 type: string
 *               count:
 *                 type: number
 *     responses:
 *       201:
 *         description: Mashina muvaffaqiyatli ro'yxatdan o'tdi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

products.get("/getproduct", getProducts);
/**
 * @swagger
 * /products/getProduct:
 *   get:
 *     summary:  Hamma productni olish
 *     tags: [Products]
 *     description: Hamma productni olish
 *     responses:
 *       200:
 *         description: Hamma foydalanuvchilar ro'yxati
 *       500:
 *         description: Ichki server xatosi
 */

products.get("/getProductById/:id", getProduct);
/**
 * @swagger
 * /products/getProductById/{id}:
 *   get:
 *     summary: productni alohida olish
 *     tags: [Products]
 *     description: ID orqali productni olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: productni IDsi
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: mashina topildi
 *       404:
 *         description: mashina topilmadi
 *       500:
 *         description: Ichki server xatosi
 */

products.put(
  "/updateProductById/:id",
  validationSchema(updateProductValidationSchema),
  updateProduct
);

/**
 * @swagger
 * /products/updateProductById/{id}:
 *   put:
 *     summary: productni yangilash
 *     tags: [Products]
 *     description: ID orqali productni ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: productni ID si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Yangilandi
 *               description:
 *                 type: string
 *                 description: Yangilandi
 *               price:
 *                 type: number
 *                 description: narx yangilandi
 *               isActive:
 *                 type: boolean
 *                 description: yangilandi
 *               sellerName:
 *                 type: string
 *                 description: yangilandi
 *               sellerLastName:
 *                 type: string
 *                 description: yangilandi
 *               sellerphone:
 *                 type: string
 *                 description: yangilandi
 *               count:
 *                 type: number
 *                 description: yangilandi
 *
 *     responses:
 *       200:
 *         description: product muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov
 *       500:
 *         description: Ichki server xatosi
 */

products.delete("/deleteProductById/:id", deleteProduct);
/**
 * @swagger
 * /products/deleteProductById/{id}:
 *   delete:
 *     summary: product o'chirish
 *     tags: [Products]
 *     description: ID orqali product o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: product IDsi
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: mashinani muvaffaqiyatli o'chirildi
 *       404:
 *         description: mashinani topilmadi
 *       500:
 *         description: Ichki server xatosi
 */
module.exports = { products };
