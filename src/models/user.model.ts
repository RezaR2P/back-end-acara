import mongoose from "mongoose";



export interface User {
    fullname: string;
    username: string;
    email: string;
    password: string;
    role: string;
    profilePicture: string;
    isActive: boolean;
    activationToken: string;
}



const Schema = mongoose.Schema;
const userSchema = new Schema<User>({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    profilePicture: { type: String, default: "user.jpg" },
    isActive: { type: Boolean, default: false },
    activationToken: { type: String }
}, {
    timestamps: true
});


const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;