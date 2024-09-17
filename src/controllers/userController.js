const users = require('../models/userModel')

const getAllUsers = (req, res) => {
    try{
        res.json({status: 'ok', message: 'api request successful', users, users})
    }catch(err){
        res.json({status: 'failed', message: err.message})
    }
}

const getUserById = (req, res) => {
    try{
        const userId = req.params.id
        const user = users.find(u => u.id ===  parseInt(userId))
        if(!user)
            return res.status(404).json({status: "false", message:"user doesn't exist!"})
        else
            res.json({status: "ok", message: "user exists", user: user})
    }catch(err){
        res.json({status: 'failed', message: err.message})
    }
}

const addUser = (req, res) => {
    try{
        const newUser = { id: users.length + 1, name: req.body.name, email: req.body.email }
        users.push(newUser)
        res.json({status: 'ok', message: `user with name ${newUser.name} has been created`})
    }catch(err){
        res.json({status: 'failed', message: err.message})
    }
    
}

const updateUser = (req, res) => {
    try{
        const user = users.find(u => u.id === parseInt(req.params.id))
        user.email = req.body.email

        if(user)
            res.json({status: 'ok', message: `the user with name ${user.name} has been updated!`})
        else
            res.json({status: 'failed', message: 'user is not found!'})

    }catch(err){
        res.json({status: 'failed', message: err.message})
    }
}

const deleteUser = (req, res) => {
    try{
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id))

        if(userIndex != -1){
            username = users[userIndex].name
            users.splice(userIndex, 1)
            res.json({status: 'ok', message: `the user with name ${username} has been deleted!`})
        }else
            res.json({status: 'failed', message: 'user is not found!'})

    }catch(err){
        res.json({status: 'failed', message: err.message})
    }

}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}