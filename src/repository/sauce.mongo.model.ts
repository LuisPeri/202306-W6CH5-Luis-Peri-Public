import { Schema, model } from 'mongoose';
import { Sauce } from '../entities/sauce';

const sauceSchema = new Schema<Sauce>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  bought: {
    type: Boolean,
    required: true,
    unique: true,
  },
});

sauceSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.password;
  },
});

export const SauceModel = model('Thing', sauceSchema, 'things');
// Chuleta: modelo, objeto tipo, coleccion a la que pertenece
