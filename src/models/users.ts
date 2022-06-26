import { Schema, model, Document, Model } from "mongoose";

export interface UserDocument extends Document{
    name: String;
    dept: String
}

interface User {
    name: String;
    dept: String
}

interface UserModel extends Model<User>{
    myNewStaticFn(): number;
    mathStaticFn(): String;
}

const userSchema = new Schema<User, UserModel> ({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    }
})

userSchema.static('myNewStaticFn', function myNewStaticFn() {
    return 150;
})

userSchema.static('mathStaticFn', function mathStaticFn() {
    return 'Hello';
})

const UserModel = model<User, UserModel> ('User', userSchema);
export default UserModel;