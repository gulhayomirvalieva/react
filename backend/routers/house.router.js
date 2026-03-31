const { Router } = require("express");
const houses = Router();

const {
  postHouse,
  getHouse,
  getHouseById,
  updateHouseById,
  deleteHouseById,
} = require("../controllers/house.controller");

const {
  houseValidationSchema,
  houseValidationSchemaUpdate,
} = require("../validation/house.validation");
const { Schema } = require("mongoose");

const validationSchema = (Schema) => (req, res, next) => {
  const validationResult = Schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};
/**
 * @swagger
 * /houses/postHouse:
 *  post:
 *    summary: Yangi foydalanuvchini ro'yxatdan o'tkazish
 *    tags: [House]
 *    description: Yangi Foydalanuvchi yaratish
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              region:
 *                type: string
 *                description: Foydalanuvchining yagona yashash joyi
 *              city:
 *                type: string
 *                description: Foydalanuvchining yashash shahri
 *              house_number:
 *                type: number
 *                description: Foydalanuvchining uy raqami
 *              street:
 *                type: string
 *                description: Foydalanuvchinig ko'chasi
 *              family_members:
 *                type: number
 *                description: Foydalnuvchining oila azolari
 *              location:
 *                type: string
 *                description: Foydalanuvchining yashash manzili
 *    responses:
 *     '201':
 *       description: Foydalanuvchi muvaffaqiyatli ro'yxatdan o'tdi
 *     '400':
 *       description: Yomon so'rov, validatsiya xatosi
 *     '500':
 *       description: Ichki server xatosi
 */
houses.post("/postHouse", validationSchema(houseValidationSchema), postHouse);

/**
 * @swagger
 * /houses/getHouse:
 *  get:
 *   summary: Barcha uylarni olish
 *   tags: [House]
 *   description: Barcha uylar malumotlari olindi
 *   responses:
 *    '200':
 *      description: Uylar ro'yxati mufaqqiyatli qaytarildi
 *    '500':
 *      description: Ichki server xatosi
 */

houses.get("/getHouse", getHouse);

/**
 * @swagger
 * /houses/getHouseById/{id}:
 *  get:
 *    summary: Foydalanuvchini uyini ID bo'yicha olish
 *    tags: [House]
 *    description: Foydalanuvchini uyini ID bo'yicha olish
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Foydalanuvchini uyini ID bo'yicha olish
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Uylar ro'yxati mufaqqiyatli qaytarildi
 *      '404':
 *        description: Foydalanuvchini  topilmadi
 *      '500':
 *        description: Ichki server xatosi
 */

houses.get("/getHouseById/:id", getHouseById);
/**
 * @swagger
 * /houses/updateHouseById/{id}:
 *   put:
 *     summary: Foydalanuvchi uy malumotlani yangilash
 *     tags: [House]
 *     description: Foydalanuvchining uy malumotlarini yangilash (masalan  region, city, house_number, street family_members, location va boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Foydalanuvchini uyni olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               region:
 *                 type: string
 *                 description: yangi mintaqa
 *               city:
 *                 type: string
 *                 description: yangi shaxar
 *               house_number:
 *                 type: number
 *                 description: yangi uy raqam
 *               street:
 *                 type: string
 *                 description: yangi kocha
 *               family_members:
 *                 type: number
 *                 description: yangi olila
 *               location:
 *                 type: string
 *                 description: yangi yashash joyi
 *     responses:
 *       '200':
 *         description: Foydalanuvchining uy malumotlari mufaqqiyatli yangilandi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '404':
 *         description: Foydalanuvchining uy malumotlari topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */
houses.put(
  "/updateHouseById/:id",
  validationSchema(houseValidationSchemaUpdate),
  updateHouseById
);
/**
 * @swagger
 * /houses/deleteHouseById/{id}:
 *   delete:
 *     summary: Delete a house by ID
 *     tags: [House]
 *     description: Delete a house with the provided ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the house to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: House deleted successfully
 *       '404':
 *         description: House not found
 *       '500':
 *         description: Internal server error
 */
houses.delete("/deleteHouseById/:id", updateHouseById);
module.exports = { houses };
