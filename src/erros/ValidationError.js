import BaseError from "./BaseError.js";

class ValidationError extends BaseError {
  constructor(err) {
    const formattedMessage = Object.values(err.errors)
      .map((erro) => erro.message)
      .join("; ");

    super(`Validation failed: ${formattedMessage}`, 400);
  }
}

export default ValidationError;
