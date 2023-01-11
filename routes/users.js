import express, { response } from 'express'
import { v4 as uuidv4 } from 'uuid';

const userRoutes = express.Router();

let users = []

//All routes starts with /api, we are using it as a root route.
userRoutes.get('/users' , (req , res) => {
    res.send(users)
})

userRoutes.post('/users' , (req , res) => {
    const receivedUser = req.body
    users.push({...receivedUser , id : uuidv4()});
    res.status(200).send('User ' + receivedUser.name + ' posted');
    console.log(uuidv4() +' posted..')
})

userRoutes.delete('/users' , (req,res) => {
    if(users.find(user => user.id === req.body.id)) {
        users = users.filter(user => user.id !== req.body.id);
        res.status(200).send('Succesfully deleted user ' + req.body.id);
        console.log(req.body.id + ' deleted');
    }
    else {
        res.status(404).send('No such user.');
        console.log(req.body.id + ' not exists');
    }
})

userRoutes.put('/users' , (req , res) => {
    if(users.find(user => user.id === req.body.id)) {
        // make an update
    }   
    else {
        res.status(404).send('No such user.')
    }
})

// Get entry with an id

userRoutes.get('/users/:id' , (req , res) => {
    const returnUser = users.find(user => user.id === req.params.id) || undefined;
    if(returnUser) {
        res.status(200).send(returnUser)
    }
    else {
        res.status(404).send('No such user');
    }
     
})

export default userRoutes
