//@ts-check
import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;

export interface UserDocument extends Document {
  id: string;
  email: string;
  password: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  role: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model<UserDocument>('User', UserSchema);
