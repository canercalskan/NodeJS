import { v4 as uuidv4 } from 'uuid';

let users = []

export const getAllUsers = (req , res) => {
    console.log('All users requested.. 200');
    res.status(200).send(users);
}

export const getUserWithID = (req , res) => {
    const returnUser = users.find(user => user.id === req.params.id) || undefined;
    if(returnUser) {
        console.log('User ' +  returnUser.id + ' requested.. 200')
        res.status(200).send(returnUser)
    }
    else {
        console.log('User ' + req.params.id + ' requested.. 404')
        res.status(404).send('404 - no such user');
    }
}

export const postNewUser = (req , res) => {
    const newUser = {
        name : req.body.name || null,
        role : req.body.role || null,
        id : uuidv4()
    }
    if(newUser.name && newUser.role) {
        users.push(newUser)
        console.log("New user " + newUser.id + ' posted');
        res.status(200).send('User ' + newUser.name + ' succesfully posted')
    }
    else {
        res.status(400).send("Bad request");
    }
}

export const updateUser = (req , res) => {
    const userToBeUpdated = users.find(user => user.id === req.params.id) || undefined;
    if(userToBeUpdated) {
        userToBeUpdated.name = req.params.username;
        users = users.filter(user => user.id !== req.params.id);
        users.push(userToBeUpdated);
        console.log('User ' + req.params.id + ' updated as ' + userToBeUpdated.name)
        res.status(200).send('User updated as: ' + userToBeUpdated.name)
    } 
    else {
        res.status(404).send('No such user')
    }
}

export const deleteUser = (req , res) => {
    const userToBeDeleted = users.find(user => user.id === req.params.id) || undefined;
    if(userToBeDeleted) {
        users = users.filter(user => user.id !== userToBeDeleted.id);
        console.log('User ' + userToBeDeleted.id + ' deleted.. 200');
        res.status(200).send('User ' + userToBeDeleted.id + ' succesfully deleted.')
    }
    else {
        console.log('User ' + req.params.id + ' not found to delete.. 404');
        res.status(404).send('No such user');
    }
}
