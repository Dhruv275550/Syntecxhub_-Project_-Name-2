const express = require("express");

const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const basicAuth = require("../middleware/basicAuth");

const router = express.Router();

router.post("/", basicAuth, createUser);

router.get("/", basicAuth, getUsers);

router.get("/:id", basicAuth, getUserById);


router.put("/:id", basicAuth, updateUser);

router.delete("/:id", basicAuth, deleteUser);

module.exports = router;