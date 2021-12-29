import * as Joi from "joi";

// type ArtifactQueryResult = {
//   id: String;
//   features: object[];
//   __type: String;
// };

// Joi will perform schema to type defintion check to make sure they match

export const schema = Joi.object({
  id: Joi.object({
    instanceId: Joi.string().required(),
    type: Joi.string().required()
  }).required(),
  features: Joi.object().required(),
  __type: Joi.string().required()
}).meta({ className: "Artifact" });
