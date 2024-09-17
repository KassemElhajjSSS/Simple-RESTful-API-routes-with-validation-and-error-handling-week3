const express = require('express')
const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/userController')
const validateUserInfo = require('../middlewares/validateUser')
const router = express.Router()


router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', validateUserInfo('create'), addUser)

router.put('/:id',validateUserInfo(''), updateUser)

router.delete('/:id', deleteUser)

module.exports = router

