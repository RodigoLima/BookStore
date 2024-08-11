/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import BaseError from "../erros/BaseError.js";
import IncorrectRequest from "../erros/IncorrectRequest.js";
import ValidationError from "../erros/ValidationError.js";
import NotFound from "../erros/NotFound.js";

function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new IncorrectRequest().sendResponse(res);
  } else if (err instanceof NotFound) {
    err.sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandler;
