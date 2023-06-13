import { Schema, model } from 'mongoose';
import { Things } from '../entities/things';

const thingSchema = new Schema<Things>({
  love: {
    type: String,
    required: true,
    unique: true,
  },
});

thingSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.password;
  },
});

export const ThingsModel = model('Thing', thingSchema, 'things');
// Modelo, objeto tipo, coleccion a la que pertenece
