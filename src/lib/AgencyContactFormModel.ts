import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { nanoid } from "nanoid";
import mongoose from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "agencycontactforms",
  },
  options: {
    allowMixed: 0,
  },
})
export class AgencyContactForm {
  @prop({ default: () => nanoid(9) })
  _id: string | ObjectId;

  @prop()
  name: string;

  @prop()
  email: string;

  @prop()
  message: string;

  @prop()
  origin: string;
}

export const AgencyContactFormModel =
  mongoose.models.AgencyContactForm || getModelForClass(AgencyContactForm);
