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
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

sauceSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.passwd;
  },
});

export const SauceModel = model('Sauce', sauceSchema, 'Sauces');
// Chuleta: modelo, objeto tipo, coleccion a la que pertenece
