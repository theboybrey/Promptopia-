import { Schema, model, models } from "mongoose";

//User Schema 
const UserSchema = new Schema({
    email : {
        type: String,
        required: [true, 'Email address is required!'],
        unique: [true, "Email is already exists!"],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);

export default User;