import BaseError from "./BaseError.js";

class IncorrectRequest extends BaseError {
  constructor() {
    super("One or more date provide are incorret", 400);
  }
}

export default IncorrectRequest;
