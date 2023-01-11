import express, { response } from 'express'
import { v4 as uuidv4 } from 'uuid';
import { deleteUser, getAllUsers, getUserWithID, postNewUser, updateUser } from '../functions/user-functions.js';

const userRoutes = express.Router();


//All routes starts with /api, we are using it as a root route.
userRoutes.get('/users' , getAllUsers)

// Post new user to the database
userRoutes.post('/users' , postNewUser)

// Get entry with an id parameter

userRoutes.get('/users/:id' , getUserWithID)

// Delete entry with an id parameter

userRoutes.delete('/users/:id' , deleteUser)

// Update entry with an id parameter

userRoutes.patch('/users/:id/:username' , updateUser)

export default userRoutes