// const express = require("express");
// const router = express.Router();
// const gameController = require("../controller/gameController");

// // gameRoute.js
// router.get("/", gameController.getGames);
// router.get("/:id", gameController.getGameById);
// router.post("/", gameController.createGame);
// router.put("/:id", gameController.updateGame);
// router.delete("/:id", gameController.deleteGame);


// module.exports = router;


const express = require("express");
const router = express.Router();
const gameController = require("../controller/gameController");

/**
 * @swagger
 * tags:
 *   name: Games
 *   description: Game management
 */

/**
 * @swagger
 * /api/games:
 *   get:
 *     tags: [Games]
 *     summary: Get all games
 *     responses:
 *       200:
 *         description: List of games
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   imageUrl:
 *                     type: string
 */
router.get("/", gameController.getGames);

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     tags: [Games]
 *     summary: Get a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Game ID
 *     responses:
 *       200:
 *         description: Game details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 imageUrl:
 *                   type: string
 *       404:
 *         description: Game not found
 */
router.get("/:id", gameController.getGameById);

/**
 * @swagger
 * /api/games:
 *   post:
 *     tags: [Games]
 *     summary: Create a new game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - price
 *               - imageUrl
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imageUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Game created
 *       400:
 *         description: Invalid data
 */
router.post("/", gameController.createGame);

/**
 * @swagger
 * /api/games/{id}:
 *   put:
 *     tags: [Games]
 *     summary: Update a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Game ID
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
 *               imageUrl:
 *                 type: string
 *     responses:
 *       200:
 *         description: Game updated
 *       404:
 *         description: Game not found
 */
router.put("/:id", gameController.updateGame);

/**
 * @swagger
 * /api/games/{id}:
 *   delete:
 *     tags: [Games]
 *     summary: Delete a game by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Game ID
 *     responses:
 *       200:
 *         description: Game deleted
 *       404:
 *         description: Game not found
 */
router.delete("/:id", gameController.deleteGame);

module.exports = router;
