const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username :{
        type:String,
        require :true,
        unique : true
    },
    email :{
        type:String,
        require :true,
        unique : true
    },
    password :{
        type:String,
        require :true
    },
    role :{
        type:String,
        require :true,
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
})

// hash password before saving to database
userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
})

// compare password when user tries to login

userSchema.methods.comparePassword = function(givenPassword){
    return bcrypt.compare(givenPassword, this.password)
}

const User = new model('User', userSchema);

module.exports = User;