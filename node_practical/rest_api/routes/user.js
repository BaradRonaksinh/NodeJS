const express = require('express');
const { handleGetAllUsers,
    handleGetUsersByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateUserByID
} = require('../controllers/user')

const router = express.Router();

router.route('/').get(handleGetAllUsers).post(handleCreateUserByID)

router
    .route('/:id')
    .get(handleGetUsersByID)
    .patch(handleUpdateUserByID)
    .delete(handleDeleteUserByID)

module.exports = router;