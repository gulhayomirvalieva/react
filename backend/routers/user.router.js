const { Router } = require("express");
const users = Router();

const {
  postRegister,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  postLogin,
} = require("../controllers/users.controller");

const {
  registerValidationSchema,
  updateValidationSchema,
} = require("../validation/user.validation");
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
 * tags:
 *   name: Users
 * description: Foydalanuvchilarni boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Yangi foydalanuvchi ro'yxatdan o'tkazish
 *     tags: [Users]
 *     description: Yangi foydalanuvchi yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Foydalanuvchi yagona username
 *               password:
 *                 type: string
 *                 description: Foydalanuvchi akkaunti uchun parol
 *               firstname:
 *                 type: string
 *                 description: Foydalanuvchi ismi
 *               lastname:
 *                 type: string
 *                 description: Foydalanuvchi familiyasi
 *               brithday:
 *                 type: string
 *                 format: date
 *                 description: Foydalanuvchi tug'ilgan kuni (YYYY-MM-DD formatda)
 *               jinsi:
 *                 type: string
 *                 description: Foydalanuvchi jinsi
 *               address:
 *                 type: string
 *                 description: Foydalanuvchi manzili
 *               phone:
 *                 type: string
 *                 description: Foydalanuvchi telefon raqami
 *               car_id:
 *                 type: string
 *                 description: Foydalanuvchi avtomobili uchun ma'lumot (ObjectId)
 *               house_id:
 *                 type: string
 *                 description: Foydalanuvchi uyi uchun ma'lumot (ObjectId)
 *               product_id:
 *                 type: string
 *                 description: Foydalanuvchi ta'limi uchun ma'lumot (ObjectId)
 *     responses:
 *       '201':
 *         description: Foydalanuvchi muaffaqiyatli ro'yxatdan o'tdi
 *       '400':
 *         description: Yomon so'rov, validatsiya xatosi
 *       '500':
 *         description: Ichki server xatosi
 */

users.post(
  "/register",
  validationSchema(registerValidationSchema),
  postRegister
);
/**
 * @swagger
 * /users/getUser:
 *   get:
 *    summary: Barcha foydalanuvchilarni olish
 *    tags: [Users]
 *    description: Barcha foydalanuvchilar ro'yxatga olish
 *    responses:
 *     '200':
 *       description: Foydalanuvchilar r'yxati mufaqqiyatli qaytarildi
 *     '500':
 *        description: Ichki server xatosi
 */

users.get("/getUser", getUsers);

/**
 * @swagger
 * /users/getUserById/{id}:
 *   get:
 *     summary: Foydalanuvchini ID bo'yicha olish
 *     tags: [Users]
 *     description: Foydalanuvchi Id bo'yicha olish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Foydalanuvchi olish uchun ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Foydalanuvchi mufaqqiyatli qaytarildi
 *       '400':
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

users.get("/getUserById/:id", getUserById);

/**
 *  @swagger
 *  /users/updateUserById/{id}:
 *   put:
 *     summary: Foydalanuvchi yangilandi
 *     tags: [Users]
 *     description: Foydalanuvchi malumotlarini yangilash (masalan, username, email, telefon va boshqalar)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Foydalanuvchini olish uchun ID
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
 *               username:
 *                 type: string
 *                 description: Yangi username
 *               firstname:
 *                 type: string
 *                 description: Yangi ism
 *               lastname:
 *                 type: string
 *                 description: Yangi familiya
 *               address:
 *                 type: string
 *                 description: Yangi manzil
 *               phone:
 *                 type: number
 *                 description: Yangi telefon raqam
 *               car_id:
 *                 type: string
 *                 description: Foydalanuvchining yangi avtomobili (ObjectId)
 *               house_id:
 *                 type: string
 *                 description: Foydalanuvchining yangi uyi (ObjectId)
 *               product_id:
 *                 type: string
 *                 description: Foydalanuvchi ta'limi uchun ma'lumot (ObjectId)
 *     responses:
 *       '200' :
 *         description: Foydalanuvchi muvaffaqiyyatli yangilandi
 *       '400' :
 *         description: Yomon so'rov validatsiya xatosi
 *       '404' :
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

users.put(
  "/updateUserById/:id",
  validationSchema(updateValidationSchema),
  updateUser
);

/**
 * @swagger
 * /users/deleteUserById/{id}:
 *   delete:
 *     summary: Foydalanuvchini o'chirish
 *     tags: [Users]
 *     description: ID orqali foydalanuvchini o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Foydalanuvchi IDsi
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Foydalanuvchi muvaffaqiyatli o'chirildi
 *       '404':
 *         description: Foydalanuvchi topilmadi
 *       '500':
 *         description: Ichki server xatosi
 */

users.delete("/deleteUserById/:id", deleteUser);

/**
 *  @swagger
 * /users/login:
 *   post:
 *     summary: Foydalanuvchi tizimga kirishi
 *     tags: [Users]
 *     description: Login qilish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli login
 *       401:
 *         description: Login xato
 *       500:
 *         description: Ichki server xatosi
 */

users.post("/login", postLogin);

module.exports = { users };
