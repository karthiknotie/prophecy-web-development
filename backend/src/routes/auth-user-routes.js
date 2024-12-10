const express = require('express');
const User = require('../models/user-model');
const generateToken = require('../middleware/generateToken');
const router = express.Router();

// Register endpoint
router.post('/register', async (req, res) => {
    try {
        const { email, password, username} = req.body;
        const user = new User({ email, password, username });
        console.log(user)
        await user.save();
        res.status(200).send({message:"User Registered Sucessfully", user:user})
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Registration failed' });
    }
});

// login a user
router.post("/login", async(req, res) =>{
    try{
        const {email,password}=req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).send({message:"User Not Found!"})
        }
        const isMatch = await user.comparePassword(password)

        if(!isMatch){
            return res.status(401).send({message: 'Invalid Password'})
        }

        // Todo: generate token here
        const token = await generateToken(user._id)
       res.cookie("token", token, {
            httpOnly :true,
            secure: true,
            sameSite : true
       })

        res.status(200).send({message: 'Login Sucessfully',token, user:{
            _id:user._id,
            email:user.email,
            username: user.username,
            role: user.role
        }})
    } catch(error){
        console.error('Failed to Login', error);
      res.status(500).send({ message: 'Login Failed! Try Again' });
    }
})

// logout user
router.post("/logout", async(req, res)=>{
    try{
        res.clearCookie('token');
        res.status(200).send({message: 'Logged out Sucessfully Done !'});
    }
    catch (error){
        console.error('Failed to Logout', error);
        res.status(500).send({ message: 'Logout Failed!' });
    }
})

// get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, 'id email role');
        res.status(200).send({message :"users found sucesfully", users});
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ message: 'Failed to fetch users' });
    }
});

// delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ message: 'Failed to delete user' });
    }
})


// update a user role
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(id, { role }, { new: true });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send({ message: 'User role updated successfully', user });
    } catch (error) {
        console.error('Error updating user role:', error);
        res.status(500).send({ message: 'Failed to update user role' });
    }
});




module.exports = router;