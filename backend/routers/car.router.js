const { Router } = require("express");
const cars = Router();

const {
  postCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/car.controller");

const {
  carValidationSchema,
  carValidationSchemaUpdate,
} = require("../validation/car.validation");

const validationSchema = (Schema) => (req, res, next) => {
  const validationResult = Schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};
cars.post("/postCar", validationSchema(carValidationSchema), postCar);
/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: cars control
 */

/**
 * @swagger
 * /cars/postCar:
 *   post:
 *     summary: Yangi mashinani ro'yxatdan otqazish
 *     tags: [Cars]
 *     description: Yangi mashina yaratish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               model:
 *                 type: string
 *               description:
 *                 type: string
 *               color:
 *                 type: string
 *               horsePower:
 *                 type: number
 *               carType:
 *                 type: string
 *               charging:
 *                 type: string
 *               weight:
 *                 type: string
 *               gasoline:
 *                 type: string
 *               yearMachine:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Mashina muvaffaqiyatli ro'yxatdan o'tdi
 *       400:
 *         description: Yomon so'rov, validatsiya xatosi
 *       500:
 *         description: Ichki server xatosi
 */

cars.get("/getCars", getCars);
/**
 * @swagger
 * /cars/getCars:
 *   get:
 *     summary:  Hamma mashinalarni olish
 *     tags: [Cars]
 *     description: Hamma mashinalarni olish
 *     responses:
 *       200:
 *         description: Hamma foydalanuvchilar ro'yxati
 *       500:
 *         description: Ichki server xatosi
 */

cars.get("/getCarsById/:id", getCarById);
/**
 * @swagger
 * /cars/getCarsById/{id}:
 *   get:
 *     summary: Mashinani alohida olish
 *     tags:
 *       - Cars
 *     description: ID orqali mashinani olish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: mashina IDsi
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

cars.put(
  "/updateCarById/:id",
  validationSchema(carValidationSchemaUpdate),
  updateCar
);
/**
 * @swagger
 * /cars/updateCarById/{id}:
 *   put:
 *     summary: Mashina yangilash
 *     tags: [Cars]
 *     description: ID orqali mashina ma'lumotlarini yangilash
 *     parameters:
 *       - in: path
 *         name: id
 *         description: mashina ID si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                title:
 *                  type: string
 *                  description: Mashinani yangi nomi
 *                model:
 *                  type: string
 *                  description: Mashinani yangi modeli
 *                color:
 *                  type: string
 *                  description: Mashinani yangi rangi
 *                horsePower:
 *                  type: number
 *                  description: Mashinani ot kuchi
 *                carType:
 *                  type: string
 *                  description: Mashinani yangi turi
 *                charging:
 *                  type: string
 *                  description: Mashinani zaryadi
 *                weight:
 *                  type: string
 *                  description: Mashinani ogirligi
 *                gasoline:
 *                  type: string
 *                  description: Mashinani yoqilgisi
 *                yearMachine:
 *                  type: number
 *                  description: Mashinani yili
 *                price:
 *                  type: number
 *                  description: Mashinani narxi
 *
 *     responses:
 *       200:
 *         description: mashina muvaffaqiyatli yangilandi
 *       400:
 *         description: Yomon so'rov
 *       500:
 *         description: Ichki server xatosi
 */

cars.delete("/deleteCarById/:id", deleteCar);
/**
 * @swagger
 * /cars/deleteCarById/{id}:
 *   delete:
 *     summary: Mashina o'chirish
 *     tags: [Cars]
 *     description: ID orqali mashina o'chirish
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: mashinani IDsi
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

module.exports = { cars };
